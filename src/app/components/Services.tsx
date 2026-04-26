import Image from "next/image";

const services = [
  {
    title: "Corporate Events",
    description:
      "From boardroom meetings to company-wide celebrations, we provide seamless catering and event planning that reflects your organization's standards.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    features: ["Boardroom Lunches", "Team Celebrations", "Company Meetings"],
  },
  {
    title: "Weddings",
    description:
      "Make your special day unforgettable with custom menus by Chef Steve, elegant floral arrangements, DJ, and flawless white-glove service.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    features: ["Custom Menus", "DJ & Music", "Floral Arrangements"],
  },
  {
    title: "Quinceañeras",
    description:
      "Celebrate this once-in-a-lifetime milestone in style. We honor tradition while creating an unforgettable fiesta with vibrant décor and exceptional catering.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    features: ["Traditional & Fusion Menus", "Tiered Cakes", "DJ & Dancing"],
  },
  {
    title: "Private Parties",
    description:
      "Birthdays, anniversaries, and milestone celebrations — we tailor every detail to match your vision inside our beautifully designed, intimate venue.",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&q=80",
    features: ["Themed Events", "Cocktail Receptions", "Buffet Service"],
  },
  {
    title: "Athletic & Academic Banquets",
    description:
      "Honor your team's achievements with a professional banquet experience. We make every student-athlete and scholar feel celebrated and recognized.",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    features: ["Team Dinners", "Award Ceremonies", "Custom Menus"],
  },
  {
    title: "Gala Dinners",
    description:
      "Award ceremonies and charity galas deserve a world-class culinary experience. Our team delivers impeccable plated service and formal event management.",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
    features: ["Formal Plated Service", "Full Bar", "Onsite Concierge"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Catering for Every Occasion
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s 10 guests or 200, we bring the same passion,
            quality, and professionalism to every event.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1a1a1a]/5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-white text-xl font-bold">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#1a1a1a]/70 leading-relaxed mb-5 text-sm">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="px-3 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-medium tracking-wider uppercase rounded-full"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-200"
                >
                  Enquire Now
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
