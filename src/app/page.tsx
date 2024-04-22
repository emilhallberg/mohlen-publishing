import Section from "@/components/Section";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header>Mohlén Publishing</Header>
        <Section src="/ester-1.jpg" alt="Ester Mohlén">
        <b>Ester Mohlén</b>, född 22 juli 2006 i landskapet Hälsingland, närmare
        sagt i den lilla byn Njutånger. Under sitt liv har hon mestadels talat
        genom text och fantasi, i hennes svåra såväl lite bättre stunder. Men
        det är först nu hon ger ut sin debutroman i samband med hennes
        nystartade bolag Mohlén Publishing. Hon beskriver detta som ren eufori
        för en dröm som äntligen blir till verklighet.
      </Section>
      <Section src="/book-1.jpg" alt="Philippe & Charlotte">
        <b>Charlotte Campbell</b> är en ambitiös och vacker ung tjej som efter
        gymnasieexamen i Massachusetts 1970 väljer att lyssna pa sitt hjärta för
        första gängen någonsin genom att flytta till Verona i norra Italien. Där
        ska hon studera till litteratur-och historielärare samtidigt som hon har
        en vilja att uppleva något mer än bara hennes hemstat. I drömmarnas land
        finner hon inte bara sitt inre jag utan även den charmiga Phillipe
        Ricci, fran första ögonkastet faller de för varandra och tillsammans
        blir de oövervinneliga trots den dramatik som härjar runt omkring.
        Phillipe & Charlotte är definitionen av evig och äkta kärlek,
        tillsammans far vi följa deras vackra historia till ett liv de bada
        aldrig trott förtjänat. Frågan är bara om dess kärlek är större än det
        mänskliga livet och allt vad slutet av det.
      </Section>
      <Section src="/ester-2.jpg" alt="Ester Mohlén">
        <b>Ester</b>, har sedan länge varit företagsam och drömt om ett eget
        bolag. Drömmen med Mohlén Publishing är att kunna livnära sig men hennes
        fokus är framförallt att fa tillbringa hennes tid med hennes passioner.
        Genom Mohlén Publishing kommer Ester att marknadsföra sina litterära
        verk samtidigt som hon vill inspirera andra individer till att både läsa
        och skriva, men framförallt visa att ingenting är omöjligt.
      </Section>
      <form className="w-full p-6 py-12 max-w-[1080px] grid auto-rows-max gap-12 grid-cols-1">
        <Input type="text" name="name" autoComplete="name" required>
          Namn
        </Input>
        <Input type="email" name="email" autoComplete="email" required>
          Email
        </Input>
        <Button type="submit">Lägg beställning</Button>
      </form>
    </main>
  );
}
