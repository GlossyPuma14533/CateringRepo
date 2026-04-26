const testimonials = [
  {
    name: "Sue C.",
    role: "Yelp Review",
    quote:
      "There are not enough stars! We had my son's wedding and reception at The Corporate Room and it was amazing. The owner, Elkie, and her daughter, Sarah, were so helpful in planning and executing the event. We were so unorganized but they both helped organize our thoughts and visions and it was a great and most of all, a stress free night. I tell everyone who asks how great our experience and event was at The Corporate Room.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Kat M.",
    role: "Corona, CA · Yelp Review",
    quote:
      "My fiance and I recently held our engagement party at The Corporate Room and it was beautiful! From our first meeting with Sarah until the night of the event, the management and staff were so professional and accommodating. They had such a can-do attitude and were willing to help with whatever needed to be finished. Their service was first class!",
    rating: 5,
    initials: "KM",
  },
  {
    name: "Stacey D.",
    role: "Temecula, CA · Yelp Review",
    quote:
      "We hosted a large team meeting of 140 employees at the Corporate Room. Setting this meeting up was a breeze with Candice, from beginning to end she saw our vision and helped to make it become a reality. The Corporate Room offered our team at Chick-fil-A Temecula a great experience, clean environment and incredible hospitality. I would highly recommend The Corporate Room for any event large or small.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Jess T.",
    role: "Huntington Beach, CA · Yelp Review",
    quote:
      "A little gem in the Wildomar area. I hosted a baby shower with 90 people, and they were able to accommodate my needs flawlessly. Candice and Steve helped organize my event, and I can't thank them enough. Communication with the managers is key, and their communication was excellent. If you need a venue to host your event, I highly recommend the Corporate Room.",
    rating: 5,
    initials: "JT",
  },
  {
    name: "Jackie S.",
    role: "Vallet Center, CA · Yelp Review",
    quote:
      "5+ stars! If you're looking for a venue for your next event, The Corporate Room will not disappoint! Candice is amazing and so easy to work with. Chef Steve makes delicious food and the portion size is the biggest I've ever had at any event. We host 1 Banquet each year and this will certainly be our go to venue.",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Ethan S.",
    role: "Temecula, CA · Yelp Review",
    quote:
      "Seriously the corporate room is an amazing place to host an event!! We have been hosting the Neighbors monthly business mixer here for over a year and the corporate room has been amazing to work with!! Thank you for everything that you do.",
    rating: 5,
    initials: "ES",
  },
  {
    name: "Frances S.",
    role: "Yelp Review",
    quote:
      "We held our 25th wedding anniversary celebration at The Corporate Room and had a marvelous time. Candice was easy to work with and obliged our every wish. Steve presented us with a range of excellent food selections, and the final choices included not one, but two entrees per person. The all-inclusive package included the catered meal, the tiered cake, the DJ, the venue, three appetizers, beautiful floral arrangements, cloth table linens, and all day access to the facility. I would recommend The Corporate Room for any event, large or small.",
    rating: 5,
    initials: "FS",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-3">
            Client Love
          </p>
          <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating count={5} />
            <span className="text-[#1a1a1a] font-bold">4.7 / 5</span>
            <span className="text-[#1a1a1a]/50 text-sm">· 30 reviews</span>
          </div>
          <p className="text-[#1a1a1a]/60 text-lg max-w-xl mx-auto leading-relaxed">
            Trusted by hundreds of families, companies, and couples across Murrieta and the Inland Empire.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-[#1a1a1a]/5 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="text-[#c9a84c]/30 text-6xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              <p className="text-[#1a1a1a]/70 leading-relaxed mb-6 flex-1 text-sm">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a]/5">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1a1a1a] font-bold text-sm">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1a1a1a] font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-[#1a1a1a]/40 text-xs truncate">{t.role}</p>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
