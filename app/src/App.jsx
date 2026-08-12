import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomeTab from './components/tabs/HomeTab';
import ProblemaTab from './components/tabs/ProblemaTab';
import CursosTab from './components/tabs/CursosTab';
import CashaiTab from './components/tabs/CashaiTab';
import ComunidadeTab from './components/tabs/ComunidadeTab';
import RecompensasTab from './components/tabs/RecompensasTab';
import NoticiasTab from './components/tabs/NoticiasTab';
import PlanosTab from './components/tabs/PlanosTab';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', background: 'oklch(98% 0.004 150)', color: 'oklch(22% 0.01 150)', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <Nav tab={tab} setTab={setTab} />

      {tab === 'home' && <HomeTab goCourses={() => setTab('courses')} goCashai={() => setTab('cashai')} />}
      {tab === 'problema' && <ProblemaTab />}
      {tab === 'courses' && <CursosTab />}
      {tab === 'cashai' && <CashaiTab />}
      {tab === 'community' && <ComunidadeTab />}
      {tab === 'rewards' && <RecompensasTab />}
      {tab === 'news' && <NoticiasTab />}
      {tab === 'plans' && <PlanosTab />}

      <Footer />
    </div>
  );
}

export default App;
