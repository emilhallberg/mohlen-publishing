import Link from "next/link";

export type EventSummary = {
  href: string;
  title: string;
  startsAt: string;
  endsAt: string;
  month: string;
  day?: string;
  dateLabel: string;
  time: string;
  location: string;
};

export default function EventsSection({ events }: { events: EventSummary[] }) {
  const now = new Date().getTime();
  const upcomingEvents = events
    .filter((event) => new Date(event.endsAt).getTime() >= now)
    .sort(
      (a, b) =>
        new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
    );

  return (
    <section
      id="event"
      aria-labelledby="events-heading"
      className="grid w-full max-w-[1080px] scroll-mt-20 gap-8 px-6 py-12 text-orange-50 lg:grid-cols-[1.15fr_1fr] lg:gap-12"
    >
      <div>
        <h2
          id="events-heading"
          className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 bg-clip-text text-2xl text-transparent uppercase md:text-3xl lg:text-4xl"
        >
          Evenemang
        </h2>
        <p className="mt-4 text-base">
          Vi skapar återkommande möten genom allt från poesikvällar till
          föreläsningar. Håll dig uppdaterad här och via våra sociala medier för
          kommande evenemang.
        </p>
      </div>

      {upcomingEvents.length > 0 ? (
        <ul className="grid content-start gap-6">
          {upcomingEvents.map((event) => (
            <li key={event.href}>
              <Link
                href={event.href}
                className="grid min-h-36 grid-cols-[4.25rem_minmax(0,1fr)_1rem] items-center gap-3 border border-orange-50 p-5 transition-colors hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-50 sm:gap-4 sm:p-6"
              >
                <span
                  aria-label={event.dateLabel}
                  className="grid justify-items-center gap-1 text-center"
                >
                  <span aria-hidden="true" className="text-lg uppercase">
                    {event.month}
                  </span>
                  {event.day && (
                    <span aria-hidden="true" className="text-4xl leading-none">
                      {event.day}
                    </span>
                  )}
                </span>
                <span className="grid gap-2">
                  <span className="text-sm">{event.time}</span>
                  <span className="text-lg leading-snug uppercase">
                    {event.title}
                  </span>
                  <span className="text-sm leading-relaxed">{event.location}</span>
                </span>
                <span aria-hidden="true" className="text-2xl">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="self-start border border-orange-50 p-6">
          Nya evenemang är på gång. Håll utkik här för kommande datum!
        </p>
      )}
    </section>
  );
}
