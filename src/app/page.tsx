import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-[1px] font-light mb-4">
            Design & Event Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal mb-8 leading-tight">
            We take the stress out of your event
          </h1>
          <a
            href="https://squareup.com/appointments/book/chisablair"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book your FREE Consultation
          </a>
        </div>
      </section>

      {/* Corporate & Nonprofit Events */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4 leading-tight">
              Corporate & Nonprofit Events
            </h2>
            <p className="text-sm tracking-[0.5px] font-light mb-8">
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

      {/* Casa Vino | Dining Experience */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
            <Image
              src="/images/wine-dining.jpg"
              alt="Casa Vino Dining Experience"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4 leading-tight">
              Casa Vino | Dining Experience
            </h2>
            <p className="text-sm tracking-[0.5px] font-light mb-8">
              Food & Wine | Private Tasting | Catering
            </p>
            <Link href="/wine-pairing" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* A Casa | Interior Design & Staging */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4 leading-tight">
              A Casa | Interior Design & Staging
            </h2>
            <p className="text-sm tracking-[0.5px] font-light mb-8">
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
