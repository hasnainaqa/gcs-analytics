export default function WallOfLove() {
  return (
    <section className="bg-[#ECFBF4]">
      {' '}
      {/* Background color for the section */}
      <div className="py-20">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-[#0F6466] font-semibold">
              {' '}
              {/* Heading color */}
              Loved by the Community
            </h2>
            <p className="mt-6 text-[#2C3532]">
              {' '}
              {/* Description color */}
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/** Repeat testimonial items with the adjusted colors **/}
            {['Jonathan Yombo', 'Yucel Faruksahan', 'Shekinah Tshiokufila'].map((name, index) => (
              <div key={index} className="ring-1 ring-[#0F6466] shadow-2xl p-8 rounded-xl border bg-white group hover:bg-[#CDE5DF]">
                {' '}
                {/* Hover color */}
                <div className="flex gap-3">
                  <span className="relative block rounded-xl text-lg size-10">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      alt={name}
                      src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} // Sample image
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-[#0F6466]">{name}</h3> {/* Name color */}
                    <span className="block text-sm tracking-wide text-[#2C3532]">Software Engineer</span>
                    <blockquote className="mt-3">
                      <p className="text-[#2C3532]">
                        Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
