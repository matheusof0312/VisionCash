import imgOrcamento from './assets/courses/orcamento-pessoal.jpeg';
import imgPoupanca from './assets/courses/poupanca-metas.jpeg';
import imgJuros from './assets/courses/juros-compostos.webp';
import imgInvestindo from './assets/courses/investindo-primeira-vez.jpeg';
import imgCredito from './assets/courses/credito-consciente.jpg';
import imgCripto from './assets/courses/cripto-novos-ativos.jpeg';

import newsImg1 from './assets/news/news-1.webp';
import newsImg2 from './assets/news/news-2.webp';
import newsImg3 from './assets/news/news-3.webp';
import newsImg4 from './assets/news/news-4.webp';
import newsImg5 from './assets/news/news-5.webp';
import newsImg6 from './assets/news/news-6.webp';

export const quizSets = {
  eletronico: {
    label: '📱 Eletrônicos',
    qs: [
      { q: 'Esse aparelho vai substituir um que quebrou ou está ultrapassado?', o: [['Sim, o meu atual não funciona bem', false, 'O aparelho que você tem hoje não funciona bem.'], ['Não, o meu atual ainda funciona', true, 'O aparelho que você já tem ainda funciona bem.']] },
      { q: 'Você comparou esse modelo com outras marcas ou leu reviews?', o: [['Sim, pesquisei bastante', false, 'Você comparou modelos antes de decidir.'], ['Não, decidi pela propaganda', true, 'Você decidiu só pela propaganda, sem comparar.']] },
      { q: 'Você sabe exatamente quais funções vai usar no dia a dia?', o: [['Sim, sei bem pra que vou usar', false, 'Você sabe exatamente para que vai usar o aparelho.'], ['Não muito, gostei do design', true, 'Você não tem clareza do uso — foi mais pelo design.']] },
    ],
  },
  moda: {
    label: '👟 Moda & Calçados',
    qs: [
      { q: 'Você já tem uma peça parecida no guarda-roupa?', o: [['Não, é bem diferente', false, 'Essa peça é diferente do que você já tem.'], ['Sim, tenho algo parecido', true, 'Você já tem uma peça parecida.']] },
      { q: 'Já pensou em pelo menos 3 ocasiões pra usar essa peça?', o: [['Sim, já pensei em várias', false, 'Você já pensou em ocasiões reais de uso.'], ['Não, só achei bonita', true, 'Você ainda não pensou onde vai usar.']] },
      { q: 'Essa peça combina com o que você já tem?', o: [['Sim, combina bem', false, 'A peça combina com o que você já tem.'], ['Precisaria comprar mais coisas', true, 'Você precisaria comprar mais peças pra usá-la.']] },
    ],
  },
  generico: {
    label: '🛒 Produto',
    qs: [
      { q: 'Esse item resolve um problema real que você tem hoje?', o: [['Sim, resolve algo real', false, 'Isso resolve um problema real que você tem hoje.'], ['Não, é mais desejo', true, 'Você reconheceu que é mais desejo.']] },
      { q: 'Você comparou o preço em outro lugar?', o: [['Sim, comparei', false, 'Você comparou o preço antes de decidir.'], ['Não comparei', true, 'Você não comparou o preço em outro lugar.']] },
      { q: 'Se esperasse 7 dias, ainda compraria?', o: [['Sim, com certeza', false, 'Você ainda compraria mesmo esperando 7 dias.'], ['Talvez não', true, 'Você não tem certeza se compraria depois de uma semana.']] },
    ],
  },
};

export function detectCategory(text) {
  const t = ' ' + text.toLowerCase() + ' ';
  if (['celular', 'iphone', 'notebook', 'fone', 'tv', 'tablet'].some((k) => t.includes(k))) return 'eletronico';
  if (['tênis', 'tenis', 'sapato', 'bolsa', 'jaqueta', 'roupa', 'camisa'].some((k) => t.includes(k))) return 'moda';
  return 'generico';
}

