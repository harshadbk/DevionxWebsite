import './App.css';
import Footer from './components/footer/Footer.jsx';
import BlogCards from './components/footer/BlogCards.jsx';
import Portfolio1 from './components/Portfolio1.jsx';
import About from './components/About.jsx';
import Para from './components/para/Para.jsx';
import Card from './components/Card/Card.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Land from './components/land/land.jsx';
import Services from './components/services/services.jsx';
import Industries from './components/industries/industries.jsx';

function App() {
  return (
    <>
    <Navbar />
      <div className='App'>
        <Land/>
        <Services/>
        <Industries/>
        <About />
        <Para/>
        <Card/>
        <Portfolio1/>
        <BlogCards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
