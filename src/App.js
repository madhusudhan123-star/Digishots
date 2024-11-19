import './App.css';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Footer from './components/Footer';
import PortfolioAndReviews from './components/PortfolioAndReviews';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Header />
      <Second />
      <Fourth />
      <Third />
      <PortfolioAndReviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
