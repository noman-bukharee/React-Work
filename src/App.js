import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Contact from './contact';
import About from './about';
import Home from './home';
import Footer from './footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Switch from "react-switch";
function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
