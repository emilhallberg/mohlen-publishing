import { JSDOM } from "jsdom";
import Link from "next/link";
import Button from "@/components/Button";

type Props = { url: string };

async function extractMetaTags(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const metaTags = Array.from(document.querySelectorAll("meta")).reduce<
      Record<string, string>
    >((tags, meta) => {
      const name =
        meta.getAttribute("name") ||
        meta.getAttribute("property") ||
        meta.getAttribute("itemprop");

      const content = meta.getAttribute("content");

      if (name && content) tags[name] = content;

      return tags;
    }, {});

    return {
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    };
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
  }
}

export default async function Preview({ url }: Props) {
  const res = await extractMetaTags(url);

  if (!res) return null;

  return (
    <div className="grid w-[330px] content-start justify-self-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={res.image} alt={res.title} className="h-[200px] object-cover" />
      <span className="grid justify-start gap-3 mt-2">
        <h1 className="lg:text-2xl text-xl line-clamp-2">{res.title}</h1>
        <p className="line-clamp-3">{res.description}</p>
        <Link href={url} className="w-max" target="_blank">
          <Button>Läs mer</Button>
        </Link>
      </span>
    </div>
  );
}
