import React from 'react';
import './App.css';
import Input from './Input';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Prefooter from './Pre-footer';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Input />
     <Prefooter />
     <Footer />
    </div>
  );
}

export default App;
