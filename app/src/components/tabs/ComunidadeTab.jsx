import { useState } from 'react';
import { initialChatMessages } from '../../data';

export default function ComunidadeTab() {
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [chatInput, setChatInput] = useState('');

  const sendChat = () => {
    const text = chatInput.trim();
    if (!text) return;
    setChatMessages((prev) => [...prev, { mine: true, name: 'Você', initials: 'EU', text }]);
    setChatInput('');
  };

  return (
    <section className="page-section" style={{ padding: '64px 48px 80px', maxWidth: 760, margin: '0 auto' }}>
      <h2 className="section-title" style={{ fontSize: 34, fontWeight: 800, margin: '0 0 8px' }}>Comunidade</h2>
      <p style={{ fontSize: 16, color: 'oklch(40% 0.01 150)', margin: '0 0 24px' }}>Chat em tempo real entre alunos e especialistas.</p>

      <div style={{ background: 'white', border: '1px solid oklch(92% 0.005 150)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 560 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', background: 'oklch(20% 0.03 150)', color: 'white' }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'oklch(45% 0.15 150)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>#</div>
          <span style={{ fontWeight: 700, fontSize: 15 }}>geral</span>
          <span style={{ fontSize: 12, color: 'oklch(80% 0.02 150)', marginLeft: 'auto' }}>128 online</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {chatMessages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.mine ? 'flex-end' : 'flex-start', maxWidth: '100%' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexDirection: msg.mine ? 'row-reverse' : 'row' }}>
                <div
                  style={{
                    width: 28, height: 28, borderRadius: '50%', background: msg.mine ? 'oklch(45% 0.15 150)' : 'oklch(90% 0.01 150)',
                    color: msg.mine ? 'white' : 'oklch(30% 0.01 150)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 11, flexShrink: 0,
                  }}
                >
                  {msg.initials}
                </div>
                <div
                  style={{
                    background: msg.mine ? 'oklch(45% 0.15 150)' : 'oklch(95% 0.01 150)', color: msg.mine ? 'white' : 'oklch(22% 0.01 150)',
                    padding: '10px 14px', borderRadius: 14, fontSize: 14, lineHeight: 1.45, maxWidth: 400,
                  }}
                >
                  {msg.text}
                </div>
              </div>
              <span style={{ fontSize: 11, color: 'oklch(55% 0.01 150)', marginTop: 4, padding: '0 36px' }}>{msg.name}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, padding: '14px 20px', borderTop: '1px solid oklch(92% 0.005 150)' }}>
          <input
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') sendChat(); }}
            placeholder="Escreva uma mensagem..."
            style={{ flex: 1, border: '1px solid oklch(88% 0.01 150)', borderRadius: 20, padding: '10px 16px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
          />
          <button
            onClick={sendChat}
            style={{ background: 'oklch(45% 0.15 150)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 20, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
