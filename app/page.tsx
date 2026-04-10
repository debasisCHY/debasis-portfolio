import { createClient } from '@supabase/supabase-js';
import { ArrowUpRight, BarChart3, Target, Zap, Mail, Linkedin, FileText, Quote, ChevronRight } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export default async function Home() {
  let projects = [];
  let posts = [];
  let testimonials = [];

  if (supabase) {
    const { data: pData } = await supabase.from('projects').select('*').order('id', { ascending: true });
    const { data: bData } = await supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(3);
    const { data: tData } = await supabase.from('testimonials').select('*');
    projects = pData || [];
    posts = bData || [];
    testimonials = tData || [];
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black px-6 md:px-20 font-sans selection:bg-blue-100 uppercase tracking-tight overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-20 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <span className="text-lg font-black tracking-tighter">Debasis Chowdhury <span className="text-blue-600">.</span></span>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          <a href="#work" className="hover:text-black transition-all">Experience</a>
          <a href="#blog" className="hover:text-black transition-all">Insights</a>
          <a href="#contact" className="hover:text-black transition-all border-b border-blue-500 pb-1">Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-[1px] w-12 bg-blue-600"></span>
          <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">Revenue & Growth Strategist</span>
        </div>
        <h1 className="text-6xl md:text-[130px] font-bold tracking-tighter leading-[0.85] mb-12">
          DRIVING DIGITAL <br /> REVENUE<span className="text-neutral-200">.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 border-t border-neutral-100 pt-12">
          <p className="text-2xl md:text-3xl text-neutral-500 leading-tight font-medium lowercase">
            11+ years leading <span className="text-black uppercase">Lifecycle Management</span>. Currently mastering analytics at <span className="text-black uppercase font-bold text-blue-600 underline decoration-1 underline-offset-8">AUT</span>.
          </p>
          <div className="flex flex-col justify-between items-start md:items-end gap-6">
             <div className="text-right">
                <span className="block text-4xl font-black italic text-blue-600 tracking-tighter">+24% REV UPLIFT</span>
                <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">Career Impact</span>
             </div>
             <a href="/cv-debasis.pdf" target="_blank" className="flex items-center gap-3 bg-black text-white px-8 py-4 text-[10px] font-bold tracking-widest hover:bg-blue-600 transition-all group">
                DOWNLOAD CV <FileText size={14} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-24 border-t border-black">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 mb-16 uppercase">Selected Milestones</h2>
        <div className="space-y-0">
          {projects.map((p: any) => (
            <div key={p.id} className="group border-b border-neutral-100 py-20 grid md:grid-cols-12 gap-8 hover:bg-neutral-50/50 transition-all px-4 -mx-4">
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
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-neutral-50 -mx-6 md:-mx-20 px-6 md:px-20 border-y border-neutral-100">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 mb-16 uppercase text-center">Industry Praise</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t: any) => (
            <div key={t.id} className="bg-white p-12 border border-neutral-100 relative shadow-sm">
              <Quote size={40} className="text-blue-100 absolute top-8 left-8 -z-0" />
              <p className="text-lg text-neutral-700 italic leading-relaxed relative z-10 mb-8 lowercase font-medium">"{t.quote}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">{t.name.charAt(0)}</div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-neutral-400 uppercase font-bold">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase">Growth Insights</h2>
          <a href="/blog" className="text-[10px] font-bold text-blue-600 flex items-center gap-1 hover:underline underline-offset-4">READ ALL <ChevronRight size={14} /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post.id} className="group border border-neutral-100 p-8 hover:border-black transition-all cursor-pointer bg-white">
              <div className="aspect-video bg-neutral-100 mb-6 flex items-center justify-center overflow-hidden">
                <BarChart3 size={40} className="text-neutral-200 group-hover:scale-110 group-hover:text-blue-200 transition-all duration-700" />
              </div>
              <span className="text-[9px] font-bold text-blue-600 tracking-widest uppercase block mb-2">{post.category || 'Strategy'}</span>
              <h4 className="text-2xl font-bold tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors uppercase">{post.title}</h4>
              <p className="text-sm text-neutral-400 lowercase leading-relaxed mb-6">{post.excerpt}</p>
              <span className="text-[9px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">Read Insight →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-32 px-6 -mx-6 md:-mx-20 md:px-20">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 uppercase leading-[0.85]">
            LET'S DRIVE <br /> <span className="text-blue-600">NEXT-GEN</span> GROWTH.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-neutral-900">
            <div className="space-y-8">
              <p className="text-neutral-400 lowercase font-medium text-xl leading-relaxed">
                Currently based in Auckland, NZ. Open to strategic roles in revenue management and marketing analytics.
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@debasischowdhury.com" className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                  <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all"><Mail size={16} /></div>
                  hello@debasischowdhury.com
                </a>
                <a href="https://linkedin.com/in/debasischowdhury" target="_blank" className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                  <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all"><Linkedin size={16} /></div>
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="bg-neutral-900 p-10 flex flex-col justify-center items-center text-center">
                <span className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Available for hire</span>
                <p className="text-lg text-neutral-300 lowercase italic">strategic revenue lead | marketing analyst | growth ops</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-widest text-neutral-400 border-t border-neutral-100">
        <span>© 2024 DEBASIS CHOWDHURY — MASTER OF ANALYTICS AT AUT</span>
        <div className="flex gap-8 uppercase">
           <a href="#" className="hover:text-black transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}