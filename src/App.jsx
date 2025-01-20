import './App.css';
import Homepage from "./components/homepage";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Services from './components/services/services';
import Industries from './components/industries/industries';
import Portfolio from './components/Portfolio1';
import Blogs from './components/footer/BlogCards';
import About from './components/getintouch';
import Contact from './components/freequote';
import GetQuote from './components/getintouch';
import Faqs from './components/faqs/faqs';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/industries' element={<Industries/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/get-quote" element={<GetQuote/>} />
        </Routes>
        <Faqs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
