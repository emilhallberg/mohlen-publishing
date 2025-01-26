import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Författarbesök TeWe';s konditori",
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
        Författarbesök på TeWe&apos;s konditori
      </h1>
      <Section src="/2025-03-13.png" alt="2025-03-13">
        <p>
          <b>Författaren Ester Mohlén</b> från Hudiksvall besöker TeWe&apos;s
          konditori i Söderhamn. Hennes skönlitterära roman Midnattsregn har
          väckt mycket känslor hos unga såväl äldre läsare. Romanen tar upp
          ämnen som missbruk, relationsvåld och psykisk ohälsa. Kvällen pä
          TeWe&apos;s erbjuder intressanta samtal frän Ester om hennes
          författarskap och läsning ur boken.
        </p>
        <p className="mt-3">
          <b>Var?</b> TeWe&apos;s konditori i Söderhamn
          <br />
          <b>När?</b> 13 mars kl. 16-18
        </p>
        <p className="mt-3" hidden>
          Anmälan sker genom formuläret nedan och vi uppskattar att de som bokar
          dyker upp på eventet. Återkom gärna i tid om du och ditt sällskap får
          förhinder. Betalning sker på plats och det kostar 149kr inklusive
          entré och tilltugg.
        </p>
      </Section>
      <EventForm hidden>
        <Input
          name="event"
          defaultValue="Författarbesök TeWe's konditori - 2025-03-13"
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
