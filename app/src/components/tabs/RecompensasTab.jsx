import { useState } from 'react';
import { leaderboard, badgesList } from '../../data';

const goalSaved = 320;
const goalTarget = 500;
const goalPercent = 64;
const goalRemaining = 180;
const goalDashoffset = 289 - (289 * goalPercent) / 100;

export default function RecompensasTab() {
  const [selectedBadge, setSelectedBadge] = useState(0);

  return (
    <section style={{ padding: '64px 48px 90px', maxWidth: 1120, margin: '0 auto' }}>
      <h2 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px' }}>Recompensas</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 40px' }}>Guarde dinheiro, suba no ranking e desbloqueie conquistas.</p>

      <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.4, color: 'oklch(40% 0.01 150)', margin: '0 0 16px', textTransform: 'uppercase' }}>Top 3 do mês</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: 16, alignItems: 'end', marginBottom: 48 }}>
        {leaderboard.map((rank) => (
          <div key={rank.name} style={{ background: rank.bg, color: rank.color, borderRadius: 16, padding: rank.padding, textAlign: 'center', order: rank.order }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{rank.medal}</div>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, margin: '0 auto 10px' }}>
              {rank.initials}
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{rank.name}</div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>{rank.amount}</div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>economizados</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, marginBottom: 48, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center' }}>
          <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="60" cy="60" r="46" stroke="oklch(92% 0.005 150)" strokeWidth="10" fill="none" />
            <circle cx="60" cy="60" r="46" stroke="oklch(50% 0.14 150)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray="289" strokeDashoffset={goalDashoffset} />
          </svg>
          <div>
            <p style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>{goalPercent}%</p>
            <p style={{ fontSize: 12, color: 'oklch(50% 0.01 150)', margin: '2px 0 8px' }}>da trilha concluída</p>
            <span style={{ fontSize: 12, fontWeight: 700, background: 'oklch(94% 0.03 150)', color: 'oklch(35% 0.1 150)', padding: '5px 12px', borderRadius: 999 }}>Nível 4 · 1.240 pts</span>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.4, color: 'oklch(40% 0.01 150)', margin: '0 0 14px' }}>Mural de medalhas</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 14 }}>
            {badgesList.map((badge, i) => (
              <div
                key={badge.title}
                onClick={() => setSelectedBadge(i)}
                style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, padding: '16px 10px', textAlign: 'center', cursor: 'pointer', opacity: badge.opacity }}
              >
                <div style={{ fontSize: 28, marginBottom: 6 }}>{badge.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 12 }}>{badge.title}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: 'oklch(45% 0.01 150)', background: 'oklch(98% 0.004 150)', borderRadius: 10, padding: '12px 14px', margin: 0 }}>
            {badgesList[selectedBadge].desc}
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.4, color: 'oklch(40% 0.01 150)', margin: '0 0 16px', textTransform: 'uppercase' }}>Sua meta mensal</h3>
      <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, padding: 28, maxWidth: 520 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>R$ {goalSaved} de R$ {goalTarget}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: 'oklch(45% 0.15 150)' }}>{goalPercent}%</span>
        </div>
        <div style={{ background: 'oklch(94% 0.005 150)', borderRadius: 20, height: 14, overflow: 'hidden' }}>
          <div style={{ background: 'oklch(50% 0.14 150)', height: '100%', borderRadius: 20, width: `${goalPercent}%` }} />
        </div>
        <p style={{ fontSize: 13, color: 'oklch(50% 0.01 150)', margin: '14px 0 0' }}>Faltam R$ {goalRemaining} para bater a meta deste mês.</p>
      </div>
    </section>
  );
}
