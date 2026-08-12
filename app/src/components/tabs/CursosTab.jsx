import { useMemo, useState } from 'react';
import { courses, lmsTrilhaData } from '../../data';

const fmt = (n) => 'R$ ' + Math.round(n).toLocaleString('pt-BR');

export default function CursosTab() {
  const [lmsTrilha, setLmsTrilha] = useState('inicial');
  const [lmsModuleIndex, setLmsModuleIndex] = useState(2);
  const [simInicial, setSimInicial] = useState(500);
  const [simAporte, setSimAporte] = useState(200);
  const [simTaxa, setSimTaxa] = useState(10);
  const [simAnos, setSimAnos] = useState(10);

  const trilha = lmsTrilhaData[lmsTrilha];
  const modIdx = lmsModuleIndex;
  const doneCount = trilha.modules.filter((m) => m.done).length;
  const lmsProgressPct = trilha.locked ? 0 : Math.round((doneCount / trilha.modules.length) * 100);
  const curMod = trilha.locked ? null : trilha.modules[modIdx];

  const sim = useMemo(() => {
    const rMensal = Math.pow(1 + simTaxa / 100, 1 / 12) - 1;
    const meses = simAnos * 12;
    let saldo = simInicial;
    const pontos = [saldo];
    for (let m = 1; m <= meses; m++) {
      saldo = saldo * (1 + rMensal) + simAporte;
      if (m % 12 === 0) pontos.push(saldo);
    }
    const investido = simInicial + simAporte * meses;
    const maxPonto = Math.max(...pontos, 1);
    const bars = pontos.map((v) => Math.max(2, (v / maxPonto) * 100));
    return { saldo, investido, bars };
  }, [simInicial, simAporte, simTaxa, simAnos]);

  return (
    <section style={{ padding: '64px 48px 90px', maxWidth: 1120, margin: '0 auto' }}>
      <h2 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px' }}>Cursos</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 40px' }}>
        Trilhas rápidas e acessíveis para dominar o básico e avançar em educação financeira.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
        {courses.map((course) => (
          <div key={course.title} style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={course.img} alt={course.title} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'oklch(45% 0.15 150)', letterSpacing: 0.4 }}>{course.tag}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{course.title}</h3>
              <p style={{ fontSize: 14, color: 'oklch(42% 0.01 150)', lineHeight: 1.5, margin: 0, flex: 1 }}>{course.desc}</p>
              <button style={{ marginTop: 8, background: 'oklch(45% 0.15 150)', color: 'white', border: 'none', padding: '10px 16px', borderRadius: 7, fontSize: 14, fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-start' }}>
                Ver curso
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px' }}>Continue de onde parou</h3>
      <p style={{ fontSize: 14, color: 'oklch(40% 0.01 150)', margin: '0 0 20px' }}>Vídeo-aulas curtas, com progresso salvo automaticamente.</p>
      <div style={{ background: 'oklch(20% 0.03 150)', borderRadius: 16, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.4fr 1fr', marginBottom: 64 }}>
        <div style={{ padding: '28px 32px' }}>
          <div style={{ display: 'inline-flex', gap: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999, padding: 4, marginBottom: 22 }}>
            {Object.keys(lmsTrilhaData).map((id) => (
              <button
                key={id}
                onClick={() => { setLmsTrilha(id); setLmsModuleIndex(0); }}
                style={{
                  border: 'none', padding: '8px 14px', borderRadius: 999, fontSize: 12.5, fontWeight: 700, cursor: 'pointer',
                  background: lmsTrilha === id ? 'oklch(50% 0.14 150)' : 'transparent',
                  color: lmsTrilha === id ? 'oklch(15% 0.02 150)' : 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap',
                }}
              >
                {lmsTrilhaData[id].label}
              </button>
            ))}
          </div>
          <div style={{ aspectRatio: '16/9', borderRadius: 14, background: 'linear-gradient(135deg, oklch(35% 0.06 150), oklch(15% 0.02 150))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: 20 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid white', marginLeft: 3 }} />
            </div>
            <span style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 11, background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.85)', padding: '3px 8px', borderRadius: 5 }}>
              {trilha.locked ? '🔒' : curMod.duration}
            </span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: 'oklch(70% 0.13 150)', textTransform: 'uppercase', margin: '0 0 6px' }}>
            {trilha.locked ? 'Conteúdo Premium' : `Módulo ${modIdx + 1}`}
          </p>
          <h4 style={{ fontSize: 19, fontWeight: 700, color: 'white', margin: '0 0 10px' }}>
            {trilha.locked ? 'Assine o Premium para desbloquear essa trilha' : curMod.title}
          </h4>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55, margin: 0 }}>
            {trilha.locked ? 'Trilhas avançadas de Investimentos e Crédito ficam disponíveis no plano Premium por R$19,90/mês.' : curMod.desc}
          </p>
        </div>
        <div style={{ background: 'oklch(98% 0.004 150)', padding: '28px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Progresso da trilha</span>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: 'oklch(45% 0.15 150)' }}>{lmsProgressPct}%</span>
          </div>
          <div style={{ height: 8, background: 'oklch(92% 0.005 150)', borderRadius: 8, overflow: 'hidden', marginBottom: 18 }}>
            <div style={{ height: '100%', background: 'oklch(50% 0.14 150)', width: `${lmsProgressPct}%` }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 260, overflowY: 'auto' }}>
            {!trilha.locked && trilha.modules.map((m, i) => (
              <div
                key={m.title}
                onClick={() => setLmsModuleIndex(i)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px',
                  borderRadius: 10, cursor: 'pointer', background: i === modIdx ? 'oklch(94% 0.03 150)' : 'transparent',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                  <span>{m.done ? '✅' : i === modIdx ? '▶️' : '⏵'}</span>
                  <span style={{ textDecoration: m.done ? 'line-through' : 'none', color: m.done ? 'oklch(60% 0.01 150)' : 'oklch(25% 0.01 150)' }}>{m.title}</span>
                </span>
                <span style={{ fontSize: 11.5, color: 'oklch(58% 0.01 150)', flexShrink: 0, marginLeft: 10 }}>{m.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px' }}>Simulador de juros compostos</h3>
      <p style={{ fontSize: 14, color: 'oklch(40% 0.01 150)', margin: '0 0 20px' }}>Ajuste os campos e veja em tempo real quanto você teria guardado.</p>
      <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 16, padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
              <span>Valor inicial</span><span>{fmt(simInicial)}</span>
            </div>
            <input type="range" min="0" max="20000" step="100" value={simInicial} onChange={(e) => setSimInicial(parseFloat(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
              <span>Aporte mensal</span><span>{fmt(simAporte)}</span>
            </div>
            <input type="range" min="0" max="3000" step="50" value={simAporte} onChange={(e) => setSimAporte(parseFloat(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
              <span>Taxa de juros ao ano</span><span>{simTaxa}%</span>
            </div>
            <input type="range" min="1" max="20" step="0.5" value={simTaxa} onChange={(e) => setSimTaxa(parseFloat(e.target.value))} style={{ width: '100%' }} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700, marginBottom: 8 }}>
              <span>Período</span><span>{simAnos}{simAnos === 1 ? ' ano' : ' anos'}</span>
            </div>
            <input type="range" min="1" max="40" step="1" value={simAnos} onChange={(e) => setSimAnos(parseInt(e.target.value, 10))} style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 130, marginBottom: 20, padding: '0 4px' }}>
            {sim.bars.map((h, i) => (
              <div key={i} style={{ flex: 1, background: 'oklch(50% 0.14 150)', borderRadius: '3px 3px 0 0', height: `${h}%`, minHeight: 2 }} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{ background: 'oklch(98% 0.004 150)', borderRadius: 12, padding: 14 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(55% 0.01 150)', margin: '0 0 4px' }}>Total investido</p>
              <p style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{fmt(sim.investido)}</p>
            </div>
            <div style={{ background: 'oklch(98% 0.004 150)', borderRadius: 12, padding: 14 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(55% 0.01 150)', margin: '0 0 4px' }}>Total em juros</p>
              <p style={{ fontSize: 17, fontWeight: 800, color: 'oklch(45% 0.15 150)', margin: 0 }}>{fmt(sim.saldo - sim.investido)}</p>
            </div>
            <div style={{ background: 'oklch(20% 0.03 150)', borderRadius: 12, padding: 14, gridColumn: 'span 2' }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'oklch(70% 0.13 150)', margin: '0 0 4px' }}>Montante final</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: 'white', margin: 0 }}>{fmt(sim.saldo)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
