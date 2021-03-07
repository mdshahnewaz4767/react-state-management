import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';


export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("laptop");
  return (
    <div>
      <CategoryContext.Provider value={[category, setCategory]}>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
