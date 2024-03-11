import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="relative flex place-items-center h-screen animate-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-900 bg-clip-text text-transparent">
        <h1 className="lg:text-8xl md:text-6xl text-4xl text-center">
          Mohlén Publishing
        </h1>
      </header>
      <section className="relative p-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              className="max-w-full rounded-lg shadow-lg"
              src="/ester-1.jpg"
              alt="Ester Mohlén"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 text-slate-300">
              <p className="text-center mb-6">***</p>
              <p className="mt-3 text-lg">
                <b>Ester Mohlén</b>, född 22 juli 2006 i landskapet Hälsingland,
                närmare sagt i den lilla byn Njutånger. Under sitt liv har hon
                mestadels talat genom text och fantasi, i hennes svåra såväl
                lite bättre stunder. Men det är först nu hon ger ut sin
                debutroman i samband med hennes nystartade bolag Mohlén
                Publishing. Hon beskriver detta som ren eufori för en dröm som
                äntligen blir till verklighet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative p-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <Image
              className="max-w-full rounded-lg shadow-lg"
              src="/ester-2.jpg"
              alt="Ester Mohlén"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 text-slate-300">
              <p className="text-center mb-6">***</p>
              <p className="mt-3 text-lg">
                <b>Ester</b>, har sedan länge varit företagsam och drömt om ett
                eget bolag. Drömmen med Mohlén Publishing är att kunna livnära
                sig men hennes fokus är framförallt att fa tillbringa hennes tid
                med hennes passioner. Genom Mohlén Publishing kommer Ester att
                marknadsföra sina litterära verk samtidigt som hon vill
                inspirera andra individer till att både läsa och skriva, men
                framförallt visa att ingenting är omöjligt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
