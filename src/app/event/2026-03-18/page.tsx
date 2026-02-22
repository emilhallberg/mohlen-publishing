import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "Röster från en bokhandel";
const date = "2026-03-18";
const description =
  "Författaren Ester Mohlen och Lycksele Bokhandel bjuder in till inspirerande kvällar för dig som gillar att skriva, redan skriver eller för dig som vill ha en trevlig och kreativ kväll tillsammans med andra. Det är kravlöst, inspirerande och glädjefyllt.";

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
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">{title}</h1>
      <Section src="/2026-03-18 (2).png" alt={date}>
        <p>{description}</p>
        <p>
          I första hand är det riktat mot dig som är ungdom/ung vuxen. Du är
          välkommen precis som du är!
        </p>
        <p className="mt-3">Anmäl ditt intresse via formuläret nedan.</p>
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
