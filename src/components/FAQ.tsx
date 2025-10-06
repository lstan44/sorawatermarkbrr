import { useState } from 'react';

const faqs = [
  {
    question: 'How do I remove watermarks from OpenAI Sora 2 videos?',
    answer: 'Simply upload your Sora-generated video to our tool, and our AI will automatically detect and remove the watermark while preserving the original quality. The entire process takes less than 30 seconds.'
  },
  {
    question: 'Is it really free to remove Sora watermarks?',
    answer: 'Yes! Our basic watermark removal service is completely free. You can remove watermarks from unlimited Sora 2 videos without any cost or subscription.'
  },
  {
    question: 'Will removing the watermark affect video quality?',
    answer: 'No. Our advanced AI technology removes the Sora watermark while maintaining 100% of the original video quality, including resolution, frame rate, and color accuracy.'
  },
  {
    question: 'What video formats does the Sora watermark remover support?',
    answer: 'We support all common video formats that OpenAI Sora 2 generates, including MP4, MOV, WebM, and more. Our tool automatically handles format detection and conversion.'
  },
  {
    question: 'How long does it take to remove a Sora watermark?',
    answer: 'Most Sora videos are processed in under 30 seconds. The exact time depends on video length and size, but our optimized AI ensures the fastest possible processing.'
  },
  {
    question: 'Is my Sora video kept private and secure?',
    answer: 'Absolutely. We take privacy seriously. Your videos are processed securely and automatically deleted from our servers immediately after watermark removal. We never store or share your content.'
  },
  {
    question: 'Can I use this for commercial Sora videos?',
    answer: 'Yes, you can use our watermark remover for both personal and commercial Sora 2 videos. Make sure you comply with OpenAI\'s Sora usage terms for your specific use case.'
  },
  {
    question: 'Does it work with all Sora 2 watermark placements?',
    answer: 'Yes! Our AI is trained to detect and remove Sora watermarks regardless of their position, size, or opacity in the video. It works with all OpenAI Sora 2 watermark variations.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about removing Sora 2 watermarks
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-medium text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
