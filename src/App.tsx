import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
