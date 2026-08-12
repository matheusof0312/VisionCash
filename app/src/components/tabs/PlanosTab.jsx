import { freemiumFeatures, premiumFeatures } from '../../data';

export default function PlanosTab() {
  return (
    <section style={{ padding: '64px 48px 90px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px', textAlign: 'center' }}>Planos</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 40px', textAlign: 'center' }}>Comece de graça, avance quando quiser.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 16, padding: 36 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'oklch(45% 0.14 150)', letterSpacing: 0.4, marginBottom: 10 }}>FREEMIUM</div>
          <div style={{ fontSize: 40, fontWeight: 800, marginBottom: 4 }}>R$0</div>
          <div style={{ fontSize: 13, color: 'oklch(50% 0.01 150)', marginBottom: 24 }}>para sempre</div>
          {freemiumFeatures.map((f) => (
            <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ color: 'oklch(45% 0.14 150)', fontWeight: 700 }}>✓</span><span>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ background: 'oklch(20% 0.03 150)', color: 'white', borderRadius: 16, padding: 36, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 20, right: 20, background: 'oklch(62% 0.15 150)', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 20 }}>MAIS COMPLETO</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'oklch(70% 0.13 150)', letterSpacing: 0.4, marginBottom: 10 }}>PREMIUM</div>
          <div style={{ fontSize: 40, fontWeight: 800, marginBottom: 4 }}>R$19,90</div>
          <div style={{ fontSize: 13, color: 'oklch(75% 0.01 150)', marginBottom: 24 }}>por mês</div>
          {premiumFeatures.map((f) => (
            <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ color: 'oklch(70% 0.13 150)', fontWeight: 700 }}>✓</span><span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
