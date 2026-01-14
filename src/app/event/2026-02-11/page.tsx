import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title =
  "Författaren Ester Mohlén bjuder in till poesikväll på The White Brig";
const date = "2026-02-11";
const description =
  "Välkommen till en lugn kväll i poesins tecken. En stund för ord, känsla och gemenskap. Oavsett om du skriver, läser eller bara är nyfiken på poesins värld, får du här möjlighet att upptäcka språkets magi, leka med ord och inspireras tillsammans med andra.";

export const metadata: Metadata = {
  title,
  icons: [{ rel: "icon", url: "/ester-1.png" }],
  description,
};

export default function Event() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">
        Poesikväll med författaren Ester Mohlén
      </h1>
      <Section src="/2026-02-11.png" alt={date}>
        <p>{description}</p>
        <p className="mt-3">
          <b>Var?</b> The White Brig
          <br />
          <b>När?</b> 11 februari kl. 17-20
        </p>
        <p className="mt-3">
          Säkra din plats genom att anmäla dig via formuläret nedan. Jag strävar
          alltid efter att göra din upplevelse så smidig som möjligt, så tveka
          inte att dela med dig av eventuella specifika önskemål eller frågor du
          kan ha.
        </p>
      </Section>
      <EventForm>
        <Input name="event" defaultValue={`${title} - ${date}`} hidden />
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
    </main>
  );
}
