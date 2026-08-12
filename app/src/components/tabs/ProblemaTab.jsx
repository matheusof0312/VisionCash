const card = { background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 16, padding: 28 };

export default function ProblemaTab() {
  return (
    <section className="page-section" style={{ padding: '64px 48px 90px', maxWidth: 1120, margin: '0 auto' }}>
      <h2 className="section-title" style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px' }}>O problema é maior do que parece</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 40px', maxWidth: 640 }}>
        Os algoritmos das redes sociais são desenhados para estimular a compra por impulso — e a Geração Z é o alvo principal.
      </p>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 56 }}>
        <div style={card}>
          <div style={{ fontSize: 44, fontWeight: 800, color: 'oklch(20% 0.02 150)', marginBottom: 8 }}>85%</div>
          <p style={{ fontSize: 14, color: 'oklch(42% 0.01 150)', lineHeight: 1.5, margin: '0 0 12px' }}>
            da Geração Z é influenciada a comprar pelas redes sociais — Instagram e TikTok lideram o impacto.
          </p>
          <p style={{ fontSize: 12, color: 'oklch(60% 0.01 150)', margin: 0 }}>O Tempo | Economia, 2023</p>
        </div>
        <div style={card}>
          <div style={{ fontSize: 44, fontWeight: 800, color: 'oklch(20% 0.02 150)', marginBottom: 8 }}>1 em 5</div>
          <p style={{ fontSize: 14, color: 'oklch(42% 0.01 150)', lineHeight: 1.5, margin: '0 0 12px' }}>
            escolas brasileiras oferece conteúdo sobre educação financeira e finanças pessoais.
          </p>
          <p style={{ fontSize: 12, color: 'oklch(60% 0.01 150)', margin: 0 }}>Agência Brasil, 2022</p>
        </div>
        <div style={{ background: 'oklch(50% 0.14 150)', color: 'white', borderRadius: 16, padding: 28 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 14 }}>🎯</div>
          <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>Retargeting intensifica o estímulo</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.5, margin: 0, opacity: 0.9 }}>
            Anúncios personalizados com base no seu histórico repetem o gatilho de compra a cada acesso.
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 10px', textAlign: 'center' }}>Como o VisionCash transforma a sociedade</h3>
      <p style={{ fontSize: 15, color: 'oklch(40% 0.01 150)', textAlign: 'center', maxWidth: 520, margin: '0 auto 32px' }}>
        Cada jovem impactado transforma sua família e comunidade, criando um ciclo positivo para o Brasil.
      </p>
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
        {[
          ['91%', 'dos jovens querem uma plataforma de educação financeira'],
          ['1M+', 'jovens impactados em potencial com expansão nacional'],
          ['1 em 5', 'escolas oferecem conteúdo sobre finanças pessoais'],
        ].map(([value, label]) => (
          <div key={label} style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, padding: 22, textAlign: 'center' }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: 'oklch(45% 0.15 150)' }}>{value}</div>
            <p style={{ fontSize: 12.5, color: 'oklch(48% 0.01 150)', margin: '6px 0 0' }}>{label}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
        {[
          ['🎓', 'Educação', 'Hábitos financeiros saudáveis desde cedo.'],
          ['👨‍👩‍👧', 'Família', 'O conhecimento vai para casa e transforma todos.'],
          ['📈', 'Economia', 'Menos inadimplência, mais poupança nacional.'],
        ].map(([icon, title, desc], i, arr) => (
          <div key={title} style={{ display: 'contents' }}>
            <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, padding: 20, textAlign: 'center', width: 180 }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
              <p style={{ fontSize: 12, color: 'oklch(50% 0.01 150)', margin: '4px 0 0' }}>{desc}</p>
            </div>
            {i < arr.length - 1 && <span style={{ fontSize: 22, color: 'oklch(45% 0.15 150)' }}>→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
