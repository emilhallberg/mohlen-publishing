import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import OrderForm from "@/compounds/OrderForm";

export const metadata: Metadata = {
  title: "Midnattsregn",
  icons: [{ rel: "icon", url: "/book-2.png" }],
  description:
    "Margaret Love lever med en lyhörd tystnad och ett osynligt hopp inom sig. En natt i midnatts regnet möter hon Nicolas Scott som snabbt blir hennes allting. Livet blir plötsligt värt att leva, bara tanken av honom får henne att le. Från ingenstans vänder deras kärleksfulla relation lika snabbt som ett midnatts regn. Trots detta så slutar Margaret inte att kämpa, hon har ju lovat honom att stanna kvar oavsett vad. ",
};

export default function Book() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/public" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 text-orange-50">
        Beställ Midnattsregn - 189 kr
      </h1>
      <article className="grid auto-rows-max gap-4 p-6 pt-2 text-orange-50 text-justify lg:text-left max-w-[1080px]">
        <p className="mt-3">
          <b>Margaret Love</b> lever med en lyhörd tystnad och ett osynligt hopp
          inom sig. En natt i midnatts regnet möter hon Nicolas Scott som snabbt
          blir hennes allting. Livet blir plötsligt värt att leva, bara tanken
          av honom får henne att le. Från ingenstans vänder deras kärleksfulla
          relation lika snabbt som ett midnatts regn. Trots detta så slutar
          Margaret inte att kämpa, hon har ju lovat honom att stanna kvar
          oavsett vad.
        </p>
        <blockquote className="mt-3 pl-4 pr-4 text-center">
          <p>Kommentar från läsare</p>
          &#34;Midnattsregn är en mycket djup och emotionell bok som tar en
          genom en resa med starka känslor av glädje, sorg, ilska, kärlek och
          igenkänning. Vackert beskrivet där man verkligen kan känna vad
          huvudkaraktären känner!&#34;
        </blockquote>
        <p className="mt-3">
          Fyll i formuläret nedan för att lägga en beställning. Efter att du har
          skickat in din beställning, kommer vi att kontakta dig inom kort för
          att förse dig med ytterligare information om leveransalternativ och
          betalningsmetoder. Jag strävar alltid efter att göra din upplevelse så
          smidig som möjligt, så tveka inte att dela med dig av eventuella
          specifika önskemål eller frågor du kan ha.
        </p>
      </article>
      <OrderForm>
        <Input name="product" defaultValue="Midnattsregn" hidden />
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
