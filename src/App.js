import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header count={count} setCount={setCount}></Header>
    </div>
  );
}

export default App;
