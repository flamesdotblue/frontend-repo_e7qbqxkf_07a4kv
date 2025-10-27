import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Cpu, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for contrast; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-black/70 dark:via-black/10 dark:to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Building intelligent products and empowering learners
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m an AI Engineer and Ed‑Tech founder crafting practical machine learning systems and delightful learning experiences.
            From LLM apps to classroom platforms — I blend research, product, and pedagogy.
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-white hover:bg-indigo-500 transition"
            >
              <Rocket size={18} />
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-white/20 px-4 py-2.5 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/10 transition"
            >
              <Cpu size={18} />
              My Approach
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2"><Cpu size={16} />LLM apps</div>
            <div className="flex items-center gap-2"><BookOpen size={16} />Learning platforms</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
