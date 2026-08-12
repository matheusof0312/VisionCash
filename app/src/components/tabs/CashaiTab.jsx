import { useState } from 'react';
import { quizSets, detectCategory } from '../../data';

export default function CashaiTab() {
  const [caStage, setCaStage] = useState('input');
  const [caInput, setCaInput] = useState('');
  const [caCategory, setCaCategory] = useState(null);
  const [caQuizIndex, setCaQuizIndex] = useState(0);
  const [caAnswers, setCaAnswers] = useState([]);

  const cat = caCategory ? quizSets[caCategory] : null;
  const quiz = cat ? cat.qs : null;
  const curQ = quiz ? quiz[caQuizIndex] : null;
  const curAnswer = caAnswers[caQuizIndex];
  const totalAnswered = caAnswers.length;
  const impulseCount = caAnswers.filter((a) => a && a.impulse).length;
  const resultPct = totalAnswered ? Math.round((impulseCount / totalAnswered) * 100) : 0;
  const resultColor = resultPct >= 66 ? 'oklch(55% 0.18 25)' : resultPct >= 34 ? 'oklch(68% 0.15 75)' : 'oklch(50% 0.14 150)';

  const caAnalyze = () => {
    if (!caInput.trim()) return;
    setCaStage('loading');
    setCaCategory(detectCategory(caInput));
    setTimeout(() => {
      setCaStage('quiz');
      setCaQuizIndex(0);
      setCaAnswers([]);
    }, 1100);
  };
  const caSelectOption = (impulse, reason) => {
    setCaAnswers((prev) => {
      const next = [...prev];
      next[caQuizIndex] = { impulse, reason };
      return next;
    });
  };
  const caNext = () => {
    if (!quiz) return;
    if (caQuizIndex < quiz.length - 1) setCaQuizIndex((i) => i + 1);
    else setCaStage('result');
  };
  const caReset = () => {
    setCaStage('input');
    setCaInput('');
    setCaCategory(null);
    setCaQuizIndex(0);
    setCaAnswers([]);
  };

  return (
    <section className="page-section" style={{ padding: '64px 48px 90px', maxWidth: 640, margin: '0 auto' }}>
      <h2 className="section-title" style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px', textAlign: 'center' }}>Converse com a CashAI antes de comprar</h2>
      <p style={{ fontSize: 15, color: 'oklch(40% 0.01 150)', margin: '0 0 36px', textAlign: 'center' }}>
        Descreva o que você quer comprar. A CashAI faz perguntas sob medida para separar utilidade de desejo.
      </p>

      <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 18, padding: 32 }}>
        {caStage === 'input' && (
          <>
            <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.4, color: 'oklch(55% 0.01 150)', display: 'block', marginBottom: 10 }}>
              O que você quer comprar?
            </label>
            <textarea
              rows={3}
              placeholder='Ex: "tênis branco 350 reais"'
              value={caInput}
              onChange={(e) => setCaInput(e.target.value)}
              style={{ width: '100%', resize: 'none', borderRadius: 14, background: 'oklch(98% 0.004 150)', border: '1px solid oklch(90% 0.005 150)', padding: 14, fontSize: 14, fontFamily: 'inherit', outline: 'none' }}
            />
            <button
              onClick={caAnalyze}
              style={{ width: '100%', marginTop: 14, background: 'oklch(45% 0.15 150)', color: 'white', border: 'none', padding: 14, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
            >
              Analisar com CashAI
            </button>
            <p style={{ fontSize: 11.5, color: 'oklch(58% 0.01 150)', textAlign: 'center', margin: '10px 0 0' }}>A CashAI não guarda o que você compra.</p>
          </>
        )}

        {caStage === 'loading' && (
          <div style={{ padding: '36px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', border: '4px solid oklch(92% 0.005 150)', borderTopColor: 'oklch(50% 0.14 150)', animation: 'spin 0.8s linear infinite' }} />
            <p style={{ fontSize: 14, fontWeight: 600, color: 'oklch(45% 0.01 150)' }}>Identificando categoria e preparando perguntas...</p>
          </div>
        )}

        {caStage === 'quiz' && curQ && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <span style={{ fontSize: 12, fontWeight: 700, background: 'oklch(94% 0.03 150)', color: 'oklch(35% 0.1 150)', padding: '6px 12px', borderRadius: 999 }}>
                Categoria: {cat.label}
              </span>
              <span style={{ fontSize: 12, color: 'oklch(55% 0.01 150)', fontWeight: 600 }}>Pergunta {caQuizIndex + 1} de {quiz.length}</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
              {quiz.map((_, i) => (
                <div key={i} style={{ flex: 1, height: 5, borderRadius: 4, background: i <= caQuizIndex ? 'oklch(50% 0.14 150)' : 'oklch(92% 0.005 150)' }} />
              ))}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 22px', lineHeight: 1.35 }}>{curQ.q}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {curQ.o.map(([label, impulse, reason]) => {
                const selected = curAnswer && curAnswer.reason === reason;
                return (
                  <button
                    key={label}
                    onClick={() => caSelectOption(impulse, reason)}
                    style={{
                      textAlign: 'left', border: `2px solid ${selected ? 'oklch(45% 0.15 150)' : 'transparent'}`,
                      background: selected ? 'oklch(94% 0.03 150)' : 'oklch(98% 0.004 150)', borderRadius: 12,
                      padding: '13px 16px', fontSize: 14, fontWeight: 600, color: 'oklch(22% 0.01 150)', cursor: 'pointer',
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <button
              onClick={caNext}
              disabled={!curAnswer}
              style={{ width: '100%', background: 'oklch(45% 0.15 150)', opacity: curAnswer ? 1 : 0.4, color: 'white', border: 'none', padding: 14, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
            >
              {caQuizIndex === quiz.length - 1 ? 'Ver veredito' : 'Próxima'}
            </button>
          </>
        )}

        {caStage === 'result' && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 120, height: 120, borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', background: `conic-gradient(${resultColor} ${resultPct}%, oklch(92% 0.005 150) ${resultPct}%)`,
              }}
            >
              <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: resultColor }}>{resultPct}%</span>
                <span style={{ fontSize: 10, textTransform: 'uppercase', color: 'oklch(58% 0.01 150)' }}>impulso</span>
              </div>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px' }}>
              {resultPct >= 66 ? 'Isso parece mais desejo do que necessidade.' : resultPct >= 34 ? 'É um meio-termo. Vale pensar mais um pouco.' : 'Essa compra parece bem pensada!'}
            </h3>
            <p style={{ fontSize: 13.5, color: 'oklch(45% 0.01 150)', maxWidth: 400, margin: '0 auto 20px', lineHeight: 1.5 }}>
              {resultPct >= 66 ? 'Sinais fortes de compra por impulso. Vale esperar um pouco antes de decidir.' : resultPct >= 34 ? 'Alguns sinais de impulso, outros de decisão consciente.' : 'Suas respostas mostram uma decisão consciente, não por impulso.'}
            </p>
            <div style={{ background: 'oklch(98% 0.004 150)', borderRadius: 14, padding: '16px 20px', textAlign: 'left', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {caAnswers.map((a, i) => (
                <span key={i} style={{ fontSize: 13, lineHeight: 1.4 }}>{(a.impulse ? '⚠️ ' : '✅ ') + a.reason}</span>
              ))}
            </div>
            <button
              onClick={caReset}
              style={{ width: '100%', background: 'none', border: '2px solid oklch(88% 0.01 150)', color: 'oklch(22% 0.01 150)', padding: 12, borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
            >
              Testar outro produto
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
