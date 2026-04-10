import { createClient } from '@supabase/supabase-js';
import { ArrowUpRight, BarChart3, Target, Zap } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Home() {
  const { data: projects } = await supabase.from('projects').select('*');

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black px-6 md:px-20 font-sans selection:bg-blue-100 uppercase tracking-tight">
      {/* Navigation */}
      <nav className="py-12 flex justify-between items-center border-b border-neutral-100">
        <span className="text-xl font-black tracking-tighter">Debasis Chowdhury <span className="text-blue-600">.</span></span>
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-neutral-400">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="mailto:debasischowdhury@icloud.com" className="hover:text-black transition-colors underline underline-offset-4 decoration-blue-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-blue-600">Revenue & Growth Manager</span>
        </div>
        <h1 className="text-7xl md:text-[130px] font-bold tracking-tighter leading-[0.8] mb-12">
          REVENUE <br /> ANALYTICS<span className="text-neutral-200">.</span>
        </h1>
        <p className="text-2xl md:text-4xl text-neutral-500 max-w-4xl leading-tight font-medium lowercase">
          Master of Analytics student at <span className="text-black uppercase">AUT</span>. 11+ years experience driving digital transformation and growth strategy.
        </p>
      </section>

      {/* Skills / Metrics Row */}
      <section className="grid md:grid-cols-3 gap-12 py-20 border-y border-neutral-100">
        <div className="space-y-4">
          <BarChart3 className="text-blue-600" size={32} />
          <h3 className="font-bold text-sm tracking-widest">Data Strategy</h3>
          <p className="text-xs text-neutral-500 leading-relaxed lowercase font-normal">Transforming lifecycle data into actionable revenue models.</p>
        </div>
        <div className="space-y-4">
          <Target className="text-blue-600" size={32} />
          <h3 className="font-bold text-sm tracking-widest">Growth Ops</h3>
          <p className="text-xs text-neutral-500 leading-relaxed lowercase font-normal">Optimizing ARPU and retention across digital sectors.</p>
        </div>
        <div className="space-y-4">
          <Zap className="text-blue-600" size={32} />
          <h3 className="font-bold text-sm tracking-widest">Automation</h3>
          <p className="text-xs text-neutral-500 leading-relaxed lowercase font-normal">60% reduction in service turnaround through CX automation.</p>
        </div>
      </section>

      {/* Projects from Supabase */}
      <section id="work" className="py-20">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400">Selected Case Studies</h2>
        </div>
        
        <div className="space-y-0">
          {projects?.map((project) => (
            <div key={project.id} className="group border-b border-neutral-200 py-16 grid md:grid-cols-12 gap-8 hover:bg-neutral-50 transition-all px-4">
              <div className="md:col-span-5">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 mb-4 block underline decoration-2 underline-offset-4">{project.category}</span>
                <h3 className="text-5xl font-bold tracking-tighter">{project.title}</h3>
              </div>
              <div className="md:col-span-7 flex flex-col justify-between">
                <p className="text-xl text-neutral-600 mb-8 leading-tight lowercase font-medium">{project.problem}</p>
                <div className="flex justify-between items-center">
                   <div className="flex flex-col">
                     <span className="text-3xl font-black italic tracking-tighter text-blue-600">{project.metrics}</span>
                     <span className="text-[8px] font-bold text-neutral-300 tracking-[0.2em]">Validated Impact</span>
                   </div>
                   <div className="bg-black p-4 rounded-full text-white group-hover:bg-blue-600 transition-colors">
                    <ArrowUpRight size={24} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-widest text-neutral-400 border-t border-neutral-100">
        <span>© 2024 DEBASIS CHOWDHURY — AUCKLAND, New Zealand</span>
        <div className="flex gap-12">
          <a href="https://linkedin.com/in/debasischowdhury" className="hover:text-black transition-colors border-b border-transparent hover:border-black">LinkedIn</a>
          <a href="mailto:debasischowdhury@icloud.com" className="hover:text-black transition-colors border-b border-transparent hover:border-black">Email</a>
        </div>
      </footer>
    </div>
  );
}
