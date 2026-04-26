const packages = [
  {
    name: "Celebrity",
    price: "$1,700",
    guests: "Up to 72 guests",
    highlight: false,
    description: "Perfect for intimate gatherings and smaller celebrations.",
    includes: [
      "Full catered meal by Chef Steve",
      "3 appetizers of your choice",
      "Cloth table linens",
      "Full place settings (plates, stainless cutlery)",
      "Stemmed water goblets & champagne flutes",
      "Charger plates",
      "6 hours of onsite concierge service",
      "All-day venue access",
    ],
  },
  {
    name: "Broadway",
    price: "$2,600",
    guests: "Up to 120 guests",
    highlight: true,
    description: "Our most popular package — ideal for weddings, quinceañeras, and milestones.",
    includes: [
      "Full catered meal by Chef Steve",
      "3 appetizers of your choice",
      "Tiered celebration cake",
      "DJ services",
      "Floral arrangements on all tables",
      "Cloth table linens",
      "Full place settings (plates, stainless cutlery)",
      "Stemmed water goblets & champagne flutes",
      "Charger plates",
      "6 hours of onsite concierge service",
      "All-day venue access",
    ],
  },
  {
    name: "Park Avenue",
    price: "$4,750",
    guests: "Up to 120 guests",
    highlight: false,
    description: "An elevated experience with premium add-ons for discerning hosts.",
    includes: [
      "Everything in Broadway, plus:",
      "Premium floral upgrades",
      "Enhanced décor package",
      "Valet parking service",
      "Full bar service",
      "Extended venue hours",
      "Dedicated event coordinator",
      "Custom lighting setup",
    ],
  },
  {
    name: "The Ritz",
    price: "$11,000",
    guests: "Up to 120 guests",
    highlight: false,
    description: "The ultimate all-inclusive luxury event experience — nothing left to chance.",
    includes: [
      "Everything in Park Avenue, plus:",
      "Premium multi-course plated dinner",
      "Top-tier floral & décor throughout",
      "Photo booth or entertainment add-on",
      "Luxury cake from premium bakery",
      "Exclusive venue buyout",
      "Full staffing & white-glove service",
      "Personalized event planning sessions",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-3">
            All-Inclusive
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Event Packages
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from four carefully curated packages — or let us build a
            custom quote around your vision and budget.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#c9a84c] text-[#1a1a1a] shadow-2xl shadow-[#c9a84c]/30 scale-105"
                  : "bg-white/5 border border-white/10 hover:border-[#c9a84c]/40 text-white"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1a1a1a] text-[#c9a84c] text-xs font-bold tracking-widest uppercase rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold tracking-widest uppercase mb-1 ${pkg.highlight ? "text-[#1a1a1a]" : "text-white"}`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-4xl font-bold mb-1 ${pkg.highlight ? "text-[#1a1a1a]" : "text-[#c9a84c]"}`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`text-xs font-medium mb-3 ${pkg.highlight ? "text-[#1a1a1a]/70" : "text-white/50"}`}
                >
                  {pkg.guests}
                </p>
                <p
                  className={`text-sm leading-relaxed ${pkg.highlight ? "text-[#1a1a1a]/80" : "text-white/60"}`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#1a1a1a]" : "text-[#c9a84c]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={pkg.highlight ? "text-[#1a1a1a]/80" : "text-white/60"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-[#1a1a1a] text-[#c9a84c] hover:bg-[#111]"
                    : "border border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#1a1a1a] hover:border-[#c9a84c]"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>

        {/* Outside catering note */}
        <p className="text-center text-white/30 text-sm mt-10">
          Outside catering available for a $300 venue fee. All packages subject to availability — contact us for custom quotes.
        </p>
      </div>
    </section>
  );
}
