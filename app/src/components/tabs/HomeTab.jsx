import heroLogo from '../../assets/logo/hero-logo.webp';
import { stats } from '../../data';

export default function HomeTab({ goCourses, goCashai }) {
  return (
    <section
      style={{
        padding: '96px 48px 80px', maxWidth: 1120, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center',
      }}
    >
      <div>
        <img src={heroLogo} alt="VisionCash" style={{ width: 72, height: 72, borderRadius: 14, objectFit: 'cover', display: 'block', marginBottom: 24 }} />
        <div
          style={{
            display: 'inline-block', padding: '6px 14px', borderRadius: 20, background: 'oklch(94% 0.03 150)',
            color: 'oklch(45% 0.15 150)', fontSize: 13, fontWeight: 700, letterSpacing: 0.5, marginBottom: 20,
          }}
        >
          EDUCAÇÃO FINANCEIRA PARA JOVENS
        </div>
        <h1 style={{ fontSize: 52, lineHeight: 1.08, fontWeight: 800, margin: '0 0 20px', color: 'oklch(18% 0.01 150)' }}>
          Dinheiro guardado,<br />sonho realizado.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: 'oklch(38% 0.01 150)', maxWidth: 480, margin: '0 0 32px' }}>
          O VisionCash é um aplicativo interativo de educação financeira com cursos rápidos e uma comunidade viva,
          feito para jovens que querem aprender a administrar dinheiro e planejar o futuro.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <button
            onClick={goCourses}
            style={{
              background: 'oklch(45% 0.15 150)', color: 'white', border: 'none', padding: '14px 26px',
              borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer',
            }}
          >
            Ver cursos
          </button>
          <button
            onClick={goCashai}
            style={{
              background: 'none', border: '2px solid oklch(85% 0.01 150)', color: 'oklch(22% 0.01 150)',
              padding: '12px 24px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer',
            }}
          >
            Analisar compra com IA →
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 12,
              padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 18,
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 800, color: 'oklch(45% 0.15 150)', minWidth: 90 }}>{stat.value}</div>
            <div style={{ fontSize: 14, color: 'oklch(40% 0.01 150)', lineHeight: 1.4 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
