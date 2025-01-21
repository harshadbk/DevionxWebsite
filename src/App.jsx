import './App.css';
import Homepage from "./components/homepage";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Services from './pages/myservices';
import Industries from './components/industries/industries';
import Portfolio from './components/Portfolio1';
import Blogs from './components/footer/BlogCards';
import About from './components/First';
import Contact from './components/freequote';
import GetQuote from './components/getintouch';
import Faqs from './components/faqs/faqs';
import Products from './pages/products';
import Testimonials from './components/testimonials';

import Service1 from './pages/services/service1';
import Service2 from './pages/services/service2';
import Service3 from './pages/services/service3';
import Service4 from './pages/services/service4';
import Service5 from './pages/services/service5';
import Service6 from './pages/services/service6';

import Industrie from './pages/industries/industries';
import Industry1 from './pages/industries/industry1';
import Industry2 from './pages/industries/industry2';
import Industry3 from './pages/industries/industry3';
import Industry4 from './pages/industries/industry4';
import Industry5 from './pages/industries/industry5';
import Industry6 from './pages/industries/industry6';

import Product1 from './pages/product/product1';
import Product2 from './pages/product/product2';
import Product3 from './pages/product/product3';
import Product4 from './pages/product/product4';

import Carrier from './pages/company/carrier';
import Leadership from './pages/company/leadership';

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
          <Route path="/myservices" element={<Services/>} />
          <Route path='/industries' element={<Industries/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/get-quote" element={<GetQuote/>} />

          <Route path='/service1' element={<Service1/>}/>
          <Route path='/service2' element={<Service2/>}/>
          <Route path='/service3' element={<Service3/>}/>
          <Route path='/service4' element={<Service4/>}/>
          <Route path='/service5' element={<Service5/>}/>
          <Route path='/service6' element={<Service6/>}/>

          <Route path='/myindustries' element={<Industrie/>}/>
          <Route path='/industry1' element={<Industry1/>}/>
          <Route path='/industry2' element={<Industry2/>}/>
          <Route path='/industry3' element={<Industry3/>}/>
          <Route path='/industry4' element={<Industry4/>}/>
          <Route path='/industry5' element={<Industry5/>}/>
          <Route path='/industry6' element={<Industry6/>}/>

          <Route path='/product1' element={<Product1/>}></Route>
          <Route path='/product2' element={<Product2/>}></Route>
          <Route path='/product3' element={<Product3/>}></Route>
          <Route path='/product4' element={<Product4/>}></Route>

          <Route path='/testimonials' element={<Testimonials/>}></Route>
          <Route path='/carrier' element={<Carrier/>}></Route>
          <Route path='/leadership' element={<Leadership/>}></Route>
          
        </Routes>
        <Faqs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
