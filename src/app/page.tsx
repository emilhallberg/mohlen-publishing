import Section from "@/components/Section";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mohlén Publishing",
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description:
    "Drömmen med Mohlén Publishing är att kunna livnära sig men hennes fokus är framförallt att få tillbringa hennes tid med hennes passioner. Genom Mohlén Publishing kommer Ester att marknadsföra sina litterära verk samtidigt som hon vill inspirera andra individer till att både läsa och skriva, men framförallt visa att ingenting är omöjligt.",
};

export default function Home() {
  return (
    <main className="grid auto-rows-max-content justify-center min-h-screen">
      <Header>Mohlén Publishing</Header>
      <Section src="/ester-1.jpeg" alt="Ester Mohlén">
        <b>Ester Mohlén</b>, född 22 juli 2006 i landskapet Hälsingland, närmare
        sagt i den lilla byn Njutånger. Under sitt liv har hon mestadels talat
        genom text och fantasi, i hennes svåra såväl lite bättre stunder. Men
        det är först nu hon ger ut sin debutroman i samband med hennes
        nystartade bolag Mohlén Publishing. Hon beskriver detta som ren eufori
        för en dröm som äntligen blir till verklighet.
      </Section>
      <Section src="/ester-2.png" alt="Midnattsregn">
        <b>Författaren Ester Mohlén</b> besöker TeWe&apos;s konditori på Storgatan i
        Hudiksvall. Det kommer bland annat att bjudas på höstig soppa med färskt
        bröd, avslutningsvis kaffe med några av TeWe&apos;s fantastiska bakverk. De
        som medverkar kommer att få höra delar ur hennes nya roman Midnattsregn,
        som följs av diskussioner i form av frågor till Ester och valfritt
        medverkande av gästerna som befinner sig på TeWe&apos;s. Boken tar bland
        annat upp ämnen som relationsvåld, missbruk och psykisk ohälsa.
        <Link href="/event/2024-11-07" className="flex pt-4">
          <Button>Förboka här</Button>
        </Link>
      </Section>
      <Section src="/book-2.png" alt="Midnattsregn">
        <b>Margaret Love</b> lever med en lyhörd tystnad och ett osynligt hopp
        inom sig. En natt i midnatts regnet möter hon Nicolas Scott som snabbt
        blir hennes allting. Livet blir plötsligt värt att leva, bara tanken av
        honom får henne att le. Från ingenstans vänder deras kärleksfulla
        relation lika snabbt som ett midnatts regn. Trots detta så slutar
        Margaret inte att kämpa, hon har ju lovat honom att stanna kvar oavsett
        vad.
        <Link href="/midnattsregn" className="flex pt-4">
          <Button>Beställ här</Button>
        </Link>
      </Section>
      <Section src="/book-1.jpg" alt="Phillipe & Charlotte">
        <b>Charlotte Campbell</b> är en ambitiös och vacker ung tjej som efter
        gymnasieexamen i Massachusetts 1970 väljer att lyssna pa sitt hjärta för
        första gängen någonsin genom att flytta till Verona i norra Italien. Där
        ska hon studera till litteratur-och historielärare samtidigt som hon har
        en vilja att uppleva något mer än bara hennes hemstat. I drömmarnas land
        finner hon inte bara sitt inre jag utan även den charmiga Phillipe
        Ricci, från första ögonkastet faller de för varandra och tillsammans
        blir de oövervinneliga trots den dramatik som härjar runt omkring.
        Phillipe & Charlotte är definitionen av evig och äkta kärlek,
        tillsammans får vi följa deras vackra historia till ett liv de bada
        aldrig trott förtjänat. Frågan är bara om dess kärlek är större än det
        mänskliga livet och allt vad slutet av det.
        <Link href="/phillipe-and-charlotte" className="flex pt-4">
          <Button>Beställ här</Button>
        </Link>
      </Section>
      <Section src="/ester-2.jpeg" alt="Ester Mohlén">
        <b>Ester</b>, har sedan länge varit företagsam och drömt om ett eget
        bolag. Drömmen med Mohlén Publishing är att kunna livnära sig men hennes
        fokus är framförallt att få tillbringa hennes tid med hennes passioner.
        Genom Mohlén Publishing kommer Ester att marknadsföra sina litterära
        verk samtidigt som hon vill inspirera andra individer till att både läsa
        och skriva, men framförallt visa att ingenting är omöjligt.
      </Section>
    </main>
  );
}
