import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/quiz';
import Progresso from './pages/progresso';
import Forgot from './pages/forgot';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL} > 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/progresso' element={<Progresso />} />
          <Route path='/quiz' element={<Quiz />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;