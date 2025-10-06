export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 mb-8">
            <span className="text-sm font-medium text-gray-700">OpenAI Sora 2 Video Tool</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-gray-900">
            Remove Sora Watermarks
            <span className="block mt-2">
              Instantly & Free
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            Clean, professional videos from OpenAI Sora 2 without watermarks.
            Upload your AI-generated video and get watermark-free results in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-medium text-base px-6 py-3 rounded-md transition-colors">
              Remove Watermark Now
            </button>

            <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-medium text-base px-6 py-3 rounded-md transition-colors">
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-gray-200">
            {[
              { label: 'Instant Processing', value: '<30 sec' },
              { label: 'Video Quality', value: '100%' },
              { label: 'Videos Processed', value: '10K+' },
              { label: 'User Rating', value: '4.9/5' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
