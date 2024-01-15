import { useState } from 'react'
import s from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import { pizza } from './pizza'

function App() {
  const [data, useData] = useState(pizza)
  const [cart, setCart] = useState([])
  
  return (
    <>
      <Header cart={cart} />
      <div className={s.container}>
        <Content 
          data={data}
          useData={useData}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
}

export default App;
