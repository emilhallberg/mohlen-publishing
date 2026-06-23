import Link from "next/link";
import Button from "@/components/Button";

export type PreviewMeta = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  url: string;
  fallback: PreviewMeta;
};

function getAttribute(tag: string, attribute: string) {
  const match = tag.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"));
  return match?.[1];
}

function resolveUrl(value: string | undefined, baseUrl: string) {
  if (!value) return undefined;

  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return undefined;
  }
}

function getTitle(html: string) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
}

function extractMetaTags(html: string) {
  return Array.from(html.matchAll(/<meta\b[^>]*>/gi)).reduce<
    Record<string, string>
  >((tags, [tag]) => {
    const name =
      getAttribute(tag, "name") ||
      getAttribute(tag, "property") ||
      getAttribute(tag, "itemprop");
    const content = getAttribute(tag, "content");

    if (name && content) tags[name] = content;

    return tags;
  }, {});
}

async function getPreviewMeta(url: string, fallback: PreviewMeta) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: "text/html,application/xhtml+xml",
        "user-agent": "Mohlén Publishing link preview",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return fallback;

    const html = await response.text();
    const metaTags = extractMetaTags(html);

    return {
      title:
        metaTags["og:title"] ||
        metaTags["twitter:title"] ||
        getTitle(html) ||
        fallback.title,
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"] ||
        fallback.description,
      image:
        resolveUrl(
          metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
          url,
        ) || fallback.image,
    };
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
    return fallback;
  }
}

export default async function Preview({ url, fallback }: Props) {
  const res = await getPreviewMeta(url, fallback);

  return (
    <div className="grid w-[330px] content-start justify-self-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={res.image} alt={res.title} className="h-[200px] object-cover" />
      <div className="grid justify-start gap-3 mt-2">
        <h1 className="lg:text-2xl text-xl line-clamp-2">{res.title}</h1>
        <p className="line-clamp-3">{res.description}</p>
        <Link href={url} className="w-max" target="_blank">
          <Button>Läs mer</Button>
        </Link>
      </div>
    </div>
  );
}
