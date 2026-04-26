import Image from "next/image";

const values = [
  {
    icon: "✦",
    title: "Chef Steve & New Life Culinary",
    description:
      "Our in-house culinary team, New Life Culinary Creations, is led by the talented Chef Steve — crafting every dish from scratch with fresh, seasonal ingredients.",
  },
  {
    icon: "✦",
    title: "All-Inclusive Experience",
    description:
      "From catering and DJ to floral arrangements and linens — we handle every detail so you can be fully present and enjoy your event.",
  },
  {
    icon: "✦",
    title: "Intimate Yet Spacious",
    description:
      "Our beautifully modern 2,500 sq ft venue features perfect acoustics, warm décor, and flexible layouts to suit any event style from 10 to 200 guests.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Chef Steve preparing food"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#1a1a1a] shadow-2xl hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80"
                alt="Elegant table setting"
                fill
                className="object-cover"
              />
            </div>
            {/* Rating badge */}
            <div className="absolute -top-4 -left-4 w-28 h-28 rounded-xl bg-[#c9a84c] flex flex-col items-center justify-center shadow-xl">
              <span className="text-[#1a1a1a] text-2xl font-bold leading-none">4.8</span>
              <span className="text-[#1a1a1a]/70 text-xs font-medium mt-1">★★★★★</span>
              <span className="text-[#1a1a1a]/60 text-xs mt-0.5">Rating</span>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Passion on Every{" "}
              <span className="text-[#c9a84c]">Plate</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              The Corporate Room is Murrieta&apos;s premier all-inclusive event
              venue and catering service. Our newly remodeled 2,500 sq ft space
              was designed with one goal in mind: to make your event extraordinary.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              Conveniently located near the freeway with ample parking, our venue
              offers a warm, charming atmosphere with beautiful cozy design and
              perfect acoustics. Our dedicated team — including event coordinators
              Candice, Andrew, Roel, Kataya, and Jesse — are with you every step
              of the way.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {values.map((val) => (
                <div key={val.title} className="flex gap-4">
                  <span className="text-[#c9a84c] text-lg mt-0.5 flex-shrink-0">
                    {val.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{val.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#1a1a1a] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#e8c97a] transition-colors duration-200"
            >
              Plan Your Event
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