export const lmsTrilhaData = {
  inicial: {
    label: 'Trilha Inicial · Grátis',
    locked: false,
    modules: [
      { title: 'Por que a gente compra por impulso?', duration: '6 min', done: true, desc: 'Entenda os gatilhos psicológicos usados pelos apps de compra e redes sociais.' },
      { title: 'Montando seu primeiro orçamento', duration: '9 min', done: true, desc: 'Um passo a passo simples pra organizar entradas e saídas sem planilha complicada.' },
      { title: 'Reserva de emergência na prática', duration: '8 min', done: false, desc: 'Quanto guardar, onde deixar esse dinheiro e como criar o hábito de poupar todo mês.' },
      { title: 'Consumo consciente', duration: '7 min', done: false, desc: 'A psicologia por trás do uso do dinheiro e como identificar compras por impulso.' },
      { title: 'Metas financeiras realistas', duration: '6 min', done: false, desc: 'Como transformar um sonho em uma meta com prazo e valor definidos.' },
    ],
  },
  investimentos: { label: 'Investimentos · Premium', locked: true, modules: [] },
  credito: { label: 'Crédito · Premium', locked: true, modules: [] },
};

export const stats = [
  { value: '42%', label: 'dos jovens de 18–24 já têm dívidas antes de terminar os estudos' },
  { value: '1 em 5', label: 'escolas brasileiras oferece conteúdo sobre finanças pessoais' },
  { value: '91%', label: 'dos jovens querem uma plataforma para aprender a organizar as finanças' },
];

export const courses = [
  { tag: 'FUNDAMENTOS', title: 'Orçamento Pessoal', desc: 'Como organizar entradas e saídas e parar de gastar no impulso.', img: imgOrcamento },
  { tag: 'FUNDAMENTOS', title: 'Poupança e Metas', desc: 'Defina metas claras e construa o hábito de guardar dinheiro.', img: imgPoupanca },
  { tag: 'INVESTIMENTOS', title: 'Juros Compostos', desc: 'Entenda o motor que faz o dinheiro crescer com o tempo.', img: imgJuros },
  { tag: 'INVESTIMENTOS', title: 'Investindo pela Primeira Vez', desc: 'Primeiros passos no Tesouro Direto e na renda fixa.', img: imgInvestindo },
  { tag: 'CRÉDITO', title: 'Crédito Consciente', desc: 'Como usar cartão e crédito sem cair na armadilha da dívida.', img: imgCredito },
  { tag: 'AVANÇADO', title: 'Cripto e Novos Ativos', desc: 'Uma introdução cuidadosa a criptomoedas e riscos envolvidos.', img: imgCripto },
];

export const leaderboard = [
  { medal: '🥈', name: 'Laila Degani', initials: 'LD', amount: 'R$ 380', bg: 'oklch(75% 0.01 150)', color: 'oklch(20% 0.02 150)', padding: '24px 16px', order: 1 },
  { medal: '🥇', name: 'Bernardo Arantes', initials: 'BA', amount: 'R$ 540', bg: 'oklch(72% 0.16 90)', color: 'oklch(22% 0.03 90)', padding: '32px 16px', order: 2 },
  { medal: '🥉', name: 'Pedro de Marco', initials: 'PM', amount: 'R$ 295', bg: 'oklch(64% 0.09 50)', color: 'white', padding: '24px 16px', order: 3 },
];

export const badgesList = [
  { icon: '🏆', title: 'Primeiro Investimento', desc: 'Primeiro Investimento: você concluiu seu primeiro módulo de investimentos.', opacity: 1 },
  { icon: '💰', title: 'Poupador do Mês', desc: 'Poupador do Mês: você bateu sua meta de economia este mês.', opacity: 1 },
  { icon: '🔥', title: '30 Dias de Streak', desc: '30 Dias de Streak: você usou o app por 30 dias seguidos.', opacity: 1 },
  { icon: '🎓', title: 'Trilha Completa', desc: 'Trilha Completa: reservado para quem concluir uma trilha inteira.', opacity: 0.45 },
];

export const freemiumFeatures = [
  'Conteúdo básico de educação financeira',
  'Trilha de aprendizado inicial',
  'Calculadora simples de gastos',
  'Resumo mensal financeiro',
  'Desafios gamificados para criar o hábito',
];

