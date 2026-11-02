import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import { Metadata } from "next";
import Link from "next/link";

const title = "Poesikväll med Ester Mohlén";
const date = "2026-11-26";
const description =
  "Författaren Ester Mohlén välkomnar till en poesikväll i höstmörkret hos Books 26 i Hudiksvall den 26 november 2026 kl. 18–20. Pris: 250 kr inklusive fika.";

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
        src="/2026-11-26.png"
        alt="Affisch för poesikväll med Ester Mohlén på Books 26 den 26 november 2026 kl. 18–20, 250 kr inklusive fika"
      >
        <p>
          Författaren Ester Mohlén välkomnar till en poesikväll i höstmörkret!
        </p>
        <p>
          Under kvällen kommer vi att diskutera poesi, testa skrivövningar för
          olika nivåer och självklart ha det trevligt tillsammans.
        </p>
        <p>
          <b>Var?</b> Books 26 i Hudiksvall
          <br />
          <b>När?</b> Torsdag den 26 november 2026 kl. 18–20
          <br />
          <b>Pris:</b> 250 kr inklusive fika
        </p>
        <p>
          Boka din plats via formuläret nedan eller i kassan på Books 26.
        </p>
        <p>Varmt välkommen!</p>
      </Section>
      <EventForm>
        <h2 className="text-2xl">Boka din plats på poesikvällen</h2>
        <input type="hidden" name="event" value={`${title} - ${date}`} />
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
