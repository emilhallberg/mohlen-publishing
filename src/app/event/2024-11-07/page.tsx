import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";

export const metadata: Metadata = {
  title: "Författarbesök TeWe's konditori",
  icons: [{ rel: "icon", url: "/ester-1.png" }],
  description:
    "Författaren Ester Mohlén besöker TeWe's konditori på Storgatan i Hudiksvall. Det kommer bland annat att bjudas på höstig soppa med färskt bröd, avslutningsvis kaffe med några av TeWe's fantastiska bakverk. De som medverkar kommer att få höra delar ur hennes nya roman Midnattsregn, som följs av diskussioner i form av frågor till Ester och valfritt medverkande av gästerna som befinner sig på TeWe's. Boken tar bland annat upp ämnen som relationsvåld, missbruk och psykisk ohälsa.",
};

export default function Event() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1">
        Författarbesök på TeWe&apos;s konditori - 149kr
      </h1>
      <article className="grid auto-rows-max gap-4 p-6 pt-2 text-orange-50 text-justify lg:text-left max-w-[1080px]">
        <p className="mt-3">
          <b>Författaren Ester Mohlén</b> besöker TeWe&apos;s konditori på
          Storgatan i Hudiksvall. Det kommer bland annat att bjudas på höstig
          soppa med färskt bröd, avslutningsvis kaffe med några av TeWe&apos;s
          fantastiska bakverk. De som medverkar kommer att få höra delar ur
          hennes nya roman Midnattsregn, som följs av diskussioner i form av
          frågor till Ester och valfritt medverkande av gästerna som befinner
          sig på TeWe&apos;s. Boken tar bland annat upp ämnen som relationsvåld,
          missbruk och psykisk ohälsa.
        </p>
        <span className="border-b border-orange-50 lg:mt-6 w-20 justify-self-center" />
        <p className="mt-3">
          <b>Var?</b> TeWe&apos;s konditori på Storgatan 20 i Hudiksvall
          <br />
          <b>När?</b> Den 7 november 2024 klockan 18-20
        </p>
        <span className="border-b border-orange-50 lg:mt-6 w-20 justify-self-center" />
        <p className="mt-3">
          Det kostar 149kr för entré, höstig soppa med färskt bröd och något
          sött som avslutning! Säkra din plats genom att förboka anmäla dig via
          formuläret nedan. Jag strävar alltid efter att göra din upplevelse så
          smidig som möjligt, så tveka inte att dela med dig av eventuella
          specifika önskemål eller frågor du kan ha.
        </p>
      </article>
      <EventForm>
        <Input
          name="event"
          defaultValue="Författarbesök TeWe's konditori"
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
        <Button type="submit">Anmäl mig</Button>
      </EventForm>
    </main>
  );
}
