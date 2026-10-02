"use client";

import { useEffect, useState } from "react";

// Event start: Sat Oct 24, 2026, 3:00 PM Pacific.
const START = new Date("2026-10-24T15:00:00-07:00").getTime();

function pad(n: number) {
  return (n < 10 ? "0" : "") + n;
}

export default function NaaiaV2TvBoard() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  let status = "Save the date";
  let live = false;
  if (now) {
    const diff = START - now.getTime();
    if (diff > 0) {
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      status = d > 0 ? `In ${d}d ${h}h` : `In ${h}h ${m}m`;
    } else {
      live = true;
      status = "Underway";
    }
  }
  const clock = now ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}` : "";

  return (
    <div className="v2tv">
      <style>{`html,body{background:#290912 !important;overflow:hidden !important;margin:0;}`}</style>
      <style>{CSS}</style>

      {/* LEFT — wine panel */}
      <section className="v2tv-left">
        <div className="v2tv-frame" aria-hidden />

        <div className="v2tv-status">
          <div className={`v2tv-live${live ? " on" : ""}`}>
            <i />
            {live ? "Today" : "Upcoming"}
          </div>
          <div className="v2tv-cd">{status}</div>
          <div className="v2tv-clock">{clock}</div>
        </div>

        <header className="v2tv-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="v2tv-naaia"
            src="/images/naaia-logo-white.svg"
            alt="NAAIA — National African American Insurance Association"
          />
          <div className="v2tv-seattle">Seattle</div>
        </header>

        <div className="v2tv-kicker">Presents · Monthly Saturday Social Series</div>

        <h1 className="v2tv-title">October Saturday Social</h1>
        <div className="v2tv-at">
          <span className="v2tv-at-it">at</span> <span className="v2tv-at-ven">WeRise Wine Bar</span>
        </div>

        <div className="v2tv-rule" aria-hidden />

        <p className="v2tv-body">
          Featuring <b>Frichette Winery</b>{" "}of Red Mountain — guided tastings &amp;
          meet-and-greet with co-owner <b>Shaé Frichette</b>
        </p>
        <p className="v2tv-flight">
          Frichette × WeRise tasting flight · <b>$30</b>
        </p>

        <div className="v2tv-when">SAT · OCT 24 · 3–6 PM · Doors 3:00 · Tastings 4:00 &amp; 5:00</div>
        <div className="v2tv-where">WeRise Wine Bar · 1913 2nd Ave, Seattle</div>

        <div className="v2tv-reg">
          <div className="v2tv-qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/eventbrite-qr.png" alt="Scan to register on Eventbrite" />
          </div>
          <div className="v2tv-reg-t">
            <div className="v2tv-scan">Scan to Register</div>
            <div className="v2tv-link">eventbrite.com/e/2002798474150</div>
            <div className="v2tv-rsvp">Free RSVP</div>
          </div>
        </div>
      </section>

      {/* RIGHT — cream partner panel */}
      <aside className="v2tv-right">
        <div className="v2tv-pard">
          <div className="v2tv-plabel">At</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="v2tv-werise" src="/images/werise-logo.png" alt="WeRise Wines" />
          <div className="v2tv-wordmark">
            <span className="v2tv-w1">WeRise</span>
            <span className="v2tv-w2">Wines</span>
          </div>
        </div>

        <div className="v2tv-pdiv" aria-hidden />

        <div className="v2tv-pard">
          <div className="v2tv-plabel">Featuring</div>
          <div className="v2tv-frich">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/frichette-logo.png" alt="Frichette Winery" />
            <div className="v2tv-frich-sub">Red Mountain</div>
          </div>
        </div>
      </aside>
    </div>
  );
}

