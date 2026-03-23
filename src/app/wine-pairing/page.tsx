import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Vino | Wine Pairing Dinner | Chisa Blair",
  description: "Experience an exclusive in-home wine pairing service with local wines and chef-prepared dining.",
};

const galleryImages = [
  { src: "/images/casa-vino-promo.png", alt: "Casa Vino Dining Experience" },
  { src: "/images/bookwalter-group.jpg", alt: "Casa Vino at J Bookwalter" },
  { src: "/images/napa-group.jpg", alt: "Napa Valley Wine" },
  { src: "/images/bookwalter-glasses.jpg", alt: "J Bookwalter Winery" },
  { src: "/images/cb-casa-vino.png", alt: "Casa Vino - Chisa Blair Events" },
  { src: "/images/wine-glasses.jpg", alt: "Wine Glasses" },
  { src: "/images/napa-group-2.jpg", alt: "Napa Valley Wine Group" },
  { src: "/images/napa-tasting.jpg", alt: "Napa Wine Tasting" },
];

export default function WinePairingPage() {
  return (
    <>
      {/* Request Estimate CTA */}
      <section className="py-6 px-6 text-center">
        <Link
          href="/contact"
          className="text-xs tracking-[2px] uppercase font-light text-black hover:opacity-60 transition-opacity"
        >
          Request an Estimate
        </Link>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-normal mb-8 leading-tight">
            Casa Vino. A Private Dining Experience.
          </h1>
          <p className="text-sm leading-7 font-light mb-10 max-w-2xl mx-auto">
            Experience an exclusive in-home wine pairing service. Our local wine
            representative will present bottles from your favorite tasting
            rooms, or introduce you to new wines. Together with a local chef or
            caterer, we will design a surprisingly affordable wine & food
            pairing experience. Schedule today for your birthday, anniversary,
            holiday, or a &ldquo;just because&rdquo; dinner party. Wine & dine
            at home!
          </p>

          {/* Pricing */}
          <div className="max-w-2xl mx-auto text-left mb-12">
            <p className="text-sm leading-7 font-light mb-6">
              We work with a variety of budgets so be sure to &ldquo;Request an
              Estimate&rdquo; for design-specific pricing. Standard price ranges
              are as follows:
            </p>
            <ul className="space-y-4">
              <li className="text-sm leading-7 font-light">
                Wine-focused, 10-12 attendees. In-home wine tasting including
                charcuterie or light hors d&apos;oeuvres —{" "}
                <span className="font-medium">$250+</span>
              </li>
              <li className="text-sm leading-7 font-light">
                Three-course dining (plated or family-style catering) including
                wine pairing for up to 10 attendees —{" "}
                <span className="font-medium">$750+</span>
              </li>
              <li className="text-sm leading-7 font-light">
                On-site chef, food & wine pairing, 3-7 courses for 8-10
                attendees — <span className="font-medium">$1,100+</span>
              </li>
            </ul>
          </div>

          <Link href="/contact" className="btn-primary">
            Request an Estimate
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
