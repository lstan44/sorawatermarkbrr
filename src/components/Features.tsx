const features = [
  {
    title: 'Lightning Fast Processing',
    description: 'Remove Sora 2 watermarks in under 30 seconds. Our advanced AI technology processes your videos instantly without quality loss.'
  },
  {
    title: 'Privacy Protected',
    description: 'Your Sora videos are processed securely and deleted immediately after watermark removal. We never store or share your content.'
  },
  {
    title: 'Perfect Quality Retention',
    description: 'Keep 100% of your original Sora video quality. Our watermark removal preserves every detail, frame rate, and resolution.'
  },
  {
    title: 'Instant Download',
    description: 'Get your watermark-free Sora videos immediately. Download in original format with no compression or quality degradation.'
  },
  {
    title: 'Unlimited Processing',
    description: 'Remove watermarks from unlimited Sora 2 videos. No daily limits, no restrictions - process as many videos as you need.'
  },
  {
    title: 'Works with All Sora Videos',
    description: 'Compatible with all OpenAI Sora 2 generated videos. Any length, any style, any watermark placement - we handle it all.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Why Choose Our Sora Watermark Remover?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most powerful and easiest way to remove watermarks from OpenAI Sora 2 AI-generated videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            return (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
