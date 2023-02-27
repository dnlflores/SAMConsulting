import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Story from './components/Story';
import Sessions from './components/Sessions';
import Contact from './components/Contact';
import './App.css';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
