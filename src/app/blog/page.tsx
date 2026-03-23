import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Chisa Blair",
  description: "Latest news and updates from Chisa Blair Design & Events.",
};

const blogPosts = [
  {
    slug: "casa-vino-unwind-and-savor",
    title: "Casa Vino: Unwind and Savor",
    date: "August 8, 2023",
    excerpt:
      "Unwind and Savor: Book your Casa Vino private dinner with Chisa Blair Design & Events.",
    image: "/images/blog-casa-vino.jpg",
  },
  {
    slug: "fair-weathered-events",
    title: "Fair Weathered Events",
    date: "July 7, 2023",
    excerpt: "8 tips for hosting a memorable outdoor event.",
    image: "/images/blog-outdoor.jpg",
  },
  {
    slug: "celebrating-love-1967",
    title: "Celebrating Love: 1967 Loving v. Virginia",
    date: "June 3, 2023",
    excerpt: "Celebrating Love in June.",
    image: "/images/blog-love.jpg",
  },
  {
    slug: "small-business-appreciation",
    title: "Small Business Appreciation",
    date: "May 7, 2023",
    excerpt:
      "May is 'National Small Business' month. At Chisa Blair Design & Events we pride ourselves on our ability to work closely with clients.",
    image: "/images/blog-small-biz.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="py-16 md:py-24 px-[6%]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-base font-light text-gray-500 mb-2">
                {post.date}
              </p>
              <h2 className="font-serif text-[28px] font-medium mb-3 leading-[1.33]">
                {post.title}
              </h2>
              <p className="text-lg font-light leading-7 text-gray-700 mb-4">
                {post.excerpt}
              </p>
              <span className="text-lg font-light text-black underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
