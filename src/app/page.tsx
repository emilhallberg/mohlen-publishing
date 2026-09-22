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
import Preview, { PreviewMeta } from "@/components/Preview";
import EventsSection, { EventSummary } from "@/compounds/EventsSection";

export const metadata: Metadata = {
  title: "Mohlén Publishing",
  icons: [{ rel: "icon", url: "/ester-1.jpeg" }],
  description:
    "Drömmen med Mohlén Publishing är att kunna livnära sig men hennes fokus är framförallt att få tillbringa hennes tid med hennes passioner. Genom Mohlén Publishing kommer Ester att marknadsföra sina litterära verk samtidigt som hon vill inspirera andra individer till att både läsa och skriva, men framförallt visa att ingenting är omöjligt.",
};

export const revalidate = 3600;

const events: EventSummary[] = [
  {
    href: "/event/2026-10-16",
    title: "Ester Mohlén på Lycklitt 2026",
    startsAt: "2026-10-16T14:00:00+02:00",
    endsAt: "2026-10-16T14:45:00+02:00",
    month: "Okt",
    day: "16",
    dateLabel: "16 oktober 2026",
    time: "14:00–14:45",
    location: "Lycklitt 2026",
  },
  {
    href: "/event/2026-09-17",
    title: "Jubileum för Midnattsregn",
    startsAt: "2026-09-17T18:00:00+02:00",
    month: "Sep",
    day: "17",
    dateLabel: "17 september 2026",
    time: "18:00–20:00",
    location: "TeWe’s Konditori i Hudiksvall",
    endsAt: "2026-09-17T20:00:00+02:00",
  },
  {
    href: "/event/bokklubbar-hosten-2026",
    title: "Mohléns Bokklubbar",
    startsAt: "2026-09-01T00:00:00+02:00",
    month: "Sep–nov",
    dateLabel: "September till november 2026",
    time: "Datum meddelas",
    location: "Hudiksvall",
    endsAt: "2026-11-30T23:59:59+01:00",
  },
  {
    href: "/event/2026-05-06",
    title: "Poesikväll i vårens tecken",
    startsAt: "2026-05-06T17:00:00+02:00",
    month: "Maj",
    day: "6",
    dateLabel: "6 maj 2026",
    time: "17:00–20:00",
    location: "The White Brig i Hudiksvall",
    endsAt: "2026-05-06T20:00:00+02:00",
  },
];

const mediaLinks: Array<{ url: string; fallback: PreviewMeta }> = [
  {
    url: "https://www.ht.se/2026-03-29/ester-19-skapar-motesplatser-dar-orden-flodar-fulltraff/",
    fallback: {
      title:
        "Ester, 19, skapar mötesplatser där orden flödar: ”Fullträff” – Hudiksvalls Tidning",
      description:
        "I den ombonade lokalen på White Brig har en grupp människor samlats för en av Esters skrivträffar.",
      image:
        "https://static.bonniernews.se/ba/173a26c3-1c19-43a8-a086-b5687c4770d1.jpeg?crop=8256%2C4644%2Cx0%2Cy430&width=1200&format=pjpg&auto=avif",
    },
  },
  {
    url: "https://www.ht.se/artikel/jag-ar-annu-inte-mitt-basta-jag-det-kommer-med-tiden/",
    fallback: {
      title:
        "”Jag är ännu inte mitt bästa jag – det kommer med tiden” – Hudiksvalls Tidning",
      description:
        "Ester Mohlén bestämde sig tidigt för att bli författare. Nu har hon redan publicerat sin tredje bok.",
      image:
        "https://static.bonniernews.se/ba/6d2f4599-67ff-4cfd-975f-195d16a5db9a.jpg?crop=4959%2C2790%2Cx0%2Cy91&width=1200&format=pjpg&auto=avif",
    },
  },
  {
    url: "https://www.ht.se/2024-10-08/18-ariga-ester-ger-ut-sin-andra-roman",
    fallback: {
      title: "18-åriga Ester ger ut sin andra roman – Hudiksvalls Tidning",
      description:
        "I våras gav hon ut sin första roman. Sedan dess har det gått undan för Ester Mohlén.",
      image:
        "https://static.bonniernews.se/ba/626e3c19-fd63-4064-a92e-d05ebb7bb0da.jpeg?crop=2500%2C1407%2Cx0%2Cy1&width=1200&format=pjpg&auto=avif",
    },
  },
  {
    url: "https://www.ht.se/2024-03-31/17-ariga-ester-ger-ut-en-egen-karleksroman",
    fallback: {
      title: "17-åriga Ester ger ut en egen kärleksroman – Hudiksvalls Tidning",
      description:
        "Skrivandet ger henne energi och har hjälpt henne att må bättre.",
      image:
        "https://static.bonniernews.se/ba/6fce2456-a5c0-4019-962c-936a69e9f158.jpeg?crop=5496%2C3092%2Cx0%2Cy0&width=1200&format=pjpg&auto=avif",
    },
  },
  {
    url: "https://www.madeleineengberg.com",
    fallback: {
      title: "Fotograf Madeleine Engberg | Hudiksvall",
      description:
        "Fotograf i Hudiksvall med fokus på porträtt, bröllop, scen och dokumentärfoto.",
      image:
        "https://static.wixstatic.com/media/6b9db9_19ef56a4f5a94091a0a2ea0c0b8619b2~mv2.jpg/v1/fill/w_2500,h_1219,al_c/6b9db9_19ef56a4f5a94091a0a2ea0c0b8619b2~mv2.jpg",
    },
  },
];

