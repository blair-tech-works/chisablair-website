"use client";

import { useEffect, useState } from "react";

// Event start: Sat Oct 24, 2026, 3:00 PM Pacific.
const START = new Date("2026-10-24T15:00:00-07:00").getTime();

function pad(n: number) {
  return (n < 10 ? "0" : "") + n;
}

export default function NaaiaTvBoard() {
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
    <div className="ntv">
      <style>{`html,body{background:#0f2342 !important;overflow:hidden !important;margin:0;}`}</style>
      <style>{CSS}</style>

      <div className="ntv-c1" aria-hidden />
      <div className="ntv-c2" aria-hidden />

      <header className="ntv-head">
        <div className="ntv-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ntv-naaia"
            src="/images/naaia-logo-white.svg"
            alt="NAAIA — National African American Insurance Association"
          />
          <div className="ntv-kicker">Seattle Development Chapter</div>
        </div>
        <div className="ntv-status">
          <div className={`ntv-live${live ? " on" : ""}`}>
            <i />
            {live ? "Today" : "Upcoming"}
          </div>
          <div className="ntv-count">{status}</div>
          <div className="ntv-clock">{clock}</div>
        </div>
      </header>

      <main className="ntv-main">
        <div className="ntv-left">
          <h1 className="ntv-title">Saturday Social</h1>
          <div className="ntv-feat">
            Featuring <b>Frichette Winery</b> · at WeRise Wine Bar
          </div>

          <div className="ntv-date">
            <span className="ntv-d">Sat · Oct 24</span>
            <span className="ntv-t">2026 · 3:00 – 6:00 PM</span>
          </div>

          <div className="ntv-rows">
            <div className="ntv-row">
              <span className="ntv-k">Tasting Flights</span>
              <span className="ntv-v">Guided at 4:00 &amp; 5:00 PM</span>
            </div>
            <div className="ntv-row">
              <span className="ntv-k">Where</span>
              <span className="ntv-v">WeRise Wine Bar · 1913 2nd Ave, Seattle</span>
            </div>
          </div>
        </div>

        <aside className="ntv-reg">
          <div className="ntv-reg-k">Pre-Register</div>
          <div className="ntv-qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/eventbrite-qr.png" alt="Scan to register on Eventbrite" />
          </div>
          <div className="ntv-reg-v">Scan to register · Free RSVP</div>
          <div className="ntv-reg-s">eventbrite.com/e/2002798474150</div>
        </aside>
      </main>

      <footer className="ntv-foot">
        <div className="ntv-partner">
          <div className="ntv-werise-chip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ntv-werise" src="/images/werise-logo.png" alt="WeRise Wines" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ntv-frichette" src="/images/frichette-logo.png" alt="Frichette Winery" />
          <span>At WeRise Wine Bar · featuring Frichette Winery · Benton City, WA</span>
        </div>
        <div className="ntv-tag">It&apos;s Time. Let&apos;s Go!</div>
      </footer>
    </div>
  );
}

