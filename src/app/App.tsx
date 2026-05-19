import { useState } from "react";
import { ArrowRight, Brain, Building2, Calendar, CheckCircle, Code, Globe, Instagram, Linkedin, Mail, Menu, MessageSquare, Phone, Rocket, Shield, Sparkles, Star, TrendingUp, User, Workflow, X, Zap } from "lucide-react";

const menuItems = [
  ["Home", "#home"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Cases", "#cases"],
  ["Processo", "#processo"],
  ["Contato", "#contato"],
];

const services = [
  [Workflow, "Automação de Processos", "Automatize tarefas repetitivas e ganhe produtividade com fluxos inteligentes."],
  [Globe, "Desenvolvimento de Sites", "Sites modernos, responsivos e otimizados para conversão e performance."],
  [Code, "Softwares Personalizados", "Sistemas sob medida para as necessidades do seu negócio."],
  [Brain, "Inteligência Artificial", "Soluções com IA para análise de dados, predição e automação inteligente."],
  [Shield, "Integrações Seguras", "Conecte plataformas e sistemas de forma fluida, estável e protegida."],
  [Rocket, "Escala e Suporte", "Acompanhamento contínuo para evoluir sua operação com segurança."],
];

const stats = [
  [Zap, "+120", "Automações Criadas"],
  [CheckCircle, "+50", "Projetos Entregues"],
  [TrendingUp, "+30", "Empresas Atendidas"],
  [Star, "+95%", "Satisfação"],
];

const cases = [
  ["Automação de Vendas", "Sistema completo de automação comercial com integração CRM.", "+300%", "Produtividade"],
  ["Plataforma de Gestão", "Software personalizado para produção e estoque em tempo real.", "-70%", "Tempo Operacional"],
  ["Sistema de BI", "Dashboard inteligente para análise de dados e tomada de decisão.", "+250%", "ROI"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold text-white">Z3</a>
        <div className="hidden items-center gap-7 md:flex">
          {menuItems.map(([label, href]) => <a key={href} href={href} className="text-sm text-white/70 transition hover:text-white">{label}</a>)}
          <a href="#agendar" className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-white/90">Agendar Reunião</a>
        </div>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-white/10 px-6 pb-5 md:hidden">{menuItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-sm text-white/70">{label}</a>)}</div>}
    </nav>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle: string }) {
  return <div className="mx-auto mb-16 max-w-3xl text-center">{eyebrow && <p className="mb-3 text-sm uppercase tracking-wider text-white/40">{eyebrow}</p>}<h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2><p className="mt-4 text-lg text-white/60">{subtitle}</p></div>;
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 px-6 pt-24 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/60"><Sparkles size={18} /> Tecnologia de ponta</div>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">Transformamos processos<br /><span className="text-white/60">em tecnologia</span></h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60 md:text-xl">Desenvolvemos automações, sistemas personalizados e soluções inteligentes para transformar a operação da sua empresa.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#agendar" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-white/90">Agendar Reunião <ArrowRight size={20} /></a>
            <a href="#servicos" className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10">Conhecer Serviços</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-b border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div><h2 className="text-4xl font-bold md:text-5xl">Tecnologia que impulsiona negócios</h2><p className="mt-6 text-lg text-white/60">A Z3 transforma desafios empresariais em soluções tecnológicas escaláveis. Unimos visão de negócio, automação e desenvolvimento para entregar sistemas que geram resultado real.</p></div>
          <div className="grid gap-5">{["Diagnóstico preciso", "Execução rápida", "Suporte próximo"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="text-xl font-semibold">{item}</h3><p className="mt-2 text-white/60">Processo claro, comunicação direta e foco em impacto mensurável.</p></div>)}</div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">{stats.map(([Icon, value, label]) => <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/5 p-7"><Icon size={28} /><div className="mt-5 text-4xl font-bold">{value}</div><div className="mt-1 text-white/60">{label}</div></div>)}</div>
      </section>

      <section id="servicos" className="border-b border-white/10 px-6 py-28">
        <SectionTitle title="Nossas Soluções" subtitle="Tecnologia aplicada para simplificar processos, aumentar performance e criar novas oportunidades." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon, title, description]) => <article key={String(title)} className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"><Icon size={28} /><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-white/60">{description}</p></article>)}</div>
      </section>

      <section id="cases" className="border-b border-white/10 px-6 py-28">
        <SectionTitle title="Cases de Sucesso" subtitle="Exemplos de soluções digitais criadas para gerar eficiência, controle e crescimento." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{cases.map(([title, description, metric, label]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-4 text-white/60">{description}</p><div className="mt-6 rounded-xl bg-white/10 p-4"><div className="text-3xl font-bold">{metric}</div><div className="text-sm text-white/60">{label}</div></div></article>)}</div>
      </section>

      <section id="processo" className="border-b border-white/10 px-6 py-28">
        <SectionTitle title="Como Funciona" subtitle="Um caminho simples para sair do problema operacional e chegar a uma solução pronta para uso." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">{["Diagnóstico", "Planejamento", "Desenvolvimento", "Entrega"].map((step, index) => <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-7"><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">{index + 1}</div><h3 className="text-xl font-bold">{step}</h3><p className="mt-3 text-sm text-white/60">Etapa conduzida com clareza, prioridade e validação constante.</p></div>)}</div>
      </section>

      <section id="agendar" className="border-b border-white/10 px-6 py-28">
        <SectionTitle title="Agende uma Reunião" subtitle="Conte um pouco sobre sua operação e vamos mapear as melhores oportunidades de automação." />
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mx-auto grid max-w-3xl gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <label className="grid gap-2 text-sm"><span className="flex items-center gap-2"><User size={16} />Nome</span><input required className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <label className="grid gap-2 text-sm"><span className="flex items-center gap-2"><Building2 size={16} />Empresa</span><input required className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <label className="grid gap-2 text-sm"><span className="flex items-center gap-2"><Mail size={16} />Email</span><input required type="email" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <label className="grid gap-2 text-sm"><span className="flex items-center gap-2"><Phone size={16} />WhatsApp</span><input required type="tel" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <label className="grid gap-2 text-sm"><span className="flex items-center gap-2"><Calendar size={16} />Data</span><input required type="date" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <label className="grid gap-2 text-sm md:col-span-2"><span className="flex items-center gap-2"><MessageSquare size={16} />Objetivo</span><textarea required rows={4} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none focus:border-white/50" /></label>
          <button className="rounded-xl bg-white px-6 py-4 font-medium text-black md:col-span-2">Agendar Agora</button>
          {submitted && <p className="rounded-xl border border-green-400/40 bg-green-500/20 p-4 text-center md:col-span-2">Reunião registrada com sucesso. Entraremos em contato em breve.</p>}
        </form>
      </section>

      <footer id="contato" className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><div className="text-3xl font-bold">Z3</div><p className="mt-3 max-w-md text-white/50">Soluções inteligentes para empresas que buscam inovação.</p></div><div className="flex items-center gap-4"><a href="mailto:contato@z3.com" className="text-white/60 hover:text-white"><Mail /></a><a href="#" className="text-white/60 hover:text-white"><Instagram /></a><a href="#" className="text-white/60 hover:text-white"><Linkedin /></a></div></div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">© {year} Z3. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}
