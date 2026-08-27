import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "Jubileum för Midnattsregn";
const date = "2026-09-17";
const description =
  "Välkommen till en kväll för gemenskap, kunskap och samtal när Midnattsregn firas med föreläsning, högläsning, mat och fika.";

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
      <Section src={`/${date}.png`} alt={title}>
        <p>{description}</p>
        <p>
          Under kvällen får vi ta del av en föreläsning om våld i nära
          relationer – ett viktigt ämne som berör och behöver lyftas.
          Föreläsare är Smilla Thelin, kriminolog och brottsförebyggande i
          Hudiksvalls kommun. Medverkar gör även författaren Ester Mohlén.
        </p>
        <p>
          Det blir mat, fika och högläsning, följt av samtal och reflektion
          kring de ämnen och berättelser som lyfts i Midnattsregn.
        </p>
        <p className="mt-3">
          <b>Var?</b> TeWe&apos;s Konditori i Hudiksvall
          <br />
          <b>När?</b> Torsdag den 17 september kl. 18-20
        </p>
        <p className="mt-3">
          Det kostar 149 kr inklusive mat och fika. Betalning sker på plats.
          Föranmäl dig gärna via formuläret nedan.
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
