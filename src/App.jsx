import Background from './components/Background';
import Header from './components/Header';
import Features from './components/Section1';
import Testimonials from './components/Section2';
import Pricing from './components/Section3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Background className="absolute inset-0" />
      <div className="flex flex-col">
        <Header />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
