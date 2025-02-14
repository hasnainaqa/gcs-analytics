export default function Stats() {
  const stats = [
    { value: '10X', label: 'Faster SEO Analytics' },
    { value: '200%', label: 'Boost Your SEO & Rankings' },
  ];

  return (
    <section id="stats-section" className="py-20 bg-[#ECFBF4] relative">
      {' '}
      {/* Background color */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F6466] mb-4">
            {' '}
            {/* Text color */}
            Get Analytics in Record Time
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#0F6466]">
          Track rankings and traffic trends instantly.
          Optimize content, and engage high-intent audiences—leveraging AI-powered Keywords for rapid, actionable decisions.
          Dominate search results and accelerate growth with precision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#D9EDE8] p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out" // Background color for stats
            >
              <p className="text-5xl font-bold mb-2 bg-clip-text text-transparent text-white bg-gradient-to-r from-purple-100 to-white">
                {stat.value}
              </p>
              <p className="text-lg text-[#2C3532]">{stat.label}</p> {/* Change text color */}
            </div>
          ))}
        </div>
        <div className="text-center flex justify-center mt-12">
          <button className="bg-[#0F6466] text-white flex items-center text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:bg-[#CDE5DF] hover:scale-105">
            {' '}
            {/* Button background and hover color */}
            Start Optimizing
          </button>
        </div>
      </div>
    </section>
  );
}
