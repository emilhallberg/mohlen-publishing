import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "Poesikväll med författaren Ester Mohlén";
const date = "2026-03-26";
const description =
  "Välkommen till en poesikväll med författaren Ester Mohlén. En kväll som består av tankar, kunskap och lärdom om poesin.";

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
      <Section src="/2026-03-26.png" alt={date}>
        <p>{description}</p>
        <p>
          Vi samlas för att läsa, samtala och skriva poesi tillsammans, och
          utforskar olika teman både genom andras texter och våra egna ord på
          papperet. Inga förkunskaper behövs - bara nyfikenhet, lyssnande och
          lust att dela tankar i ordens sällskap.
        </p>
        <p>
          Respekt för övriga är viktigt för oss. Det är en prestigelös miljö.
          Nyckelorden för kvällen är poesi, inspiration och trygghet.
        </p>
        <p className="mt-3">
          <b>Var?</b> The White Brig
          <br />
          <b>När?</b> 26 mars kl. 17-20
        </p>
        <p className="mt-3">
          Säkra din plats genom att anmäla dig via formuläret nedan. Det kostar
          200kr att delta, inklusive fikabuffe med kaffe och te.
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
