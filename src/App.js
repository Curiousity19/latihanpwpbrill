import './App.css';
import './style/landingPage.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import TrendingGame from './components/TrendingGame';
import BestGame from './components/BestGame';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar judul="Steam"/>
        <Intro />
      </div>

      <div className='trending'>
        <TrendingGame />
      </div>

      <div className='best'>
        <BestGame />
      </div>

      <div className='myBG'>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
