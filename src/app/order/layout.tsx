import { ReactNode } from "react";

export default function OrderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <section className="grid auto-rows-max gap-4 p-6 pt-2 text-orange-50 text-justify lg:text-left max-w-[1080px] m-auto">
        <h1 className="text-3xl text-orange-50 ">Ordervillkor</h1>
        <ul className="text-orange-50">
          <li>~ Fri returrätt med direkt återbetalning.</li>
          <li>
            ~ Leveranstiden är 2-5 arbetsdagar. För förbokningar meddelas
            leveranstiden separat.
          </li>
          <li>~ Kundservice dygnet runt.</li>
          <li>~ Betalning via Swish eller kortbetalning.</li>
          <li>~ Leverans sker via PostNord.</li>
          <li>~ Fraktkostnad är 35kr.</li>
        </ul>
      </section>
    </>
  );
}
