import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route/>
      </Routes>
      </div>
      <Footer />
      </Router>
      )
  
}

export default App;