"use client";

import { useState } from "react";

const menuCategories = [
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Lemon Thyme Chicken",
        description:
          "Tender roasted chicken infused with fresh lemon and thyme — our signature dish, praised by guests at every event.",
        price: "Included",
        tag: "Signature",
      },
      {
        name: "Mashed Potatoes",
        description:
          "Creamy, buttery mashed potatoes made from scratch — a crowd-pleasing classic that pairs perfectly with every entrée.",
        price: "Included",
        tag: null,
      },
      {
        name: "Honey Butter Roasted Carrots",
        description:
          "Seasonal carrots slow-roasted with honey and butter until perfectly caramelized and tender.",
        price: "Included",
        tag: "Fan Favorite",
      },
      {
        name: "Caesar Salad",
        description:
          "Crisp romaine, house-made Caesar dressing, shaved parmesan, and house-baked croutons.",
        price: "Included",
        tag: null,
      },
    ],
  },
  {
    id: "starters",
    label: "Appetizers",
    items: [
      {
        name: "Appetizer Selection (3 Choices)",
        description:
          "All packages include three appetizers of your choice, passed by our staff during cocktail hour.",
        price: "Included",
        tag: "All Packages",
      },
      {
        name: "Charcuterie Display",
        description:
          "Curated selection of artisan meats, aged cheeses, seasonal fruits, and house-made accompaniments.",
        price: "Add-on",
        tag: null,
      },
      {
        name: "Bruschetta",
        description:
          "Toasted artisan bread topped with fresh heirloom tomatoes, basil, and a balsamic glaze.",
        price: "Add-on",
        tag: null,
      },
      {
        name: "Stuffed Mushrooms",
        description:
          "Savory mushroom caps filled with herbed cream cheese and roasted garlic.",
        price: "Add-on",
        tag: null,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Tiered Celebration Cake",
        description:
          "Included with select packages — a custom tiered cake designed to complement your event's theme.",
        price: "Select Packages",
        tag: "Included",
      },
      {
        name: "Dessert Table",
        description:
          "An elegant display of sweet bites, petit fours, and seasonal confections.",
        price: "Add-on",
        tag: null,
      },
      {
        name: "Seasonal Cobbler",
        description:
          "Warm fruit cobbler served with fresh whipped cream — comfort dessert done right.",
        price: "Add-on",
        tag: null,
      },
      {
        name: "Custom Desserts",
        description:
          "Work with our team to design a fully custom dessert spread for your event.",
        price: "Custom Quote",
        tag: null,
      },
    ],
  },
  {
    id: "drinks",
    label: "Bar & Drinks",
    items: [
      {
        name: "Full Bar Service",
        description:
          "Our venue features a full bar and lounge — beer, wine, spirits, and specialty cocktails available.",
        price: "Available",
        tag: "Full Bar",
      },
      {
        name: "Champagne Toast",
        description:
          "Stemmed champagne flutes included in all packages for a celebratory toast.",
        price: "Included",
        tag: null,
      },
      {
        name: "Signature Cocktails",
        description:
          "Work with our bar team to create custom signature cocktails for your event.",
        price: "Custom",
        tag: null,
      },
      {
        name: "Non-Alcoholic Selection",
        description:
          "Artisan sparkling waters, freshly pressed juices, lemonades, and specialty mocktails.",
        price: "Available",
        tag: null,
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  Signature: "bg-[#c9a84c]/15 text-[#c9a84c]",
  "Fan Favorite": "bg-[#c9a84c]/15 text-[#c9a84c]",
  "All Packages": "bg-emerald-500/15 text-emerald-500",
  Included: "bg-emerald-500/15 text-emerald-500",
  "Full Bar": "bg-blue-500/15 text-blue-400",
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("mains");
  const current = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-3">
            Culinary Offerings
          </p>
          <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Chef Steve&apos;s Signature Menu
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every dish is made from scratch using fresh ingredients by our in-house
            culinary team, New Life Culinary Creations.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#c9a84c] text-[#1a1a1a] shadow-lg shadow-[#c9a84c]/30"
                  : "bg-white text-[#1a1a1a]/60 hover:text-[#1a1a1a] border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 border border-[#1a1a1a]/5 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-[#1a1a1a] font-semibold text-lg group-hover:text-[#c9a84c] transition-colors">
                    {item.name}
                  </h4>
                  {item.tag && (
                    <span
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${tagColors[item.tag] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <span className="text-[#c9a84c] font-bold text-sm whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-[#1a1a1a]/55 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 w-8 h-px bg-[#c9a84c]/40 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-[#1a1a1a]/50 mb-4 text-sm">
            All menus include custom dietary and allergen accommodations
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#c9a84c] text-[#c9a84c] font-bold text-sm tracking-widest uppercase rounded-full hover:bg-[#c9a84c] hover:text-[#1a1a1a] transition-all duration-200"
          >
            Request Custom Menu
          </a>
        </div>
      </div>
    </section>
  );
}
