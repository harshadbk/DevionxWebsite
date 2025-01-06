import './App.css';
import Portfolio1 from './components/Portfolio1.jsx';
import About from './components/About.jsx'; // Ensure the case matches the file name
import Para from './components/para/Para.jsx';
import Card from './components/Card/Card.jsx';
import BlogCards from './components/Footer/BlogCards.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Portfolio/> */}
        
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