const CSS = `
.v2tv{position:fixed;inset:0;z-index:9999;overflow:hidden;display:flex;
  font-family:"Montserrat",system-ui,-apple-system,sans-serif;color:#fbf2ea;}

.v2tv-left{position:relative;flex:0 0 72%;padding:4.6vh 4vw;
  background:radial-gradient(125% 115% at 36% 42%,#5f1430 0%,#44101f 44%,#290912 100%);}
.v2tv-frame{position:absolute;inset:2vh 1.8vw;border:1px solid rgba(201,168,98,.5);border-radius:.5vw;pointer-events:none;}

.v2tv-status{position:absolute;top:5vh;right:3vw;display:flex;align-items:center;gap:1.3vw;z-index:2;}
.v2tv-live{display:inline-flex;align-items:center;gap:.5vw;font-size:1.0vw;letter-spacing:.2em;text-transform:uppercase;color:rgba(247,224,214,.6);}
.v2tv-live i{width:.6vw;height:.6vw;border-radius:50%;background:#9c5a6e;}
.v2tv-live.on{color:#e9b6c7;}
.v2tv-live.on i{background:#e07aa0;animation:v2p 2.2s ease-out infinite;}
@keyframes v2p{0%{box-shadow:0 0 0 0 rgba(224,122,160,.5);}70%{box-shadow:0 0 0 1vw rgba(224,122,160,0);}100%{box-shadow:0 0 0 0 rgba(224,122,160,0);}}
.v2tv-cd{font-size:1.5vw;font-weight:700;color:#e9c37a;letter-spacing:.03em;}
.v2tv-clock{font-size:1.4vw;color:#c99aaa;font-variant-numeric:tabular-nums;letter-spacing:.08em;}

.v2tv-head{display:flex;align-items:flex-end;gap:1.4vw;}
.v2tv-naaia{height:6.6vh;width:auto;display:block;}
.v2tv-seattle{font-weight:700;font-size:1.25vw;letter-spacing:.42em;text-transform:uppercase;color:#c9a862;padding-bottom:.6vh;}

.v2tv-kicker{margin-top:2.2vh;font-size:1.15vw;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:#c9a862;}
.v2tv-title{margin:.9vh 0 0;font-family:"Bodoni Moda",Didot,Georgia,serif;font-weight:600;
  font-size:4.9vw;line-height:1;letter-spacing:-.01em;color:#fdf7f0;}
.v2tv-at{margin-top:.9vh;font-family:"Bodoni Moda",Georgia,serif;font-style:italic;font-weight:500;font-size:3vw;line-height:1;}
.v2tv-at-it{color:#f3e7dd;}
.v2tv-at-ven{color:#e07aa0;}

.v2tv-rule{width:9vw;height:2px;background:#c9a862;margin:2vh 0 1.8vh;}

.v2tv-body{margin:0;max-width:56vw;font-size:1.62vw;font-weight:300;line-height:1.45;color:#f4e7de;}
.v2tv-body b{font-weight:600;color:#fff;}
.v2tv-flight{margin:1vh 0 0;font-size:1.5vw;font-weight:300;color:#f1dfd4;}
.v2tv-flight b{font-weight:700;color:#fff;}

.v2tv-when{margin-top:2vh;font-size:1.8vw;font-weight:700;color:#fff;}
.v2tv-where{margin-top:.8vh;font-size:1.42vw;font-weight:300;color:#e7cfd8;}

.v2tv-reg{display:flex;align-items:center;gap:1.5vw;margin-top:2.2vh;}
.v2tv-qr{width:10vh;height:10vh;padding:.8vh;background:#fff;border-radius:.5vh;
  border:2px solid #c9a862;box-shadow:0 4px 18px rgba(0,0,0,.35);}
.v2tv-qr img{width:100%;height:100%;display:block;}
.v2tv-scan{font-size:1.2vw;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:#c9a862;}
.v2tv-link{margin-top:.7vh;font-size:1.4vw;font-weight:500;color:#fdf7f0;}
.v2tv-rsvp{margin-top:.5vh;font-size:1.2vw;font-weight:300;color:#e7cfd8;}

.v2tv-right{position:relative;flex:1;background:#f5eee4;color:#6a2238;
  display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;
  padding:7vh 2vw;text-align:center;}
.v2tv-pard{display:flex;flex-direction:column;align-items:center;gap:1.8vh;}
.v2tv-plabel{font-size:1.05vw;font-weight:700;letter-spacing:.42em;text-transform:uppercase;color:#9c7a84;}
.v2tv-werise{height:12vh;width:auto;display:block;}
.v2tv-wordmark{display:flex;flex-direction:column;align-items:center;line-height:1;}
.v2tv-w1{font-size:2.6vw;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#be2b63;}
.v2tv-w2{margin-top:.5vh;font-size:1.35vw;font-weight:600;letter-spacing:.5em;text-transform:uppercase;color:#be2b63;padding-left:.5em;}
.v2tv-pdiv{width:30%;height:2px;background:rgba(106,34,56,.26);}
.v2tv-frich{display:flex;flex-direction:column;align-items:center;gap:1.4vh;
  background:#4a1020;border-radius:.6vw;padding:2.4vh 2vw;}
.v2tv-frich img{height:8vh;width:auto;display:block;}
.v2tv-frich-sub{font-size:1.0vw;font-weight:600;letter-spacing:.34em;text-transform:uppercase;color:#d7b98a;}
`;