export default function Home() {
  return (
    <main className="grid auto-rows-max-content justify-center min-h-screen">
      <section className="h-screen grid auto-rows-min place-content-center place-items-center gap-7">
        <Header>Mohlén Publishing</Header>
        <SubHeader>Litteratur av Ester Mohlén</SubHeader>
      </section>
      <Section src="/ester-4.jpg" alt="Ester Mohlén" reverse>
        <h2 className="text-3xl uppercase">Ester Mohlén</h2>
        <p>
          Ester Mohlén är en ung författare från Hälsingland. Hon debuterade i
          mars 2023 med romanen Phillipe & Charlotte, följd av Midnattsregn,
          Livet efter dig och senast Rick Dahl.
        </p>
        <p>
          I sitt skrivande rör hon sig nära det sårbara och ärliga, med ett
          särskilt fokus på relationer och karaktärernas inre liv. Hennes
          berättelser präglas av ett känsligt och närvarande språk där det
          mellanmänskliga står i centrum.
        </p>
        <p>
          Utöver sitt författarskap arrangerar hon poesikvällar, skrivworkshops
          och föreläsningar runt om i Sverige. Genom dessa skapar hon rum för
          både reflektion och eget skapande, där deltagarna bjuds in att
          utforska sina egna uttryck.
        </p>
      </Section>
      <Section src="/book.jpeg" alt="Bok">
        <h2 className="text-3xl uppercase">MOHLÉN PUBLISHING</h2>
        <p>
          Mohlén Publishing grundades i december 2023 av författaren Ester
          Mohlén, ur en långvarig dröm om att skapa ett eget förlag.
        </p>
        <p>
          Sedan starten har verksamheten vuxit snabbt, med flera utgivna titlar,
          återkommande evenemang och en växande läsekrets. Förlaget är idag en
          plattform för både litterärt skapande och möten mellan människor.
        </p>
        <p>
          Kärnan i Mohlén Publishing är en stark tro på litteraturens kraft –
          att berättelser kan beröra, spegla och skapa förändring. Med passion
          som drivkraft verkar förlaget för att bidra till ett samhälle där
          kreativitet får ta plats och lyfta människor.
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

      <EventsSection events={events} />

      <section className="w-full p-6 py-12 max-w-[1080px] grid gap-6 content-start">
        <SubHeader id="media">Media</SubHeader>
        <div className="flex flex-wrap gap-3 content-between">
          {mediaLinks.map((link) => (
            <Preview key={link.url} url={link.url} fallback={link.fallback} />
          ))}
        </div>
      </section>

      <section
        id="instagram"
        aria-label="Mohlén Publishing på Instagram"
        className="w-full max-w-[1080px] scroll-mt-20 p-6 py-12"
      >
        <div className="w-full bg-transparent [container-type:inline-size]">
          <iframe
            src="https://www.instagram.com/mohlenpublishing/embed/"
            title="Mohlén Publishing på Instagram"
            className="block h-[calc(66.667cqw+220px)] w-full border-0 bg-transparent"
          />
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
