import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "Författarkväll med Ester Mohlén";
const date = "2025-11-06";
const description =
  "Författaren Ester Mohlén bjuder in till högläsning ur sin nya bok och samtal om skrivande, inspiration och författarskapets vägar.";

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
        Författarkväll med Ester Mohlén
      </h1>
      <Section src="/2025-11-06.png" alt="2025-11-06">
        <p>{description}</p>
        <p className="mt-3">
          <b>Var?</b> TeWe&apos;s konditori på Storgatan 20 i Hudiksvall
          <br />
          <b>När?</b> 6 november kl. 17-19
        </p>
        <p className="mt-3">
          Det kostar 149kr för entré, höstig soppa med färskt bröd och något
          sött som avslutning! Säkra din plats genom att anmäla dig via
          formuläret nedan. Jag strävar alltid efter att göra din upplevelse så
          smidig som möjligt, så tveka inte att dela med dig av eventuella
          specifika önskemål eller frågor du kan ha.
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
