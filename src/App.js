import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count} setCount={setCount}></Home>
    </div>
  );
}

export default App;
