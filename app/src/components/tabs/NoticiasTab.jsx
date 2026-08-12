import { useEffect, useState } from 'react';
import { carregarNoticiasInfoMoney } from '../../data';

export default function NoticiasTab() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    setNewsItems(carregarNoticiasInfoMoney());
  }, []);

  return (
    <section style={{ padding: '64px 48px 90px', maxWidth: 1120, margin: '0 auto' }}>
      <h2 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px' }}>Notícias</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 40px' }}>As principais manchetes do mercado financeiro, direto no seu feed.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {newsItems.map((news) => (
          <div key={news.id} style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src={news.img} alt={news.title} style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, letterSpacing: 0.4, color: 'oklch(35% 0.1 150)', background: 'oklch(94% 0.03 150)', padding: '4px 10px', borderRadius: 999 }}>
                {news.category}
              </span>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{news.title}</h3>
              <p style={{ fontSize: 13.5, color: 'oklch(42% 0.01 150)', lineHeight: 1.5, margin: 0, flex: 1 }}>{news.summary}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 11.5, color: 'oklch(58% 0.01 150)' }}>Fonte: InfoMoney</span>
                <button style={{ background: 'none', border: 'none', color: 'oklch(45% 0.15 150)', fontSize: 13, fontWeight: 700, cursor: 'pointer', padding: 0 }}>
                  Leia a matéria completa →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
