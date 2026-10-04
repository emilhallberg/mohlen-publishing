import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import { Metadata } from "next";
import Link from "next/link";

const title = "Mohléns Bokklubb";
const description =
  "Mohléns Bokklubb är en traditionell bokklubb som träffas då och då för att diskutera en bok som vi alla har läst.";

export const metadata: Metadata = {
  title,
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description,
};

export default function BookClubs() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8 pb-12">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">{title}</h1>

      <Section
        src="/mohlens-bokklubb.png"
        alt="Affisch för Mohléns Bokklubb med bilder från ett café, en kopp kaffe, en bok och en läsare"
      >
        <p>{description}</p>
        <p>
          Vid varje tillfälle överraskas ni med vilken bok vi läser härnäst.
        </p>
        <p>
          Vi har en tydlig värdegrund, att alla ska vara trygga och välkomna.
        </p>
        <p>
          <em>Du betalar endast 100 kr/tillfälle, vilket är för boken.</em>
        </p>
        <p>
          Nyfiken? Då är du välkommen att anmäla dig via formuläret nedan eller
          via DM på{" "}
          <a
            href="https://www.instagram.com/mohlenpublishing/"
            className="underline hover:text-orange-200"
          >
            Instagram
          </a>
          !
        </p>
      </Section>

      <EventForm>
        <h2 className="text-2xl">Anmäl dig till Mohléns Bokklubb</h2>
        <input type="hidden" name="event" value={title} />
        <Input type="text" name="name" autoComplete="name" required>
          Namn
        </Input>
        <Input type="email" name="email" autoComplete="email" required>
          E-post
        </Input>
        <Input type="tel" name="phone" autoComplete="tel" required>
          Telefon
        </Input>
        <Textarea name="comment">Övriga önskemål</Textarea>
        <Button type="submit">Bekräfta anmälan</Button>
      </EventForm>
    </main>
  );
}
