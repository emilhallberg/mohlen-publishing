import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import OrderForm from "@/compounds/OrderForm";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Liver efter dig",
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description:
    "Livet efter dig är en berättelse om hur det är att älska någon som bär ett mörker. Men också om att vara den som bär det – och ändå välja ljuset. Det är en roman om försoning, om att hitta hem i någon annan, men först och främst i sig själv.",
};

export default function Book() {
  return (
    <main className="grid auto-rows-max-content justify-center gap-8">
      <Link href="/" className="text-sm px-6 pt-4 hover:text-orange-200">
        Tillbaka till startsidan
      </Link>
      <h1 className="flex text-3xl w-full p-6 pt-1 text-orange-50">
        Beställ Midnattsregn - 189 kr
      </h1>
      <Section src="/livet-efter-dig.jpeg" alt="Liver efter dig">
        <p className="mt-3">
          <b>Livet efter dig</b> är en berättelse om hur det är att älska någon
          som bär ett mörker. Men också om att vara den som bär det – och ändå
          välja ljuset. Det är en roman om försoning, om att hitta hem i någon
          annan, men först och främst i sig själv.
        </p>
        <p>
          Efter att ha överlevt en kärleksrelation som förstörde henne, försöker
          Margaret att finna sig själv igen. Men traumana förföljer henne
          ständigt, och hennes mamma faller djupare ner i alkoholmissbruket.
        </p>
        <p>
          Så möter hon Anthony. En ung man som inte bara ser henne, utan känner
          hennes inre som att han alltid har funnits i hennes hjärta. Med honom
          känner hon hopp, kanske till och med kärlek. Men de gamla såren som
          hon bär läker långsamt, och den kärlek som växer mellan dem hotas av
          det undertryckta.
        </p>
        <p>
          <i>
            Kan kärlek få en större del i hennes hjärta än den smärta som vilar
            där?
          </i>
        </p>
        <p className="mt-3">
          Fyll i formuläret nedan för att lägga en beställning. Efter att du har
          skickat in din beställning, kommer vi att kontakta dig inom kort för
          att förse dig med ytterligare information om leveransalternativ och
          betalningsmetoder. Jag strävar alltid efter att göra din upplevelse så
          smidig som möjligt, så tveka inte att dela med dig av eventuella
          specifika önskemål eller frågor du kan ha.
        </p>
      </Section>
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
