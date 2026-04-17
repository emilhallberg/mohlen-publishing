import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "Poesikväll i vårens tecken";
const date = "2026-05-06";
const description =
  "Välkommen till en stämningsfull poesikväll inspirerad av várens ankomst. Under kvällen utforskar vi poesi med váriga teman och later oss Själva skriva i samma anda.";

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
      <Section src={`/${date}.png`} alt={date}>
        <p>{description}</p>
        <p>
          Evenemanget äger rum i The White Brigs fantastiska orangeri, där solen strilar in genom glasväggarna och skapar en unik atmosfär.
        </p>
        <p className="mt-3">
          <b>Var?</b> The White Brig
          <br />
          <b>När?</b> 6 maj kl. 17-20
        </p>
        <p className="mt-3">
          Säkra din plats genom att anmäla dig via formuläret nedan. För 200 kr ingår en generös fikabuffé.
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
