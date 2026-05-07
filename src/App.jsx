import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ItBerries from './components/ItBerries';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LoadingScreen = () => (
  <div className="loading-container">
    <div className="loading-content">
      <h1 className="loading-logo">TG</h1>
      <div className="loader"></div>
    </div>
  </div>
);

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulerar laddning i 1.5 sekunder
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 2. DENNA RAD MÅSTE LIGGA INUTI App-funktionen, före "return"
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ItBerries />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer /> {/* Den sista delen på plats! */}
    </div>
  );
}

export default App;
