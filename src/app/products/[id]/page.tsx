import { events } from "@/config/mainEvents/mainEvents";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const eventId = Number(id);
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center pt-32">
        <div className="text-center px-8 py-10 rounded-3xl bg-white shadow-xl border border-red-100">
          <h1 className="text-3xl font-bold text-red-600 mb-2">Event Not Found</h1>
          <p className="text-slate-600 text-sm">
            The event you’re looking for doesn’t exist or may have been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 pt-32 pb-20 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/60 px-5 py-1.5 border border-indigo-200 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-indigo-700">
            FEATURED EVENT
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-4 mb-3">
          {event.name}
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {event.shortDescription || "Explore detailed information about this event."}
        </p>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto">
        <div className="grid gap-14 md:grid-cols-2 items-start">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-300/30 via-purple-300/30 to-sky-300/30 blur-3xl transition duration-500 group-hover:blur-[110px]" />

            <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Text Section */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">{event.title}</h2>
              <p className="text-xs mt-1 uppercase tracking-[0.3em] text-slate-500">
                Event Overview
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
              {event.description}
            </p>

            {event.rulebook && !event.rulebook.includes("example.com") && (
              <a
                href={event.rulebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 hover:shadow-xl transition"
              >
                View Rulebook
                <span className="opacity-80 text-[12px]">↗</span>
              </a>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
