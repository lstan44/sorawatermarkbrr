const steps = [
  {
    number: '1',
    title: 'Upload Your Sora Video',
    description: 'Drag and drop your OpenAI Sora 2 generated video with watermark. Supports all video formats and sizes.'
  },
  {
    number: '2',
    title: 'Automatic Watermark Detection',
    description: 'Our AI instantly detects and removes the Sora watermark while preserving your video quality and details.'
  },
  {
    number: '3',
    title: 'Download Clean Video',
    description: 'Get your watermark-free Sora video in seconds. Download and use it anywhere without restrictions.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Remove Sora Watermarks in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            It's incredibly easy to get professional, watermark-free videos from your Sora 2 generations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200"></div>

          {steps.map((step) => {
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 w-24 h-24 bg-white border border-gray-300 rounded-lg flex items-center justify-center z-10">
                    <span className="text-4xl font-semibold text-gray-900">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-medium text-base px-6 py-3 rounded-md transition-colors">
            Start Removing Watermarks
          </button>
        </div>
      </div>
    </section>
  );
}
