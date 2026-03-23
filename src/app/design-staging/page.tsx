import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design & Staging | Chisa Blair",
  description: "Custom interior design and real estate staging services. Home staging, open house & real estate services.",
};

export default function DesignStagingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/design-staging-hero.jpg"
          alt="Interior Design & Staging"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight drop-shadow-lg">
            Custom Interior & Real Estate Services
          </h1>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Interior Design */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
              Interior Design
            </h2>
            <p className="text-sm leading-7 font-light">
              We will pair you with our interior design partners to create
              custom concepts for your home or office space. We can accommodate
              a range of budgets and styles.
            </p>
          </div>

          {/* Staging */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal mb-6">
              Staging
            </h2>
            <p className="text-sm leading-7 font-light">
              Whether you are selling a home, leasing property, or furnishing a
              vacation rental we have the designer to accommodate your unique
              style. Are you a Realtor? We can pair you with an event
              coordinator to make your open house an unforgettable event. Buyers
              will be lining up to view your listings.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
