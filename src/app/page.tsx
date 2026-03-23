import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section — narrow centered, small height */}
      <section className="py-20 md:py-28 px-[6%]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-lg font-light mb-4">
            Design & Event Services
          </p>
          <h3 className="font-serif text-[46px] font-medium mb-8 leading-[1.33]">
            We take the stress out of your event
          </h3>
          <a
            href="https://squareup.com/appointments/book/chisablair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-light underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Book your FREE Consultation
          </a>
        </div>
      </section>

      {/* Corporate & Nonprofit Events — wide, text left + image right */}
      <section className="py-16 md:py-20 px-[6%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-[46px] font-medium mb-4 leading-[1.33]">
              Corporate & Nonprofit Events
            </h3>
            <p className="text-lg font-light mb-8">
              Design & Coordination | Training | Retreats | Fundraisers
            </p>
            <Link href="/corporate-nonprofit" className="btn-primary">
              See Packages
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/wine-dining.jpg"
              alt="Corporate & Nonprofit Events"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Casa Vino | Dining Experience — image left + text right */}
      <section className="py-16 md:py-20 px-[6%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
            <Image
              src="/images/wine-dining.jpg"
              alt="Casa Vino Dining Experience"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-serif text-[46px] font-medium mb-4 leading-[1.33]">
              Casa Vino | Dining Experience
            </h3>
            <p className="text-lg font-light mb-8">
              Food & Wine | Private Tasting | Catering
            </p>
            <Link href="/wine-pairing" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* A Casa | Interior Design & Staging — text left + image right */}
      <section className="py-16 md:py-20 px-[6%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-[46px] font-medium mb-4 leading-[1.33]">
              A Casa | Interior Design & Staging
            </h3>
            <p className="text-lg font-light mb-8">
              Interior Design | Home Staging | Open House & Real Estate Services
            </p>
            <Link href="/design-staging" className="btn-primary">
              Learn More
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/interior-design.jpg"
              alt="Interior Design & Staging"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
