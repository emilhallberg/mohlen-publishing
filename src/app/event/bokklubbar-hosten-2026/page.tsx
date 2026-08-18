import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import { Metadata } from "next";
import Link from "next/link";

const title = "Mohléns Bokklubbar hösten 2026";
const description =
  "Välj mellan Klassikerklubben, Upptäckarklubben och Deckarklubben – tre böcker och tre bokcirkelträffar under hösten 2026.";

const clubs = [
  {
    name: "Mohléns Klassikerklubb",
    description:
      "Tre noggrant utvalda litterära klassiker, fördjupande samtal och gemenskap med andra litteraturälskare.",
  },
  {
    name: "Mohléns Upptäckarklubb",
    description:
      "Tre överraskande läsupplevelser och levande boksamtal där vi utforskar nya genrer, författare och perspektiv tillsammans.",
  },
  {
    name: "Mohléns Deckarklubb",
    description:
      "Tre utvalda deckare, diskussioner och gemenskap med andra deckarläsare.",
  },
];

export const metadata: Metadata = {
  title,
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description,
};

export const dynamic = "force-dynamic";

export default function BookClubs() {
  const registrationClosed = new Date() > new Date("2026-09-06T23:59:59+02:00");

  return (
    <main className="grid auto-rows-max-content justify-center gap-8 pb-12">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">{title}</h1>

      <Section
        src="/mohlens-bokklubbar-2026.png"
        alt="Information om Mohléns Bokklubbar hösten 2026"
      >
        <p>{description}</p>
        <p>
          Medlemskapet gäller september, oktober och november och innehåller
          tre handplockade böcker, tre exklusiva bokcirkelträffar och fika vid
          varje träff. Samtalen leds av författare.
        </p>
        <p>
          <b>Var?</b> Träffarna utgår från Hudiksvall
          <br />
          <b>När?</b> September, oktober och november 2026
          <br />
          <b>Pris?</b> 449 kr för hela kvartalet
        </p>
        <p>
          Exakta datum, plats och vilka böcker som ingår meddelas separat.
          Begränsat antal platser.
        </p>
      </Section>

      <section className="w-full max-w-[1080px] grid gap-6 px-6 sm:grid-cols-3">
        {clubs.map((club) => (
          <article
            key={club.name}
            className="grid auto-rows-max gap-4 border border-orange-50 p-6 text-orange-50"
          >
            <h2 className="text-xl">{club.name}</h2>
            <p>{club.description}</p>
          </article>
        ))}
      </section>

      {registrationClosed ? (
        <p className="w-full max-w-[1080px] p-6 text-orange-50">
          Anmälan stängde den 6 september 2026. Kontakta oss gärna om du vill
          ställa en fråga om bokklubbarna.
        </p>
      ) : (
        <EventForm>
          <h2 className="text-2xl">Anmäl dig senast 6 september</h2>
          <Select label="Välj bokklubb" name="event" required defaultValue="">
            <option value="" disabled>
              Välj ett alternativ
            </option>
            {clubs.map((club) => (
              <option key={club.name} value={`${club.name} – hösten 2026`}>
                {club.name}
              </option>
            ))}
          </Select>
          <Input type="text" name="name" autoComplete="name" required>
            Namn
          </Input>
          <Input type="email" name="email" autoComplete="email" required>
            Email
          </Input>
          <Input type="tel" name="phone" autoComplete="tel" required>
            Telefon
          </Input>
          <Textarea name="comment">Övriga önskemål</Textarea>
          <Button type="submit">Bekräfta anmälan</Button>
        </EventForm>
      )}
    </main>
  );
}
