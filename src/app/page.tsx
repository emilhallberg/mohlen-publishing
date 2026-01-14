import Section from "@/components/Section";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import ContactForm from "@/compounds/ContactForm";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Preview from "@/components/Preview";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mohlén Publishing",
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description:
    "Drömmen med Mohlén Publishing är att kunna livnära sig men hennes fokus är framförallt att få tillbringa hennes tid med hennes passioner. Genom Mohlén Publishing kommer Ester att marknadsföra sina litterära verk samtidigt som hon vill inspirera andra individer till att både läsa och skriva, men framförallt visa att ingenting är omöjligt.",
};

export default function Home() {
  return (
    <main className="grid auto-rows-max-content justify-center min-h-screen">
      <section className="h-screen grid auto-rows-min place-content-center place-items-center gap-7">
        <Header>Mohlén Publishing</Header>
        <SubHeader>Litteratur av Ester Mohlén</SubHeader>
      </section>
      <Section src="/ester-1.jpeg" alt="Ester Mohlén" reverse>
        <h2 className="text-3xl uppercase">Ester Mohlén</h2>
        <p>
          Den 18-åriga författaren frän Hälsingland vars litterära verk lämnar
          läsarna i ett djupt känslohav. Något som Ester värdesätter i sitt
          författarskap är ärlighet, de litterära verk som hon har skapat vore
          inte densamma utan hennes ärliga språk.
        </p>
        <blockquote>
          &#34;För mig spelar det ingen roll vad jag tjänar pä mina böcker, det
          som spelar roll är att jag fär göra det jag brinner för, livet
          ut.&#34;
        </blockquote>
        <p>
          Mohlén Publishing grundades i december 2023 efter mänga är av
          drömmande. Det viktigaste för Ester är att kraften av litteraturen
          fortsätter ha betydelse för världens alla människor.
        </p>
      </Section>
      <Section src="/book.jpeg" alt="Bok">
        <p>
          Kärleken för litteratur har alltid funnits inom Ester. Under hela
          hennes liv har hon talat genom kreativitet, främst genom text. När hon
          var tretton är började hon skriva pà sin första riktiga bok och när
          hon var 17 àr gav hon ut sin debutroman.
        </p>
        <blockquote>
          &#34;Jag skulle aldrig kunna leva utan litteratur. Ord är det
          starkaste som finns och jag är tacksam för att jag är en av dem som
          försár det.&#34;
        </blockquote>
        <p>
          Det som gör Esters författarskap sà unikt är hennes passion. Oavsett
          vad som händer kommer hon aldrig sluta skriva, det är en del av henne.
        </p>
      </Section>
      <SubHeader id="order" className="p-6">
        Order
      </SubHeader>
      <Section src="/livet-efter-dig.jpeg" alt="Liver efter dig">
        <p>
          <b>Livet efter dig</b> är en berättelse om hur det är att älska någon
          som bär ett mörker. Men också om att vara den som bär det – och ändå
          välja ljuset. Det är en roman om försoning, om att hitta hem i någon
          annan, men först och främst i sig själv.
        </p>
        <Link href="/order/liver-efter-dig" className="flex pt-4">
          <Button>Beställ här</Button>
        </Link>
      </Section>
      <Section src="/midnattsregn.png" alt="Midnattsregn">
        <p>
          <b>Margaret Love</b> lever med en lyhörd tystnad och ett osynligt hopp
          inom sig. En natt i midnatts regnet möter hon Nicolas Scott som snabbt
          blir hennes allting. Livet blir plötsligt värt att leva, bara tanken
          av honom får henne att le. Från ingenstans vänder deras kärleksfulla
          relation lika snabbt som ett midnatts regn. Trots detta så slutar
          Margaret inte att kämpa, hon har ju lovat honom att stanna kvar
          oavsett vad.
        </p>
        <Link href="/order/midnattsregn" className="flex pt-4">
          <Button>Beställ här</Button>
        </Link>
      </Section>
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
        <Link href="/order/phillipe-and-charlotte" className="flex pt-4">
          <Button>Beställ här</Button>
        </Link>
      </Section>

      <SubHeader id="event" className="p-6">
        Event
      </SubHeader>
      <section className="w-full p-6 max-w-[1080px] grid gap-6 content-start">
        <div className="flex flex-wrap gap-3">
          <div className="grid w-[330px] gap-3">
            <Image
              className="w-full h-auto"
              src="/2026-02-04.png"
              alt="2026-02-04"
              width={0}
              height={0}
              sizes="350"
              priority
            />
            <Link href="/event/2026-02-04" className="w-full">
              <Button>Läs mer</Button>
            </Link>
          </div>
          <div className="grid w-[330px] gap-3">
            <Image
              className="w-full h-auto"
              src="/2026-02-11.png"
              alt="2025-02-11"
              width={0}
              height={0}
              sizes="350"
              priority
            />
            <Link href="/event/2026-02-11" className="w-full">
              <Button>Läs mer</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full p-6 py-12 max-w-[1080px] grid gap-6 content-start">
        <SubHeader id="media">Media</SubHeader>
        <div className="flex flex-wrap gap-3 content-between">
          <Preview url="https://www.ht.se/2024-10-08/18-ariga-ester-ger-ut-sin-andra-roman" />
          <Preview url="https://www.ht.se/2024-03-31/17-ariga-ester-ger-ut-en-egen-karleksroman" />
          <Preview url="https://www.madeleineengberg.com" />
        </div>
      </section>

      <div className="h-svh">
        <ContactForm>
          <SubHeader id="kontakt">Kontakt</SubHeader>
          <p className="text-orange-50">
            Vänligen fyll i formuläret nedan om du har frågor gällande
            beställningar, vill ge feedback på något av Esters litterära verk
            eller en övrig fråga. Tack för att du hjälper oss utvecklas!
          </p>
          <Input type="text" name="name" autoComplete="name" required>
            Namn
          </Input>
          <Input type="email" name="email" autoComplete="email" required>
            Email
          </Input>
          <Input type="tel" name="phone" autoComplete="tel" required>
            Telefon
          </Input>
          <Select label="Vad gäller ärendet?" name="topic" required>
            <option value="Kundservice">Kundservice</option>
            <option value="Recension">Recension</option>
            <option value="Övriga frågor">Övriga frågor</option>
          </Select>
          <Textarea name="comment">Meddelande</Textarea>
          <Button type="submit">Skicka</Button>
        </ContactForm>
      </div>
    </main>
  );
}
