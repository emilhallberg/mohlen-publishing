import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import OrderForm from "@/compounds/OrderForm";
import RickDahlDescription from "@/compounds/RickDahlDescription";

export const metadata: Metadata = {
  title: "Beställ Rick Dahl | Mohlén Publishing",
  description: "Beställ Rick Dahl, den nya boken av Ester Mohlén, för 199 kr.",
  openGraph: {
    title: "Beställ Rick Dahl – 199 kr",
    description: "Den nya boken av Ester Mohlén. Beställ ditt exemplar här.",
  },
};

export default function Book() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/#order" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="text-3xl w-full p-6 pt-1 text-orange-50">
        Beställ Rick Dahl – 199 kr
      </h1>
      <Section src="/rick-dahl.jpg" alt="Rick Dahl av Ester Mohlén">
        <RickDahlDescription />
        <p>
          Fyll i formuläret nedan för att beställa ditt exemplar. Jag kontaktar
          dig med mer information om leverans och betalning.
        </p>
      </Section>
      <OrderForm>
        <Input type="hidden" name="product" defaultValue="Rick Dahl" hidden />
        <Input id="name" type="text" name="name" autoComplete="name" required>
          Namn
        </Input>
        <Input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
        >
          E-post
        </Input>
        <Input id="phone" type="tel" name="phone" autoComplete="tel" required>
          Telefon
        </Input>
        <Input
          id="quantity"
          type="number"
          name="quantity"
          min={1}
          step={1}
          required
          defaultValue={1}
        >
          Antal
        </Input>
        <Select id="delivery" label="Leveranssätt" name="delivery" required>
          <option value="Postnord">Postnord – 35 kr</option>
          <option value="Avhämtning">Avhämtning</option>
          <option value="Annat">Annat</option>
        </Select>
        <Textarea id="comment" name="comment">
          Övriga önskemål
        </Textarea>
        <Button type="submit">Beställ Rick Dahl</Button>
      </OrderForm>
    </main>
  );
}
