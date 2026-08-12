import navLogo from '../assets/logo/nav-logo.webp';

const TABS = [
  ['home', 'Home'],
  ['problema', 'O Problema'],
  ['courses', 'Cursos'],
  ['cashai', 'CashAI'],
  ['community', 'Comunidade'],
  ['rewards', 'Recompensas'],
  ['news', 'Notícias'],
  ['plans', 'Planos'],
];

export default function Nav({ tab, setTab }) {
  return (
    <nav
      className="site-nav"
      style={{
        position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '16px 40px', background: 'oklch(20% 0.03 150)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.1)', flexWrap: 'wrap', gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <img
          src={navLogo}
          alt="VisionCash"
          style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', display: 'block' }}
        />
        <span style={{ fontSize: 19, fontWeight: 700, color: 'white', letterSpacing: 0.2 }}>VisionCash</span>
      </div>
      <div className="nav-tabs" style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {TABS.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              background: 'none', border: 'none', padding: '9px 14px', borderRadius: 6,
              color: tab === key ? 'oklch(90% 0.13 150)' : 'rgba(255,255,255,0.75)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
