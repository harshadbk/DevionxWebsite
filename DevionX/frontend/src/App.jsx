
import './App.css';
import Portfolio1 from './components/Portfolio1.jsx';
import About from './components/About.jsx'; // Ensure the case matches the file name
import Para from './components/para/Para.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Portfolio/> */}
        <Portfolio1/>
        <About />
        <Para/>
        <Card/>
      </div>
    </>
  )
}

export default App
