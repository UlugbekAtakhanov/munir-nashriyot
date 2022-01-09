import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aloqa from './pages/Aloqa/Aloqa';
import Yangilik from './pages/YangilikSpecItem/Yangilik';

// Pages
import Asosiy from "./pages/Asosiy/Home"



function App() {

  return (
    <div className="App">

      <Routes>
        <Route path = "/" element = {<Asosiy />} />
        <Route path = "/aloqa" element = {<Aloqa />} />
        <Route path = "/yangiliklar/:id" element = {<Yangilik />} />
      </Routes>
        

    </div>
  );
}

export default App;
