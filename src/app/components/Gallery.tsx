import Image from "next/image";

const photos = [
  {
    src: "/images/photo1.JPG",
    alt: "Event photo 1",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/photo2.JPG",
    alt: "Event photo 2",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photo3.JPG",
    alt: "Event photo 3",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/photo4.JPG",
    alt: "Event photo 4",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-sm font-medium tracking-[0.4em] uppercase mb-3">
            Visual Stories
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From Our Events
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse into the artistry and atmosphere we create for our clients.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
