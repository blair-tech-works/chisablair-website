import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pacific Northwest | Chisa Blair",
  description:
    "Design & Event Services in Washington & Idaho. Your options have no borders.",
};

export default function PacificNorthwestPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/pacific-nw-hero.jpg"
          alt="Pacific Northwest - Washington & Idaho"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-[46px] font-medium mb-4 leading-[1.33] drop-shadow-lg">
            Washington & Idaho
          </h1>
          <p className="text-lg font-light mb-10 drop-shadow-md">
            Your options have no borders.
          </p>
          <a
            href="https://squareup.com/appointments/book/wbp736q14ceh80/LHXAXTXBFAJXM/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-white !text-black"
          >
            Book Now
          </a>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </section>
    </>
  );
}
