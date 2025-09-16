import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Poesikväll med Ester Mohlén",
  icons: [{ rel: "icon", url: "/ester-1.png" }],
  description:
    "Författaren Ester Mohlén besöker TeWe's konditori i Söderhamn. Denna gång bjuds det på läsning ur hennes bok Midnattsregn. Boken tar upp ämnen som missbruk, psykisk ohälsa och relationsvåld. Utöver det kommer Ester att tala om hennes författarskap. Det bjuds även på mat och fika. Varmt välkommen!",
};

export default function Event() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">
        Poesikväll med Ester Mohlén
      </h1>
      <Section src="/2025-10-08-1.jpg" alt="2025-10-08">
        <p>
          <b>Välkommen till en poesikväll med författaren Ester Mohlén.</b> En
          kväll som består av tankar, kunskap och lärdom om poesin. Vi samlas
          för att läsa, samtala och skriva poesi tillsammans, och utforskar
          olika teman bide genom andras texter och våra egna ord på papperet.
          Inga förkunskaper behövs - bara nyfikenhet, lyssnande och lust att
          dela tankar i ordens sällskap. Respekt för övriga är viktigt för oss.
          Det är en prestigelös miljö. Nyckelorden för kvällen är poesi,
          inspiration och trygghet. Vi häller till i det vackra orangeriet pà
          White Brig Guesthouse, där det bjuds pà fika och varm dryck. Välkommen
          att slå dig ner - för en kväll i poesins tecken.
        </p>
        <p className="mt-3">
          <b>Var?</b> White Brig Guesthouse - Orangeriet
          <br />
          <b>När?</b> 8 oktober kl. 17-20
        </p>
        <p className="mt-3">add -
          Anmälan sker genom formuläret nedan och vi uppskattar att de som bokar
          dyker upp på eventet. Återkom gärna i tid om du och ditt sällskap får
          förhinder.
        </p>
      </Section>
      <EventForm>
        <Input
          name="event"
          defaultValue="Poesikväll med White Brig Guesthouse - 2025-10-08"
          hidden
        />
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
