import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';

function App() {
  return (
    <div className="store-other">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
