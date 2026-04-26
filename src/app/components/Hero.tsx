import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="Elegant catering spread"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#1a1a1a]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-6">
            Murrieta, California
          </p>

          <h1 className="animate-fade-in-up animate-delay-200 text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Where Every{" "}
            <span className="text-[#c9a84c]">Event</span>{" "}
            Becomes a Memory
          </h1>

          <p className="animate-fade-in-up animate-delay-400 text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            The Corporate Room is a beautifully modern, 2,500 sq ft venue
            in Murrieta, CA — offering all-inclusive catering, DJ, floral,
            and event planning for every occasion.
          </p>

          <div className="animate-fade-in-up animate-delay-600 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#c9a84c] text-[#1a1a1a] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/30"
            >
              Book Your Event
            </a>
            <a
              href="#packages"
              className="px-8 py-4 border border-white/40 text-white font-medium text-sm tracking-widest uppercase rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      {/* Stat bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
          {[
            { value: "2,500", label: "Sq Ft Venue" },
            { value: "200+", label: "Guest Capacity" },
            { value: "4.8★", label: "Average Rating" },
            { value: "100%", label: "All-Inclusive" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4 first:pl-0">
              <p className="text-[#c9a84c] text-2xl font-bold">{stat.value}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
