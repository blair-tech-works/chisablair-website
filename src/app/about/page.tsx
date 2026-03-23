import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Chisa Blair",
  description: "Learn about Chisa Blair, MBA - Owner & Designer with 10+ years of Design, Coordination & Networking expertise.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Chisa Blair"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 px-[6%]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif mb-2">
              Chisa Blair, MBA
            </h1>
            <p className="mb-8 text-gray-600">
              Owner | Designer, WA
            </p>
            <p className="mb-6">
              With more than 10 years of Design, Coordination & Networking
              expertise, you can count on me to help you bring your vision to
              life. Seeing a collaborative idea come to fruition is my goal. I
              always get the job done above and beyond expectations.
            </p>
            <p className="italic">
              We are guaranteed to take the stress out of your design project or
              event. Allowing you to be fully present, and in the moment. No
              Stress. Just Enjoy. ~ Chisa B.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/chisa-portrait.jpg"
              alt="Chisa Blair"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
