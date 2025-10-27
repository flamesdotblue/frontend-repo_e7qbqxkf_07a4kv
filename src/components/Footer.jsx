import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Let’s build something meaningful</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-prose">
              I collaborate with teams on AI products, learning platforms, and research‑backed experiences. Open to advisory and hands‑on roles.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-white hover:bg-indigo-500 transition"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-white/20 px-4 py-2.5 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/10 transition"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-white/20 px-4 py-2.5 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/10 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} • Crafted with care.
        </div>
      </div>
    </footer>
  );
}
