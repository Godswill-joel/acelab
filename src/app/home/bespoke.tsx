"use client";

interface BespokeServicesProps {
  videoUrl: string;
  title: string;
  description: string;
}

export default function BespokeServices({
  videoUrl,
  title,
  description,
}: BespokeServicesProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-xl border border-gray-200 shadow-md p-4 md:p-6 bg-[#f9fafb]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://youtu.be/WerYyfIM5Lw"
                title="Bespoke Services Video"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* 📝 Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold italic text-gray-800 mb-4">
                {title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}