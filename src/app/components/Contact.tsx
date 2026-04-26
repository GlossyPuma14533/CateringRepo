"use client";

import { useState } from "react";

const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Quinceañera",
  "Private Party",
  "Birthday Celebration",
  "Athletic / Academic Banquet",
  "Gala Dinner",
  "Other",
];

const guestRanges = [
  "Under 30 guests",
  "30–72 guests",
  "72–120 guests",
  "120–200 guests",
  "200+ guests",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Let&apos;s Plan Your{" "}
              <span className="text-[#c9a84c]">Perfect Event</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Tell us about your vision and our team will put together a
              custom proposal tailored to your needs and budget.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "events@thecorporateroom.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "(951) 249-4343",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "34846 Monte Vista Dr, Murrieta, CA 92595",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-wider uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="mt-10 p-5 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-3">
                Venue Amenities
              </p>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-white/60">
                {[
                  "✓ 2,500 sq ft space",
                  "✓ Up to 200 guests",
                  "✓ Full bar & lounge",
                  "✓ Equipped kitchen",
                  "✓ Valet parking",
                  "✓ ADA accessible",
                  "✓ Free Wi-Fi",
                  "✓ Near I-15 freeway",
                ].map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#242424] rounded-3xl p-8 border border-white/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/50 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Enquiry Received!
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Thank you for reaching out to The Corporate Room. Our events team
                  will contact you within 24 hours at the number or email you provided.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#c9a84c] text-sm font-medium underline underline-offset-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white text-xl font-bold mb-6">
                  Event Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    placeholder="(951) 000-0000"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    >
                      <option value="" className="bg-[#242424]">Select type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#242424]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                      Guest Count *
                    </label>
                    <select
                      name="guests"
                      required
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    >
                      <option value="" className="bg-[#242424]">Select range</option>
                      {guestRanges.map((g) => (
                        <option key={g} value={g} className="bg-[#242424]">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                    placeholder="Share your vision, dietary needs, or any special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c9a84c] text-[#1a1a1a] font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-[#e8c97a] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
