import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Home darkMode={darkMode} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
};

export default App;