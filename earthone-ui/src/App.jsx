import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Product from "./components/products/Product";
import Slider from "./components/slider/Slider";
import Services from "./components/services/Services";
import Feedback from "./components/feedback/Feedback";
import FAQ from "./components/faq/FAQ";
import LearnMore from "./components/learnmore/LearnMore";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Product />
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#779d77"
            fillOpacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,90.7C240,75,300,85,360,112C420,139,480,181,540,197.3C600,213,660,203,720,218.7C780,235,840,277,900,288C960,299,1020,277,1080,240C1140,203,1200,149,1260,128C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Slider />
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#242424"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Services />
      <div className="wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#779d77"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Feedback />
      <div className="wave4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#242424"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div id="faq-section">
        <FAQ />
      </div>
      <LearnMore />
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
