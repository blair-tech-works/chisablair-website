import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAIA Seattle · October Saturday Social at WeRise Wine Bar | Oct 24",
  description:
    "NAAIA Seattle October Saturday Social at WeRise Wine Bar, featuring Frichette Winery of Red Mountain — Saturday, October 24, 2026, 3–6 PM. Guided tastings at 4 & 5 PM. 1913 2nd Ave, Seattle.",
};

export default function NaaiaSaturdaySocialV2() {
  return (
    <div className="v2page">
      <style>{PRINT_CSS}</style>
      <style>{CSS}</style>

      <div className="v2card">
        {/* LEFT — wine panel */}
        <section className="v2left">
          <div className="v2frame" aria-hidden />

          <header className="v2head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="v2naaia"
              src="/images/naaia-logo-white.svg"
              alt="NAAIA — National African American Insurance Association"
            />
            <div className="v2seattle">Seattle</div>
          </header>

          <div className="v2kicker">Presents · Monthly Saturday Social Series</div>

          <h1 className="v2title">October Saturday Social</h1>
          <div className="v2at">
            <span className="v2at-it">at</span> <span className="v2at-ven">WeRise Wine Bar</span>
          </div>

          <div className="v2rule" aria-hidden />

          <p className="v2body">
            Featuring <b>Frichette Winery</b>{" "}of Red Mountain — guided tastings &amp;
            meet-and-greet with co-owner <b>Shaé Frichette</b>
          </p>
          <p className="v2flight">
            Frichette × WeRise tasting flight · <b>$30</b>
          </p>

          <div className="v2when">
            SAT · OCT 24 · 3–6 PM · Doors 3:00 · Tastings 4:00 &amp; 5:00
          </div>
          <div className="v2where">WeRise Wine Bar · 1913 2nd Ave, Seattle</div>

          <div className="v2reg">
            <div className="v2qr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/eventbrite-qr.png" alt="Scan to register on Eventbrite" />
            </div>
            <div className="v2reg-t">
              <div className="v2scan">Scan to Register</div>
              <div className="v2link">eventbrite.com/e/2002798474150</div>
              <div className="v2rsvp">Free RSVP</div>
            </div>
          </div>
        </section>

        {/* RIGHT — cream partner panel */}
        <aside className="v2right">
          <div className="v2pard">
            <div className="v2plabel">At</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="v2werise" src="/images/werise-logo.png" alt="WeRise Wines" />
            <div className="v2wordmark">
              <span className="v2w1">WeRise</span>
              <span className="v2w2">Wines</span>
            </div>
          </div>

          <div className="v2pdiv" aria-hidden />

          <div className="v2pard">
            <div className="v2plabel">Featuring</div>
            <div className="v2frich">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/frichette-logo.png" alt="Frichette Winery" />
              <div className="v2frich-sub">Red Mountain</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

const CSS = `
.v2page{min-height:100vh;display:flex;align-items:center;justify-content:center;
  background:#1a0509;padding:3vw;}
.v2card{position:relative;width:100%;max-width:1360px;aspect-ratio:2/1;display:flex;overflow:hidden;
  border-radius:.5cqw;container-type:inline-size;
  font-family:"Montserrat",system-ui,-apple-system,sans-serif;color:#fbf2ea;
  box-shadow:0 30px 80px rgba(0,0,0,.5);}

/* LEFT */
.v2left{position:relative;flex:0 0 74%;padding:4.4cqw 4cqw 3.8cqw;
  background:radial-gradient(125% 115% at 36% 40%,#5f1430 0%,#44101f 44%,#290912 100%);}
.v2frame{position:absolute;inset:1.5cqw;border:.12cqw solid rgba(198,161,91,.55);border-radius:.3cqw;pointer-events:none;}

.v2head{display:flex;align-items:flex-end;gap:1.4cqw;}
.v2naaia{height:4.6cqw;width:auto;display:block;}
.v2seattle{font-weight:700;font-size:1.35cqw;letter-spacing:.42em;text-transform:uppercase;color:#c9a862;
  padding-bottom:.35cqw;}

.v2kicker{margin-top:2.6cqw;font-size:1.18cqw;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:#c9a862;}

.v2title{margin:.9cqw 0 0;font-family:"Bodoni Moda",Didot,Georgia,serif;font-weight:600;
  font-size:5.1cqw;line-height:1;letter-spacing:-.005em;color:#fdf7f0;}
.v2at{margin-top:.7cqw;font-family:"Bodoni Moda",Georgia,serif;font-style:italic;font-weight:500;font-size:3cqw;line-height:1;}
.v2at-it{color:#f3e7dd;}
.v2at-ven{color:#e07aa0;}

.v2rule{width:9cqw;height:.18cqw;background:#c9a862;margin:2.2cqw 0 2cqw;}

.v2body{margin:0;max-width:56cqw;font-size:1.62cqw;font-weight:300;line-height:1.5;color:#f4e7de;}
.v2body b{font-weight:600;color:#fff;}
.v2flight{margin:.9cqw 0 0;font-size:1.5cqw;font-weight:300;color:#f1dfd4;}
.v2flight b{font-weight:700;color:#fff;}

.v2when{margin-top:2.1cqw;font-size:1.72cqw;font-weight:700;letter-spacing:.01em;color:#fff;}
.v2where{margin-top:.7cqw;font-size:1.4cqw;font-weight:300;color:#e7cfd8;}

.v2reg{display:flex;align-items:center;gap:1.6cqw;margin-top:2.6cqw;}
.v2qr{width:8.6cqw;height:8.6cqw;padding:.55cqw;background:#fff;border-radius:.4cqw;
  border:.2cqw solid #c9a862;box-shadow:0 .3cqw 1cqw rgba(0,0,0,.3);}
.v2qr img{width:100%;height:100%;display:block;}
.v2scan{font-size:1.25cqw;font-weight:700;letter-spacing:.26em;text-transform:uppercase;color:#c9a862;}
.v2link{margin-top:.5cqw;font-size:1.45cqw;font-weight:500;color:#fdf7f0;}
.v2rsvp{margin-top:.35cqw;font-size:1.25cqw;font-weight:300;color:#e7cfd8;}

/* RIGHT */
.v2right{position:relative;flex:1;background:#f5eee4;color:#6a2238;
  display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;
  padding:4cqw 2cqw;text-align:center;}
.v2pard{display:flex;flex-direction:column;align-items:center;gap:1cqw;}
.v2plabel{font-size:1.15cqw;font-weight:700;letter-spacing:.42em;text-transform:uppercase;color:#9c7a84;}
.v2werise{height:6.4cqw;width:auto;display:block;}
.v2wordmark{display:flex;flex-direction:column;align-items:center;line-height:1;}
.v2w1{font-size:2.5cqw;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#be2b63;}
.v2w2{margin-top:.3cqw;font-size:1.35cqw;font-weight:600;letter-spacing:.5em;text-transform:uppercase;color:#be2b63;padding-left:.5em;}

.v2pdiv{width:28%;height:.12cqw;background:rgba(106,34,56,.28);}

.v2frich{display:flex;flex-direction:column;align-items:center;gap:.9cqw;
  background:#4a1020;border-radius:.5cqw;padding:1.6cqw 1.8cqw;}
.v2frich img{height:4.6cqw;width:auto;display:block;}
.v2frich-sub{font-size:1.1cqw;font-weight:600;letter-spacing:.34em;text-transform:uppercase;color:#d7b98a;}
`;

const PRINT_CSS = `
@media print{
  @page{ size: letter landscape; margin:.3in; }
  body > header, body > footer{ display:none !important; }
  body, main{ display:block !important; min-height:0 !important; }
  .v2page{ min-height:0 !important; padding:0 !important; background:#fff !important; }
  .v2card{ max-width:none !important; width:100% !important; box-shadow:none !important; border-radius:0 !important; }
}
`;
