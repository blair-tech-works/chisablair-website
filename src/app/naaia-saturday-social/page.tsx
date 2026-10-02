import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAIA Seattle · Saturday Social ft. Frichette Winery | Oct 24",
  description:
    "NAAIA Seattle Development Chapter Saturday Social featuring Frichette Winery at WeRise — Saturday, October 24, 2026, 3–6 PM, Seattle. Guided tasting flights at 4 & 5 PM.",
};

export default function NaaiaSaturdaySocialPage() {
  return (
    <div className="naaia-flyer">
      <style>{PRINT_CSS}</style>

      <article className="mx-auto my-0 w-full max-w-[860px] overflow-hidden bg-white text-[#1c2430] shadow-[0_24px_70px_rgba(19,41,75,0.28)] print:shadow-none">
        {/* Masthead */}
        <header className="relative overflow-hidden bg-[#13294b] px-[8%] pt-14 pb-12 text-white">
          {/* geometric accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[14px] border-[#2f6db0]/30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-24 bottom-[-60px] h-40 w-40 rounded-full bg-[#c6a15b]/20"
          />

          <div className="relative">
            <div className="font-sans text-[13px] font-medium uppercase tracking-[0.34em] text-[#c6a15b]">
              NAAIA · Seattle Development Chapter
            </div>
            <div className="mt-2 font-sans text-[12px] uppercase tracking-[0.28em] text-white/55">
              National African American Insurance Association
            </div>

            <h1 className="mt-7 font-serif text-[clamp(44px,7vw,74px)] leading-[0.98] tracking-[-0.01em]">
              Saturday Social
            </h1>
            <p className="mt-3 font-sans text-[clamp(16px,2.4vw,21px)] font-light text-white/90">
              Featuring <span className="font-medium text-white">Frichette Winery</span> at WeRise
            </p>

            <div className="mt-8 inline-flex items-baseline gap-4 border-t border-white/20 pt-6">
              <span className="font-serif text-[clamp(30px,5vw,46px)] leading-none text-[#c6a15b]">
                Oct 24
              </span>
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-white/75">
                Saturday · 2026 · 3:00 – 6:00 PM
              </span>
            </div>
          </div>
        </header>

        {/* Details */}
        <section className="grid grid-cols-1 gap-y-10 px-[8%] py-12 md:grid-cols-[1.35fr_1fr] md:gap-x-12">
          <div>
            <p className="font-sans text-[15px] font-light leading-[1.8] text-[#394150]">
              Join the NAAIA Seattle Development Chapter for one of our Saturday Socials — an
              afternoon of connection and great wine. We&apos;re pouring with{" "}
              <span className="font-medium text-[#13294b]">Frichette Winery</span> at WeRise, with
              guided tasting flights led throughout the afternoon. Bring a colleague, meet the
              chapter, and settle in.
            </p>

            <div className="mt-8 space-y-5">
              <DetailRow k="Tasting Flights">
                Guided flights at <span className="font-medium">4:00 PM</span> &amp;{" "}
                <span className="font-medium">5:00 PM</span>
              </DetailRow>
              <DetailRow k="Where">
                WeRise · Seattle, WA
                <span className="block text-[13px] text-[#8a93a3]">Address to follow</span>
              </DetailRow>
              <DetailRow k="When">
                Saturday, October 24, 2026 · 3:00 – 6:00 PM
              </DetailRow>
            </div>
          </div>

          {/* Register / RSVP */}
          <aside className="flex flex-col items-center justify-center rounded-lg border border-[#e4e7ee] bg-[#f6f8fb] px-6 py-8 text-center">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2f6db0]">
              Pre-Register
            </div>
            {/* Eventbrite QR placeholder */}
            <div className="mt-4 flex h-40 w-40 items-center justify-center rounded-md border-2 border-dashed border-[#c3cad6] bg-white">
              <span className="px-3 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-[#9aa3b2]">
                Eventbrite
                <br />
                QR code
              </span>
            </div>
            <div className="mt-4 font-sans text-[13px] text-[#394150]">
              Scan or register on <span className="font-medium">Eventbrite</span>
            </div>
            <div className="mt-1 font-sans text-[12px] italic text-[#8a93a3]">
              Registration link to follow
            </div>
          </aside>
        </section>

        {/* Partner / footer */}
        <footer className="flex flex-col items-center justify-between gap-6 border-t border-[#e4e7ee] bg-white px-[8%] py-7 sm:flex-row">
          <div className="flex items-center gap-5">
            {/* Frichette logo placeholder */}
            <div className="flex h-14 w-36 items-center justify-center rounded border border-dashed border-[#c3cad6] bg-[#f6f8fb]">
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#9aa3b2]">
                Frichette logo
              </span>
            </div>
            <div className="font-sans text-[12px] leading-snug text-[#6b7382]">
              In partnership with
              <br />
              <span className="font-medium text-[#13294b]">Frichette Winery</span>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <div className="font-serif text-[20px] italic text-[#13294b]">It&apos;s Time. Let&apos;s Go!</div>
            <div className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-[#8a93a3]">
              Hosted by Chisa B. Blair · Design &amp; Events
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

function DetailRow({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="w-[120px] shrink-0 pt-[3px] font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f6db0]">
        {k}
      </div>
      <div className="font-sans text-[15px] font-light leading-[1.7] text-[#1c2430]">{children}</div>
    </div>
  );
}

const PRINT_CSS = `
.naaia-flyer{ background:#eef1f6; padding:40px 24px; }
@media print{
  @page{ size: letter portrait; margin:.4in; }
  .naaia-flyer{ background:#fff; padding:0; }
  .naaia-flyer article{ max-width:none; box-shadow:none; }
}
`;
