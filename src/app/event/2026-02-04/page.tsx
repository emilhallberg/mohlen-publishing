import Input from "@/components/Input";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";
import Textarea from "@/components/Textarea";
import EventForm from "@/compounds/EventForm";
import Section from "@/components/Section";

const title = "En kväll om att vagå drömma";
const date = "2026-02-04";
const description =
  "Välkommen till en inspirerande och trevlig kväll på Tee's Konditori i Hudiksvall. Där författaren Ester Mohlén öppnar dörren till drömmarnas värld. Det blir en kväll fylld av värme, mod och nya perspektiv. En stund där vi tillsammans utforskar vad som händer när vi faktiskt vågar tro på det vi längtar efter.";

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
      <h1 className="flex text-3xl w-full p-6 pt-1 pb-1">
        Författarkväll med Ester Mohlén
      </h1>
      <Section src="/2026-02-04.png" alt="2026-02-04">
        <p>{description}</p>
        <p className="mt-3">
          <b>Var?</b> TeWe&apos;s konditori på Storgatan 20 i Hudiksvall
          <br />
          <b>När?</b> 4 februari kl. 17-19
        </p>
        <p className="mt-3">
          Att drömma kan kännas både vackert och skrämmande. Ibland tvivlar vi,
          ibland fastnar vi i vardagens måsten. Men drömmar förtjänar utrymme,
          och det är precis det den här kvällen handlar om. Ester delar generöst
          med sig av sina egna erfarenheter, om hur hon själv vågat följa sin
          inre röst trots osäkerhet och rädsla.
        </p>
        <p className="mt-3">
          Du kommer inte bara att lyssna, du får också möjlighet att reflektera
          över dina egna drömmar och vad just du behöver för att börja ta steg
          mot dem.
        </p>
        <p className="mt-3">För 149 kr ingår mat och fika som avslutning.</p>
        <p className="mt-3">
          Ta med dig en vän, partner, kollega eller kom själv och möt nya
          människor som längtar efter något mer i livet. Det här blir en kväll
          som stannar kvar länge. En kväll du inte vill missa om du bär på en
          dröm, liten eller stor, som väntar på att få plats. Säkra din plats
          genom att anmäla dig via formuläret nedan.
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
