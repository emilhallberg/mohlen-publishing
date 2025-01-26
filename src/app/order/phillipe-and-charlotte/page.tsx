import Input from "@/components/Input";
import Button from "@/components/Button";
import OrderForm from "@/compounds/OrderForm";
import { Metadata } from "next";
import Link from "next/link";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Phillipe & Charlotte",
  icons: [{ rel: "icon", url: "/book-1.jpg" }],
  description:
    "Charlotte Campbell är en ambitiös och vacker ung tjej som efter gymnasieexamen i Massachusetts 1970 väljer att lyssna pa sitt hjärta för första gängen någonsin genom att flytta till Verona i norra Italien. Där ska hon studera till litteratur-och historielärare samtidigt som hon har en vilja att uppleva något mer än bara hennes hemstat.",
};

export default function Book() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1 text-orange-50">
        Beställ Phillipe & Charlotte - 229 kr
      </h1>
      <Section src="/phillipe-and-charlotte.png" alt="Phillipe & Charlotte">
        <p>
          <b>Charlotte Campbell</b> är en ambitiös och vacker ung tjej som efter
          gymnasieexamen i Massachusetts 1970 väljer att lyssna pa sitt hjärta
          för första gängen någonsin genom att flytta till Verona i norra
          Italien. Där ska hon studera till litteratur-och historielärare
          samtidigt som hon har en vilja att uppleva något mer än bara hennes
          hemstat. I drömmarnas land finner hon inte bara sitt inre jag utan
          även den charmiga Phillipe Ricci, från första ögonkastet faller de för
          varandra och tillsammans blir de oövervinneliga trots den dramatik som
          härjar runt omkring. Phillipe & Charlotte är definitionen av evig och
          äkta kärlek, tillsammans får vi följa deras vackra historia till ett
          liv de bada aldrig trott förtjänat. Frågan är bara om dess kärlek är
          större än det mänskliga livet och allt vad slutet av det.
        </p>
        <blockquote className="text-center">
          <p>Kommentar från läsare</p>
          &#34;Fràn första sidan fastnade jag i boken och ville bara fortsätta
          läsa. När jag var tvungen att lägga ner den sä blev jag besviken för
          att jag bara ville fortsätta&#34;
        </blockquote>
        <p>
          Fyll i formuläret nedan för att lägga en beställning. Efter att du har
          skickat in din beställning, kommer vi att kontakta dig inom kort för
          att förse dig med ytterligare information om leveransalternativ och
          betalningsmetoder. Jag strävar alltid efter att göra din upplevelse så
          smidig som möjligt, så tveka inte att dela med dig av eventuella
          specifika önskemål eller frågor du kan ha.
        </p>
      </Section>

      <OrderForm>
        <Input name="product" defaultValue="Phillipe & Charlotte" hidden />
        <Input type="text" name="name" autoComplete="name" required>
          Namn
        </Input>
        <Input type="email" name="email" autoComplete="email" required>
          Email
        </Input>
        <Input type="tel" name="phone" autoComplete="tel" required>
          Telefon
        </Input>
        <Input type="number" name="quantity" required defaultValue={1}>
          Antal
        </Input>
        <Select label="Leveranssätt" name="delivery">
          <option value="Postnord">Postnord - 35kr</option>
          <option value="Avhämtning">Avhämtning</option>
          <option value="Annat">Annat</option>
        </Select>
        <Textarea name="comment">Övriga önskemål</Textarea>
        <Button type="submit">Lägg beställning</Button>
      </OrderForm>
    </main>
  );
}
