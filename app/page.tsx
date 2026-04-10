import { createClient } from '@supabase/supabase-js';
import { ArrowUpRight, BarChart3, Target, Zap, Mail } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export default async function Home() {
  let projects: any[] = [];
  
  if (supabase) {
    try {
      const { data } = await supabase.from('projects').select('*').order('id', { ascending: true });
      projects = data || [];
    } catch (e) {
      console.error("Fetch skipped");
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black px-6 md:px-20 font-sans selection:bg-blue-100 uppercase tracking-tight">
      <nav className="py-10 flex justify-between items-center border-b border-neutral-100">
        <span className="text-lg font-black tracking-tighter uppercase">Debasis Chowdhury <span className="text-blue-600">.</span></span>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          <a href="#work" className="hover:text-black">Experience</a>
          <a href="mailto:debasischowdhury@icloud.com" className="hover:text-black underline underline-offset-4 decoration-blue-500">Connect</a>
        </div>
      </nav>

      <section className="py-32">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">Revenue & Growth Strategist</span>
        </div>
        <h1 className="text-6xl md:text-[110px] font-bold tracking-tighter leading-[0.85] mb-12">
          DRIVING DIGITAL <br /> REVENUE<span className="text-neutral-200">.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 border-t border-neutral-100 pt-12">
          <p className="text-2xl md:text-3xl text-neutral-500 leading-tight font-medium lowercase">
            11+ years experience in <span className="text-black uppercase">Customer Lifecycle Management</span>. Currently bridging strategy with analytics at <span className="text-black uppercase font-bold">AUT</span>.
          </p>
          <div className="flex flex-col justify-end items-start md:items-end gap-2">
            <span className="text-4xl font-black italic text-blue-600 tracking-tighter">+24% REV UPLIFT</span>
            <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase text-right">Validated Impact</span>
          </div>
        </div>
      </section>

      <section id="work" className="py-32">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 mb-16 uppercase">Selected Milestones</h2>
        <div className="space-y-0">
          {projects.length > 0 ? (
            projects.map((p) => (
              <div key={p.id} className="group border-b border-neutral-200 py-20 grid md:grid-cols-12 gap-8 hover:bg-neutral-50 transition-all px-4">
                <div className="md:col-span-5">
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 mb-4 block underline decoration-2 underline-offset-4 uppercase">{p.category}</span>
                  <h3 className="text-5xl font-bold tracking-tighter uppercase">{p.title}</h3>
                </div>
                <div className="md:col-span-7 flex flex-col justify-between">
                  <p className="text-xl text-neutral-600 mb-8 leading-tight lowercase font-medium">{p.problem}</p>
                  <div className="flex justify-between items-center">
                     <span className="text-3xl font-black italic tracking-tighter text-blue-600 uppercase">{p.metrics}</span>
                     <div className="bg-black p-4 text-white group-hover:bg-blue-600 transition-colors">
                      <ArrowUpRight size={24} />
                     </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-neutral-300 italic">Connecting to database...</div>
          )}
        </div>
      </section>

      <section className="bg-black text-white py-32 px-6 -mx-6 md:-mx-20 md:px-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">Let's Drive Growth.</h2>
          <div className="flex gap-12">
            <a href="mailto:debasischowdhury@icloud.com" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-400">
              <Mail size={16} /> Email
            </a>
            <a href="https://linkedin.com/in/debasischowdhury" target="_blank" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}