export default function WikiSEO() {
  return (
    <section className="py-20 bg-[#ECFBF4]">
      {' '}
      {/* Background color */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0F6466]">
          {' '}
          {/* Heading color */}
          SEO Analytics <span className="text-[#000000]">Wiki</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Page Speed Insights',
              description:
                "A metric measuring how fast your page loads. Optimize loading speed to enhance user experience and boost SEO rankings.",
            },
            {
              title: 'Robots Meta Tag',
              description:
                "A HTML snippet guiding search bots on crawling and indexing. Use it to manage which pages appear in search results.",
            },
            {
              title: 'Google Index Status',
              description:
                "The collection of pages Google has indexed. Monitor indexed pages via Google Search Console to gauge your site’s visibility.",
            },
            {
              title: 'SEO Automation Tools',
              description:
                'Software that streamlines backlink building and performance tracking. Use ethically to avoid penalties.',
            },
            {
              title: 'Crawl Optimization',
              description:
                "The process of making your site easy for search bots to scan. Ensure a clean structure for efficient crawling.",
            },
            {
              title: 'No Index No Follow',
              description:
                "A meta tag that prevents indexing and link following. Ideal for pages you want to exclude from search results.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-[#CDE5DF]">
              {' '}
              {/* Hover color */}
              <h3 className="text-xl font-semibold text-[#0F6466] mb-2">{item.title}</h3> {/* Title color */}
              <p className="text-[#2C3532]">{item.description}</p> {/* Description color */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
