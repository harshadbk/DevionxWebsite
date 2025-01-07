import './App.css';
import Footer from './components/footer/Footer';
import BlogCards from './components/footer/BlogCards';
import Portfolio1 from './components/Portfolio1';
import Getintouch from './components/getintouch';
import Freequote from './components/freequote';
import About from './components/About';
import Para from './components/para/Para';
import Card from './components/Card/Card';
import Navbar from './components/navbar/navbar';
import Land from './components/land/land';
import Services from './components/services/services';
import Industries from './components/industries/industries';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <section id="land">
          <Land />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="para">
          <Para />
        </section>
        <section id="card">
          <Card />
        </section>
        <section id="portfolio1">
          <Portfolio1 />
        </section>
        <section id="freequote">
          <Freequote />
        </section>
        <section id="getintouch">
          <Getintouch />
        </section>
        <section id="blog-cards">
          <BlogCards />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
