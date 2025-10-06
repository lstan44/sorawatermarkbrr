export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-semibold">Sora Watermark Remover Brrr</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              The fastest and easiest way to remove watermarks from OpenAI Sora 2 AI-generated videos.
              Professional quality, instant results, completely free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sora Watermark Remover</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Batch Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>2025 Sora Watermark Remover Brrr. All rights reserved.</p>
            <p className="text-gray-500">
              Not affiliated with OpenAI. Sora is a trademark of OpenAI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
