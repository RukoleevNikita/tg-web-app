import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../src/hooks/useTelegram';
import Header from './components/Header/Header';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>
        toggle
      </button>
    </div>
  );
}

export default App;
