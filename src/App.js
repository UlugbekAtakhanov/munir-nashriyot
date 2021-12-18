import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aloqa from './pages/Aloqa/Aloqa';

// Pages
import Asosiy from "./pages/Asosiy/Home"



function App() {

  return (
    <div className="App">

      <Routes>
        <Route path = "/" element = {<Asosiy />} />
        <Route path = "/aloqa" element = {<Aloqa />} />
      </Routes>
        

    </div>
  );
}

export default App;