export const premiumFeatures = [
  'Trilhas completas e avançadas (investimentos, crédito, renda extra)',
  'Dashboard financeiro personalizado',
  'Metas de poupança com acompanhamento',
  'Simuladores (aposentadoria, financiamento, juros compostos)',
  'Conteúdo exclusivo em vídeo e microaulas',
  'Suporte via chat e comunidade exclusiva',
];

export const initialChatMessages = [
  { mine: false, name: 'Milena Wallau', initials: 'MW', text: 'Gente, separei minha mesada em 3 potes esse mês. Já sinto diferença no fim do mês.' },
  { mine: true, name: 'Você', initials: 'EU', text: 'Boa! Eu ainda gasto tudo antes de guardar rs. Como você começou?' },
  { mine: false, name: 'Milena Wallau', initials: 'MW', text: 'Comecei pelo curso de Orçamento Pessoal aqui do app, é rapidinho.' },
  { mine: false, name: 'Bernardo Arantes', initials: 'BA', text: 'Depois do módulo de juros compostos comecei a guardar 15% do salário todo mês.' },
  { mine: true, name: 'Você', initials: 'EU', text: 'Vou testar essa semana e conto pra vocês o resultado.' },
];

// ============================================================
// carregarNoticiasInfoMoney()
// Hoje popula o feed com manchetes fictícias, porque o front-end
// não pode chamar infomoney.com.br diretamente (bloqueio de CORS).
//
// Para usar dados reais no futuro, troque o array `noticiasFake`
// abaixo por um fetch em uma API de notícias financeiras, ou por
// um conversor de RSS→JSON apontando pro feed público do InfoMoney,
// por exemplo:
//
//   fetch('https://api.rss2json.com/v1/api.json?rss_url=' +
//     encodeURIComponent('https://www.infomoney.com.br/feed/'))
//     .then(r => r.json())
//     .then(data => setNewsItems(data.items.map((item, i) => ({
//       id: 'news-' + i,
//       img: newsImg1, // swap for item's own image
//       category: item.categories?.[0] || 'Mercados',
//       title: item.title,
//       summary: item.description?.replace(/<[^>]+>/g, '').slice(0, 140),
//     }))));
//
// Isso precisa rodar num backend próprio ou serviço proxy (a chamada
// direta ao RSS do InfoMoney também bate em CORS a partir do browser).
// ============================================================
export function carregarNoticiasInfoMoney() {
  return [
    { id: 'news-1', img: newsImg1, category: 'Mercados', title: 'Ibovespa fecha em alta puxado por ações de bancos e mineradoras', summary: 'Índice avança após dados de inflação mais fracos que o esperado nos EUA, aliviando pressão sobre juros globais.' },
    { id: 'news-2', img: newsImg2, category: 'Câmbio', title: 'Dólar cai para menor nível em três meses frente ao real', summary: 'Moeda americana recua com fluxo de capital estrangeiro para a bolsa brasileira e expectativa de corte da Selic.' },
    { id: 'news-3', img: newsImg3, category: 'Renda Fixa', title: 'Tesouro Direto: título IPCA+ 2035 volta a pagar mais de 6% ao ano', summary: 'Alta nos juros futuros abre janela de entrada para quem busca proteção contra a inflação no longo prazo.' },
    { id: 'news-4', img: newsImg4, category: 'Cripto', title: 'Bitcoin oscila após dados de emprego nos EUA', summary: 'Ativo testa suporte importante enquanto investidores avaliam impacto da política monetária americana sobre criptomoedas.' },
    { id: 'news-5', img: newsImg5, category: 'Política', title: 'Congresso avança pauta de reforma tributária sobre investimentos', summary: 'Projeto prevê mudanças na tributação de fundos e ativos financeiros; mercado acompanha votação de perto.' },
    { id: 'news-6', img: newsImg6, category: 'Economia', title: 'Selic: mercado já precifica próximo corte de juros pelo Copom', summary: 'Analistas revisam projeções após divulgação do IPCA, com reflexos diretos na renda fixa e no crédito.' },
  ];
}
