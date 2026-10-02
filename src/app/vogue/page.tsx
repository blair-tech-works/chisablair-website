import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VOGUE · Cover",
  description: "Vogue-style cover feature.",
};

export default function VogueCoverPage() {
  return (
    <div className="vg">
      <style>{`html,body{background:#120d0f !important;overflow:hidden !important;margin:0;}`}</style>
      <style>{CSS}</style>

      {/* Full-bleed portrait */}
      <div className="vg-photo" aria-hidden />
      <div className="vg-shade" aria-hidden />
      <div className="vg-vignette" aria-hidden />

      {/* Masthead — upper-left, beside her head */}
      <div className="vg-masthead">VOGUE</div>
      <div className="vg-issue">
        <span>October 2026</span>
        <span className="vg-dot">·</span>
        <span>chisablair.com</span>
      </div>

      {/* Left rail of cover lines */}
      <div className="vg-left">
        <div className="vg-block vg-hero">
          <div className="vg-lead">Gorgeous Women</div>
          <div className="vg-sub">of the World Collection</div>
        </div>

        <div className="vg-block">
          <div className="vg-kicker">Exclusive</div>
          <div className="vg-line">From Kindergarten Help to Her New Album</div>
        </div>

        <div className="vg-block">
          <div className="vg-kicker gold">The Debut</div>
          <div className="vg-line">New Colab Line With YSL</div>
        </div>

        <div className="vg-block">
          <div className="vg-kicker">Entertaining</div>
          <div className="vg-line">How to Plan The Perfect Party Event</div>
        </div>
      </div>

      {/* Barcode / price flourish — dark bottom-right corner */}
      <div className="vg-barcode" aria-hidden>
        <div className="vg-bars" />
        <div className="vg-price">$9.99 US</div>
      </div>
    </div>
  );
}

const CSS = `
.vg{position:fixed;inset:0;z-index:9999;overflow:hidden;
  background:#120d0f;color:#fff;
  font-family:"Bodoni Moda",Didot,"Didot LT STD","Hoefler Text",Georgia,serif;}

.vg-photo{position:absolute;inset:0;
  background:url("/images/vogue-cover.jpg") center top / cover no-repeat;}
/* Darken the left rail + bottom so white cover text stays legible */
.vg-shade{position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(100deg,rgba(18,13,15,.80) 0%,rgba(18,13,15,.46) 28%,rgba(18,13,15,0) 52%),
             linear-gradient(0deg,rgba(18,13,15,.5) 0%,rgba(18,13,15,0) 26%);}
.vg-vignette{position:absolute;inset:0;pointer-events:none;
  box-shadow:inset 0 0 22vh 6vh rgba(10,6,8,.5);}

/* VOGUE wordmark — Didone, upper-left, slightly see-through */
.vg-masthead{position:absolute;top:3.2vh;left:3vw;z-index:3;
  font-weight:600;font-size:12vw;line-height:.8;letter-spacing:.012em;
  color:rgba(255,255,255,.94);
  text-shadow:0 2px 36px rgba(0,0,0,.45);
  -webkit-text-stroke:.3px rgba(255,255,255,.18);}
.vg-issue{position:absolute;top:21vh;left:3.3vw;z-index:3;
  font-family:"Montserrat",system-ui,sans-serif;font-weight:500;
  font-size:.95vw;letter-spacing:.4em;text-transform:uppercase;color:rgba(255,255,255,.8);}
.vg-issue .vg-dot{margin:0 .8vw;color:rgba(255,255,255,.4);}

/* Left rail */
.vg-left{position:absolute;left:3.3vw;top:26vh;z-index:3;width:38vw;
  display:flex;flex-direction:column;gap:3.1vh;}
.vg-block{text-shadow:0 1px 20px rgba(0,0,0,.7);}

.vg-hero{margin-bottom:.6vh;}
.vg-lead{font-weight:600;font-size:4vw;line-height:.95;letter-spacing:-.01em;}
.vg-sub{font-style:italic;font-weight:500;font-size:2.3vw;line-height:1.02;
  color:rgba(255,255,255,.93);margin-top:.5vh;}

.vg-kicker{font-family:"Montserrat",system-ui,sans-serif;font-weight:700;
  font-size:.9vw;letter-spacing:.32em;text-transform:uppercase;
  color:rgba(255,255,255,.7);margin-bottom:.8vh;}
.vg-kicker.gold{color:#d9b877;}
.vg-line{font-weight:500;font-size:2.15vw;line-height:1.08;letter-spacing:.005em;}

/* Barcode — bottom-right over dark couch */
.vg-barcode{position:absolute;right:3vw;bottom:5vh;z-index:3;
  display:flex;flex-direction:column;align-items:flex-end;gap:.7vh;}
.vg-bars{width:9vw;height:4.2vh;
  background:repeating-linear-gradient(90deg,#fff 0,#fff .22vw,transparent .22vw,transparent .52vw);
  opacity:.9;}
.vg-price{font-family:"Montserrat",system-ui,sans-serif;font-weight:600;
  font-size:.85vw;letter-spacing:.2em;color:rgba(255,255,255,.82);}
`;
