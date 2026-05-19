import { createFileRoute } from "@tanstack/react-router";
import logoHorizontal from "@/assets/pulso-logo-horizontal.png";
import walker from "@/assets/pulso-walker.png";
import ring from "@/assets/pulso-ring.png";
import logoSquare from "@/assets/pulso-logo-square.png";
import selo from "@/assets/pulso-selo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-primary grid place-items-center shadow-soft overflow-hidden">
            <img src={walker} alt="Pulso Educa" className="h-10 w-auto object-contain" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Pulso<span className="text-primary"> Educa</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          <a href="#metodo" className="hover:text-ink transition-colors">Método</a>
          <a href="#servicos" className="hover:text-ink transition-colors">Serviços</a>
          <a href="#iseam" className="hover:text-ink transition-colors">ISEAM</a>
          <a href="#contato" className="hover:text-ink transition-colors">Contato</a>
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft hover:bg-primary-deep transition-colors"
        >
          Agendar diagnóstico
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-deep">
            Tecnologia social e inovação para ambientes escolares
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-ink">
            O que sua escola <span className="text-primary">ainda não</span> consegue ver,
            a gente revela.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Diagnóstico preventivo, planejamento estratégico e oficinas
            autorais para tornar a cultura escolar mais saudável e segura.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-glow hover:bg-primary-deep transition-all hover:-translate-y-0.5">
              Quero um diagnóstico
              <span aria-hidden>→</span>
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-card px-7 py-3.5 text-base font-bold text-ink hover:border-ink/40 transition-colors">
              Conhecer a jornada
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: "6", l: "dimensões avaliadas" },
              { n: "3", l: "etapas da jornada" },
              { n: "0–10", l: "escala ISEAM" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl md:text-4xl font-black text-primary">{s.n}</dt>
                <dd className="mt-1 text-sm text-muted-foreground leading-snug">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 shadow-glow" />
            <div className="absolute inset-0 bg-primary-deep rounded-[3rem] -rotate-2 opacity-40" />
            <div className="relative rounded-[3rem] bg-primary p-10 grid place-items-center h-full">
              <img src={walker} alt="Mascote Pulso Educa" className="w-2/3 drop-shadow-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-soft border border-border/60 max-w-[220px]">
              <p className="text-xs font-bold text-primary uppercase tracking-wider">Convivência</p>
              <p className="text-sm font-semibold text-ink mt-1 leading-snug">O centro do nosso diagnóstico</p>
            </div>
            <div className="absolute -top-6 -right-4 bg-card rounded-2xl p-4 shadow-soft border border-border/60 flex items-center gap-3">
              <div className="size-12 rounded-xl bg-primary grid place-items-center shrink-0 overflow-hidden">
                <img src={walker} alt="" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">ISEAM</p>
                <p className="text-2xl font-black text-ink mt-0.5 leading-none">8.4<span className="text-base text-muted-foreground">/10</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Tensões de convivência que ninguém comenta abertamente",
    "Estudantes que não comem ou comem escondido",
    "Discursos polarizadores chegando pela internet",
    "Famílias e gestores em narrativas paralelas",
  ];
  return (
    <section className="bg-ink text-cream py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">O ponto cego</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
            A escola que parece bem por fora
            <span className="text-primary"> raramente está</span> por dentro.
          </h2>
          <p className="mt-6 text-lg text-cream/70 leading-relaxed">
            Gestores escolares operam no ritmo da urgência. O que aparece é o
            visível: notas, frequência, reclamações. Mas o que realmente adoece
            o ambiente — convívio, alimentação, vínculos e cultura — segue
            abaixo da linha d'água até virar crise.
          </p>
        </div>
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={it} className="flex items-start gap-4 rounded-2xl bg-cream/[0.04] border border-cream/10 p-5 hover:border-primary/40 transition-colors">
              <span className="shrink-0 size-10 rounded-xl bg-primary text-primary-foreground grid place-items-center font-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-cream/90 pt-1.5">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      n: "01",
      tag: "Diagnóstico",
      title: "Diagnóstico preventivo ISEAM",
      desc: "Mapeamos seis dimensões da vida escolar (convivência, alimentação, exposição digital, práticas institucionais), combinando questionários, rodas, etnografia e entrevistas. Entregamos um índice de 0 a 10 e um relatório que dá visibilidade ao invisível.",
      bullets: ["Coleta qualitativa e quantitativa", "Índice ISEAM (0–10)", "Relatório com cenas, falas e recomendações"],
    },
    {
      n: "02",
      tag: "Planejamento",
      title: "Planejamento estratégico bianual",
      desc: "A partir do diagnóstico, desenhamos um plano anual ou bianual orientado pela visão de cinco anos da escola. Priorizamos, organizamos e cronogramamos as frentes de transformação com governança clara.",
      bullets: ["Visão de 5 anos traduzida em ação", "OKRs e indicadores próprios", "Ritmo de acompanhamento trimestral"],
    },
    {
      n: "03",
      tag: "Implementação",
      title: "Oficinas e atividades autorais",
      desc: "Oficinas, formações e experiências, autorais ou em parceria com empresas, que sustentam a transição cultural. De rodas reflexivas para meninos a visitas a hortas urbanas, tudo costurado ao plano da escola.",
      bullets: ["Rodas reflexivas e formações docentes", "Visitas guiadas (hortas urbanas e parceiros)", "Curadoria de programas com parceiros"],
    },
  ];

  return (
    <section id="servicos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">A jornada</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-ink leading-tight">
            Três passos para uma escola
            <br />
            <span className="text-primary">mais segura e saudável.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Você pode começar pelo diagnóstico, contratar a jornada completa ou
            entrar direto em oficinas pontuais. Funciona em qualquer ordem, e
            melhor ainda em sequência.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`group relative rounded-3xl p-8 border-2 transition-all hover:-translate-y-1 ${
                i === 0
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card text-ink border-border hover:border-primary/40 shadow-soft"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-5xl font-black ${i === 0 ? "text-primary-foreground/30" : "text-primary/20"}`}>
                  {s.n}
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  i === 0 ? "bg-primary-foreground text-primary" : "bg-primary-soft text-primary-deep"
                }`}>
                  {s.tag}
                </span>
              </div>
              <h3 className={`mt-6 text-2xl font-black leading-tight ${i === 0 ? "text-primary-foreground" : "text-ink"}`}>
                {s.title}
              </h3>
              <p className={`mt-4 text-[15px] leading-relaxed ${i === 0 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className={`flex items-start gap-2.5 text-sm font-semibold ${i === 0 ? "text-primary-foreground/95" : "text-ink"}`}>
                    <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${i === 0 ? "bg-primary-foreground" : "bg-primary"}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const dims = [
    { code: "SCEG", name: "Convivência e Equidade" },
    { code: "SCAE", name: "Cultura Alimentar Escolar" },
    { code: "SECR", name: "Exposição a Conteúdos de Risco" },
    { code: "SLMD", name: "Letramento e Mediação Digital" },
    { code: "SCPI", name: "Cultura e Práticas Institucionais" },
    { code: "SGD", name: "Gestão e Diretrizes" },
  ];
  return (
    <section id="iseam" className="bg-cream py-28 relative overflow-hidden">
      <div className="absolute -right-32 top-10 opacity-[0.06] pointer-events-none">
        <img src={ring} alt="" className="w-[600px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-5">
          <p id="metodo" className="text-sm font-bold uppercase tracking-widest text-primary">Metodologia ISEAM</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-ink leading-tight">
            Um índice. Seis dimensões. Uma escala que escola entende.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            O ISEAM traduz a vida escolar em uma nota de 0 a 10. Não para
            ranquear, mas para mostrar <strong className="text-ink">onde olhar</strong>
            {" "}e acompanhar a evolução ao longo do tempo.
          </p>
          <div className="mt-8 grid grid-cols-5 gap-1 rounded-2xl overflow-hidden border border-border">
            {[
              { f: "0–3,9", c: "Crítico", bg: "bg-ink", text: "text-cream" },
              { f: "4–5,9", c: "Alerta", bg: "bg-accent", text: "text-ink" },
              { f: "6–7,4", c: "Em desenv.", bg: "bg-primary-soft", text: "text-ink" },
              { f: "7,5–8,9", c: "Consolidado", bg: "bg-primary", text: "text-primary-foreground" },
              { f: "9–10", c: "Referência", bg: "bg-primary-deep", text: "text-primary-foreground" },
            ].map((f) => (
              <div key={f.c} className={`${f.bg} px-2 py-3 text-center flex flex-col justify-between min-h-[80px]`}>
                <p className={`text-[10px] font-black uppercase tracking-wider ${f.text}`}>{f.f}</p>
                <p className={`text-[10px] font-semibold leading-tight mt-1 break-words ${f.text} opacity-95`}>{f.c}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card border border-border shadow-soft overflow-hidden">
            <div className="bg-ink text-cream px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest">Matriz ISEAM</span>
              <span className="text-xs font-semibold text-cream/60">6 eixos avaliados</span>
            </div>
            <ul className="divide-y divide-border">
              {dims.map((d, i) => (
                <li key={d.code} className="flex items-center gap-5 px-6 py-5 hover:bg-cream/60 transition-colors">
                  <span className="text-xs font-black text-primary tracking-wider w-8 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-black text-muted-foreground tracking-wider w-14">{d.code}</span>
                  <span className="flex-1 text-base font-semibold text-ink">{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Seal() {
  return (
    <section className="py-28 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-card border border-border shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 bg-primary flex items-center justify-center p-12 md:p-16 relative">
              <div className="absolute inset-0 opacity-10">
                <img src={ring} alt="" className="w-full h-full object-cover" />
              </div>
              <img
                src={selo}
                alt="Selo Pulso Educa"
                className="relative w-full max-w-[320px] aspect-square object-contain drop-shadow-2xl"
              />
            </div>
            <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Selo Pulso Educa</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-ink leading-tight">
                Um selo que comunica cuidado às famílias.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Escolas que atingem nota ISEAM acima de 7,5 recebem o Selo Pulso
                Educa, um reconhecimento público do compromisso com um ambiente
                escolar mais seguro, saudável e bem cuidado.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Mais do que um diagnóstico interno, o selo é uma ferramenta de
                reputação e atração: fortalece a imagem institucional, gera
                confiança junto às famílias e se torna um diferencial concreto
                na captação e retenção de alunos.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "Reconhecimento público do compromisso da escola",
                  "Diferencial competitivo na captação de novos alunos",
                  "Confiança e tranquilidade para as famílias",
                  "Reforço da reputação institucional",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-semibold text-ink">
                    <span className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-muted-foreground italic">
                Concedido às escolas que alcançam nota ISEAM igual ou superior a 7,5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <img src={logoSquare} alt="" className="absolute -right-20 -bottom-20 w-[420px] opacity-20" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">Para quem é</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight">
              Escolas que querem sair do reativo.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
              Trabalhamos com gestores, mantenedores e coordenações pedagógicas
              que entendem que prevenção custa menos (financeira, reputacional
              e humanamente) do que apagar incêndios.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {["Educação Infantil", "Fundamental I e II", "Ensino Médio"].map((s) => (
                <div key={s} className="rounded-2xl bg-primary-foreground/15 backdrop-blur border border-primary-foreground/20 px-5 py-4 font-bold">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-28 bg-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <img src={ring} alt="" className="size-20 mx-auto opacity-90" />
        <h2 className="mt-8 text-4xl md:text-6xl font-black text-ink leading-tight">
          Vamos sentir o pulso da sua escola?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Conte um pouco do contexto e marcamos uma conversa de 30 minutos com a
          gestão. Sem compromisso. Só escuta e clareza sobre o próximo passo.
        </p>
        <form
          className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const nome = String(data.get("nome") || "").trim();
            const escola = String(data.get("escola") || "").trim();
            const email = String(data.get("email") || "").trim();
            const contexto = String(data.get("contexto") || "").trim();
            const msg =
              `Olá! Gostaria de agendar uma conversa com a Pulso Educa.\n\n` +
              `*Nome:* ${nome}\n` +
              `*Escola:* ${escola}\n` +
              `*E-mail:* ${email}\n\n` +
              `*Contexto:*\n${contexto}`;
            const url = `https://api.whatsapp.com/send?phone=5511941768637&text=${encodeURIComponent(msg)}`;
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            document.body.appendChild(a);
            a.click();
            a.remove();
          }}
        >
          <input name="nome" required className="rounded-full border-2 border-border bg-card px-5 py-3.5 text-base font-semibold focus:outline-none focus:border-primary" placeholder="Seu nome" />
          <input name="escola" required className="rounded-full border-2 border-border bg-card px-5 py-3.5 text-base font-semibold focus:outline-none focus:border-primary" placeholder="Escola" />
          <input name="email" type="email" required className="sm:col-span-2 rounded-full border-2 border-border bg-card px-5 py-3.5 text-base font-semibold focus:outline-none focus:border-primary" placeholder="E-mail profissional" />
          <textarea name="contexto" rows={3} required className="sm:col-span-2 rounded-3xl border-2 border-border bg-card px-5 py-4 text-base font-semibold focus:outline-none focus:border-primary resize-none" placeholder="O que está acontecendo na sua escola hoje?" />
          <button type="submit" className="sm:col-span-2 mt-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-black shadow-glow hover:bg-primary-deep transition-colors">
            Agendar conversa
          </button>
        </form>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink">
          <a href="https://api.whatsapp.com/send?phone=5511941768637" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
            <svg aria-hidden viewBox="0 0 32 32" className="size-5 shrink-0 fill-[#25D366]"><path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.117.554 4.184 1.606 6.005L4 28l7.146-1.572a12.005 12.005 0 0 0 4.857 1.022h.005C22.633 27.45 28 22.077 28 15.45 28 8.823 22.633 3 16.003 3zm0 21.9h-.004a9.94 9.94 0 0 1-4.86-1.33l-.348-.207-4.243.933.906-4.135-.227-.36a9.93 9.93 0 0 1-1.52-5.298c0-5.493 4.47-9.962 9.963-9.962 2.66 0 5.162 1.038 7.043 2.92a9.892 9.892 0 0 1 2.917 7.05c0 5.493-4.47 9.39-9.963 9.39zm5.46-7.456c-.3-.15-1.77-.873-2.043-.973-.274-.1-.473-.15-.673.15-.2.298-.772.972-.947 1.172-.175.2-.349.224-.648.075-.299-.15-1.263-.466-2.405-1.485-.89-.793-1.49-1.772-1.664-2.07-.175-.299-.019-.46.131-.609.135-.134.299-.349.448-.523.15-.175.2-.299.299-.498.1-.2.05-.374-.025-.523-.075-.15-.673-1.62-.922-2.22-.243-.583-.49-.504-.673-.513l-.573-.01c-.2 0-.523.075-.797.374-.274.299-1.046 1.022-1.046 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.106 3.215 5.1 4.508.713.308 1.27.492 1.704.63.715.227 1.366.195 1.88.118.574-.085 1.77-.723 2.02-1.422.249-.7.249-1.299.174-1.422-.074-.124-.273-.2-.572-.349z"/></svg>
            (11) 94176-8637
          </a>
          <a href="mailto:pulsoeduca@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
            <svg aria-hidden viewBox="0 0 48 48" className="size-5 shrink-0"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7a3 3 0 0 0 3-3V16.2z"/><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z"/><path fill="#e53935" d="M35 11.2L24 19.45 13 11.2 12 17l1 6.7L24 32l11-8.3 1-6.7z"/><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z"/><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"/></svg>
            pulsoeduca@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/80 py-14">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoHorizontal} alt="Pulso Educa" className="size-20 rounded-2xl object-cover shadow-soft" />
        <p className="text-sm">© {new Date().getFullYear()} Pulso Educa · Tecnologia e inovação para a educação.</p>
        <div className="flex gap-6 text-sm font-semibold">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#iseam" className="hover:text-primary transition-colors">ISEAM</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Method />
        <Seal />
        <ForWho />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
