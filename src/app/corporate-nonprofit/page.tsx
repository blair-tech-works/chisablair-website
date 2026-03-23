import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate & Nonprofit Events | Chisa Blair",
  description:
    "Full Design & Day of Coordination for corporate, nonprofit & networking events. Fundraisers, training, networking, event set-up, and more.",
};

const galleryImages = [
  { src: "/images/united-way-art.jpg", alt: "Spokane County United Way Fundraiser" },
  { src: "/images/united-way.jpg", alt: "Art Movement - United Way Fundraiser" },
  { src: "/images/corporate-training-1.jpg", alt: "Corporate Training" },
  { src: "/images/corporate-training-2.jpg", alt: "Corporate Training" },
  { src: "/images/spokane-club.jpg", alt: "Lunch & Learn - Spokane Club" },
  { src: "/images/fox-theater.jpg", alt: "Networking Event - Fox Theater" },
];

export default function CorporateNonprofitPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/corporate-hero.jpg"
          alt="Corporate & Nonprofit Events"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif drop-shadow-lg">
            Corporate, Nonprofit & Networking Events
          </h1>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-[6%]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-8">
            Schedule your FREE consultation to learn more about our services
          </p>
          <Link href="/contact" className="btn-primary">
            Free Consultation
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-[6%] bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif mb-4">
            Full Design & Day of Coordination
          </h2>
          <p className="mb-8">
            Contact for Pricing
          </p>
          <ul className="space-y-2 mb-10">
            <li>Fundraisers</li>
            <li>Training</li>
            <li>Networking</li>
            <li>Event Set-up</li>
            <li>...and more</li>
          </ul>
          <Link href="/contact" className="btn-primary">
            Request a Quote Today
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
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
