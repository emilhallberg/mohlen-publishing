import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";

const title = "Ester Mohlén på Lycklitt 2026";
const description =
  "Möt författaren Ester Mohlén i samtal med Johan Sandberg Mquinne på Lycklitt 2026, fredag den 16 oktober kl. 14:00–14:45.";

export const metadata: Metadata = {
  title,
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description,
};

export default function Event() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8 pb-12">
      <Link href="/#event" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till evenemang
      </Link>
      <h1 className="text-3xl w-full p-6 pt-1 pb-1">{title}</h1>
      <Section src="/ester-1.jpeg" alt="Författaren Ester Mohlén">
        <p>
          Esters litterära verk lämnar läsarna i ett djupt känslohav. Hennes
          författarskap kommer ur en längtan att skriva.
        </p>
        <p>
          I samtal med Johan Sandberg Mquinne får vi veta mer om hennes ärliga
          språk.
        </p>
        <p>
          <b>Evenemang:</b> Lycklitt 2026
          <br />
          <b>När?</b> Fredag den 16 oktober 2026 kl. 14:00–14:45
        </p>
      </Section>
    </main>
  );
}
