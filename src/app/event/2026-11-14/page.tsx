import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";

const title = "Boksignering med Ester Mohlén";
const description =
  "Välkommen till boksignering med Ester Mohlén hos Books 26 i Hudiksvall lördagen den 14 november 2026 kl. 12.";

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
      <Section
        src="/2026-11-14.png"
        alt="Affisch för boksignering med Ester Mohlén på Books 26 den 14 november kl. 12"
      >
        <p>{description}</p>
        <p>
          Historien om Rick Dahl skildrar ett liv präglat av svåra början,
          ensamhet och kampen mot ett djupt mörker som leder till hemlöshet.
          Samtidigt bär berättelsen på ett hopp om försoning och visar att
          förändring och nya möjligheter alltid kan finnas, även efter ett
          långt fall.
        </p>
        <p>
          <b>Var?</b> Books 26 i Hudiksvall
          <br />
          <b>När?</b> Lördag den 14 november 2026 kl. 12
        </p>
        <p>Delta i utlottningen och få chans att vinna priser!</p>
        <p>Varmt välkommen!</p>
      </Section>
    </main>
  );
}
