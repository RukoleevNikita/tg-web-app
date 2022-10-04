import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../src/hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);



  return (
    <div className="App">
      test bot
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
