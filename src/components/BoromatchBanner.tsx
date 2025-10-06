export default function BoromatchBanner() {
  return (
    <section className="bg-black text-white py-3 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm">
          <span className="text-gray-300">
            Our servers are experiencing high demand right now.
          </span>
          <span className="text-gray-500">—</span>
          <span className="text-gray-300">
            In the meantime, looking for an apartment in Brooklyn or NYC?
          </span>
          <a
            href="https://boromatch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-gray-200 transition-colors underline underline-offset-4"
          >
            Check out Boromatch.com
          </a>
        </div>
      </div>
    </section>
  );
}
