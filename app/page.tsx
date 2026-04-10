import { createClient } from '@supabase/supabase-js';
import { ArrowUpRight, BarChart3, Target, Zap, Mail, Linkedin } from 'lucide-react';

// 1. SAFE INITIALIZATION
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// We only create the client if we have the keys, otherwise it stays null
const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export default async function Home() {
  // 2. SAFE DATA FETCHING
  let projects: any[] = [];
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });
      
      if (!error && data) {
        projects = data;
      }
    } catch (e) {
      console.error("Build-time data fetch skipped");
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black px-6 md:px-20 font-sans selection:bg-blue-100 uppercase tracking-tight">
      {/* Navigation */}
      <nav className="py-10 flex justify-between items-center border-b border-neutral-100">
        <span className="text-lg font-black tracking-tighter uppercase">Debasis Chowdhury <span className="text-blue-600">.</span></span>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          <a href="#work" className="hover:text-black transition-colors">Experience</a>
          <a href="mailto:debasischowdhury@icloud.com" className="hover:text-black transition-colors underline underline-offset-4 decoration-blue-500">Connect</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">Revenue & Growth Strategist</span>
        </div>
        <h1 className="text-6xl md:text-[110px] font-bold tracking-tighter leading-[0.85] mb-12">
          DRIVING DIGITAL <br /> REVENUE<span className="text-neutral-200">.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 border-t border-neutral-100 pt-12 text-sans">
          <p className="text-2xl md:text-3xl text-neutral-500 leading-tight font-medium lowercase">
            11+ years experience in <span className="text-black uppercase">Customer Lifecycle Management</span> & digital transformation. Currently bridging strategy with analytics at <span className="text-black uppercase font-bold">AUT</span>.
          </p>
          <div className="flex flex-col justify-end items-start md:items-end gap-2">
            <span className="text-4xl font-black italic text-blue-600 tracking-tighter">+24% REV UPLIFT</span>
            <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase text-right">Validated Impact</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="grid md:grid-cols-3 gap-12 py-24 border-y border-neutral-100 bg-neutral-50/50 px-6 -mx-6 md:-mx-20 md:px-20">
        <div className="space-y-4">
          <BarChart3 className="text-blue-600" size={32} />
          <h3 className="font-bold text-xs tracking-[0.2em] uppercase">Analytics</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed lowercase font-normal">Master of Analytics (AUT) — focusing on predictive modeling, SQL, and Power BI.</p>
        </div>
        <div className="space-y-4">
          <Target className="text-blue-600" size={32} />
          <h3 className="font-bold text-xs tracking-[0.2em] uppercase">Strategy</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed lowercase font-normal">Expertise in ARPU growth, LTV maximization, and GTM execution across DTH and Telecom.</p>
        </div>
        <div className="space-y-4">
          <Zap className="text-blue-600" size={32} />
          <h3 className="font-bold text-xs tracking-[0.2em] uppercase">Operations</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed lowercase font-normal">Six Sigma Black Belt — automating CX and reducing service turnaround by 60%.</p>
        </div>
      </section>

      {/* Experience List */}
      <section id="work" className="py-32">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 mb-16 uppercase">Selected Milestones</h2>
        <div className="space-y-0">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="group border-b border-neutral-200 py-20 grid md:grid-cols-12 gap-8 hover:bg-white transition-all">
                <div className="md:col-span-5">
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 mb-4 block underline decoration-2 underline-offset-4 uppercase">{project.category}</span>
                  <h3 className="text-5xl font-bold tracking-tighter uppercase">{project.title}</h3>
                </div>
                <div className="md:col-span-7 flex flex-col justify-between">
                  <p className="text-xl text-neutral-600 mb-8 leading-tight lowercase font-medium">{project.problem}</p>
                  <div className="flex justify-between items-center">
                     <div className="flex flex-col">
                       <span className="text-3xl font-black italic tracking-tighter text-blue-600 uppercase">{project.metrics}</span>
                     </div>
                     <div className="bg-black p-4 text-white group-hover:bg-blue-600 transition-colors">
                      <ArrowUpRight size={24} />
                     </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="py-20 text-neutral-300 italic lowercase text-sm">Waiting for database connection...</div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-32 px-6 -mx-6 md:-mx-20 md:px-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">LET'S DRIVE <br /> GROWTH<span className="text-blue-600">.</span></h2>
          <div className="flex gap-12">
            <a href="mailto:debasischowdhury@icloud.com" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">
              <Mail size={16} /> Email
            </a>
            <a href="https://linkedin.com/in/debasischowdhury" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}