const CSS = `
.ntv{position:fixed;inset:0;z-index:9999;overflow:hidden;display:flex;flex-direction:column;
  background:linear-gradient(155deg,#16305a 0%,#0f2342 55%,#0a1a33 100%);
  color:#eef3fa;font-family:"Montserrat",system-ui,-apple-system,sans-serif;}
.ntv-c1{position:absolute;right:-8vw;top:-14vh;width:36vw;height:36vw;border-radius:50%;
  border:1.4vh solid rgba(47,109,176,.28);pointer-events:none;}
.ntv-c2{position:absolute;right:12vw;bottom:-16vh;width:22vw;height:22vw;border-radius:50%;
  background:rgba(198,161,91,.12);pointer-events:none;}
.ntv-head,.ntv-main,.ntv-foot{position:relative;z-index:1;}
.ntv-head{display:flex;justify-content:space-between;align-items:flex-start;padding:4vh 4vw 0;}
.ntv-brand{display:flex;flex-direction:column;gap:1.5vh;}
.ntv-naaia{height:6.2vh;width:auto;display:block;}
.ntv-kicker{font-size:1.25vw;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#c6a15b;}
.ntv-status{display:flex;align-items:center;gap:1.7vw;}
.ntv-live{display:inline-flex;align-items:center;gap:.55vw;font-size:1.0vw;letter-spacing:.2em;text-transform:uppercase;color:rgba(238,243,250,.6);}
.ntv-live i{width:.6vw;height:.6vw;border-radius:50%;background:#55708f;}
.ntv-live.on{color:#e6c97a;}
.ntv-live.on i{background:#c6a15b;box-shadow:0 0 0 0 rgba(198,161,91,.6);animation:ntvp 2.2s ease-out infinite;}
@keyframes ntvp{0%{box-shadow:0 0 0 0 rgba(198,161,91,.5);}70%{box-shadow:0 0 0 1vw rgba(198,161,91,0);}100%{box-shadow:0 0 0 0 rgba(198,161,91,0);}}
.ntv-count{font-size:1.4vw;font-weight:700;color:#e6c97a;letter-spacing:.03em;}
.ntv-clock{font-size:1.5vw;color:#8fa7c4;font-variant-numeric:tabular-nums;letter-spacing:.08em;}
.ntv-main{flex:1;display:grid;grid-template-columns:1.6fr 1fr;gap:4vw;align-items:center;padding:0 4vw;min-height:0;}
.ntv-title{font-family:"Bodoni Moda",Georgia,serif;font-weight:500;font-size:clamp(48px,8.4vw,150px);
  line-height:.94;letter-spacing:-.01em;margin:0;}
.ntv-feat{margin-top:1.6vh;font-size:2.1vw;font-weight:300;color:rgba(238,243,250,.92);}
.ntv-feat b{font-weight:600;color:#fff;}
.ntv-date{display:flex;align-items:baseline;gap:1.6vw;margin:3.4vh 0 2.6vh;border-top:1px solid rgba(238,243,250,.18);padding-top:2.6vh;}
.ntv-d{font-family:"Bodoni Moda",serif;font-size:clamp(28px,4.6vw,74px);line-height:1;color:#c6a15b;}
.ntv-t{font-size:1.5vw;letter-spacing:.14em;text-transform:uppercase;color:rgba(238,243,250,.78);}
.ntv-rows{display:flex;flex-direction:column;gap:1.8vh;}
.ntv-row{display:flex;align-items:baseline;gap:1.4vw;}
.ntv-k{width:14vw;font-size:1.0vw;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#4f93d6;}
.ntv-v{font-size:1.6vw;font-weight:300;color:#eef3fa;}
.ntv-reg{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
  background:rgba(255,255,255,.05);border:1px solid rgba(238,243,250,.14);border-radius:1vw;padding:3vh 2vw;}
.ntv-reg-k{font-size:1.0vw;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:#4f93d6;}
.ntv-qr{margin:2vh 0;width:12vw;height:12vw;display:flex;align-items:center;justify-content:center;
  border-radius:.6vw;background:#fff;padding:.8vw;}
.ntv-qr img{width:100%;height:100%;display:block;}
.ntv-reg-v{font-size:1.25vw;font-weight:500;}
.ntv-reg-s{margin-top:.6vh;font-size:1.0vw;font-style:italic;color:rgba(238,243,250,.5);}
.ntv-foot{display:flex;justify-content:space-between;align-items:center;padding:0 4vw 4vh;}
.ntv-partner{display:flex;align-items:center;gap:1.2vw;}
.ntv-werise-chip{display:flex;align-items:center;background:#f5eee4;border-radius:.5vw;padding:.9vh 1vw;}
.ntv-werise{height:3.8vh;width:auto;display:block;}
.ntv-frichette{height:4.8vh;width:auto;display:block;}
.ntv-partner span{font-size:1.0vw;color:rgba(238,243,250,.65);}
.ntv-tag{font-family:"Bodoni Moda",serif;font-style:italic;font-size:1.9vw;color:#e6c97a;}
`;
