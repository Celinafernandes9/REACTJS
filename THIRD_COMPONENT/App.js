// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import {Home} from './Components/Home';
import {About} from './Components/About';
import {Navbar} from './Components/Navbar';
import { Order } from './Components/Order';
import { ErrorMsg } from './Components/ErrorMsg';
import { Product } from './Components/Product';
import { Collection } from './Components/Collection';
import { Men } from './Components/Men';
import { Women } from './Components/Women';

function App() {
  return (
    <>
    
    <Navbar/>

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/collection' element={<Collection/>}></Route>
      <Route path='*' element={<ErrorMsg/>}></Route>
      
      <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>

        <Route path='women' element={<Women/>}/>
      </Route>

    </Routes>
    </>
  );
}

export default App;
