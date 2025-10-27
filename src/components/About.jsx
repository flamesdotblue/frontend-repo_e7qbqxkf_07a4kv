import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-indigo-500/0 to-indigo-500/5 dark:to-indigo-400/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Two hats, one mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As an AI Engineer, I ship reliable, safe, and efficient ML systems — from data pipelines to inference.
              As an Ed‑Tech founder, I build tools that make learning active, personal, and joyful.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card icon={<Cpu size={18} />} title="AI Engineering">
                LLM tooling, RAG, agents, evals, MLOps, prompt systems, latency & cost optimizations.
              </Card>
              <Card icon={<GraduationCap size={18} />} title="Ed‑Tech">
                Interactive content, mastery learning, analytics, creator workflows, classroom UX.
              </Card>
              <Card icon={<Briefcase size={18} />} title="Product">
                Rapid prototyping, user interviews, design systems, roadmapping, GTM experiments.
              </Card>
              <Card icon={<Sparkles size={18} />} title="Impact">
                Measurable learning outcomes and durable capabilities — not vanity metrics.
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/70 dark:bg-white/5 backdrop-blur rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Selected Work</h3>
            <ul className="mt-4 space-y-4">
              <Project
                title="AI Tutor with adaptive feedback"
                desc="LLM agent that scaffolds hints, Socratic prompts, and code checks with eval-driven improvements."
                tags={["LLM", "RAG", "Evals", "Next.js"]}
              />
              <Project
                title="Curriculum Studio"
                desc="Authoring suite for interactive lessons, spaced practice, and mastery dashboards."
                tags={["Ed‑Tech", "Analytics", "React", "Supabase"]}
              />
              <Project
                title="Knowledge Search"
                desc="Domain‑tuned semantic search with hybrid retrieval and feedback‑aware re‑ranking."
                tags={["Vector", "Hybrid", "Python", "FastAPI"]}
              />
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">
                See more and collaboration notes →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4">
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-medium">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-400/10">
          {icon}
        </span>
        {title}
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

function Project({ title, desc, tags }) {
  return (
    <li className="group rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-gray-50/60 dark:hover:bg-white/10 transition">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h4 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h4>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-indigo-600/10 text-indigo-700 dark:text-indigo-300">{t}</span>
          ))}
        </div>
      </div>
      <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
    </li>
  );
}
