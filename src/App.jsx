import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import PageNF from './pages/pageNF/pageNF';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-EN6GC35M65');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, []);

  useEffect(() => {
    // Send page view on route change
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNF />} />
      </Routes>
    </div>
  );
}

export default App