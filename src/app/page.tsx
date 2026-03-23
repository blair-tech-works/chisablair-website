import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section — narrow centered, inset */}
      <section className="py-20 md:py-28 px-[6%]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="mb-4">
            Design & Event Services
          </p>
          <h3 className="font-serif mb-8">
            We take the stress out of your event
          </h3>
          <p className="mb-8">
            Book your FREE Consultation
          </p>
          <a
            href="https://squareup.com/appointments/book/wbp736q14ceh80/LHXAXTXBFAJXM/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 text-sm font-medium uppercase tracking-[1px] text-white hover:opacity-80 transition-opacity"
            style={{ backgroundColor: "rgb(136, 151, 167)" }}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Corporate & Nonprofit Events — full-bleed text section */}
      <section className="py-16 md:py-20 px-[3vw]">
        <div className="max-w-[2000px] mx-auto">
          <h3 className="font-serif mb-4">
            Corporate & Nonprofit Events
          </h3>
          <p className="mb-8">
            Design & Coordination | Training | Retreats | Fundraisers
          </p>
          <Link href="/corporate-nonprofit" className="btn-primary">
            See Packages
          </Link>
        </div>
      </section>

      {/* Full-width image — wine/dining */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/images/wine-dining.jpg"
          alt="Corporate & Nonprofit Events"
          fill
          className="object-cover"
        />
      </section>

      {/* Casa Vino | Dining Experience — full-bleed text section */}
      <section className="py-16 md:py-20 px-[3vw]">
        <div className="max-w-[2000px] mx-auto">
          <h3 className="font-serif mb-4">
            Casa Vino | Dining Experience
          </h3>
          <p className="mb-8">
            Food & Wine | Private Tasting | Catering
          </p>
          <Link href="/wine-pairing" className="btn-primary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Full-width image — interior design */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/images/interior-design.jpg"
          alt="Interior Design"
          fill
          className="object-cover"
        />
      </section>

      {/* A Casa | Interior Design & Staging — full-bleed text section */}
      <section className="py-16 md:py-20 px-[3vw]">
        <div className="max-w-[2000px] mx-auto">
          <h3 className="font-serif mb-4">
            A Casa | Interior Design & Staging
          </h3>
          <p className="mb-8">
            Interior Design | Home Staging | Open House & Real Estate Services
          </p>
          <Link href="/design-staging" className="btn-primary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Full-width image — architecture */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/images/architecture.jpg"
          alt="Design & Staging"
          fill
          className="object-cover"
        />
      </section>
    </>
  );
}
