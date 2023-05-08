import Popular from './components/Popular'
import './App.css';
import Hero from './components/Hero';
import Special from './components/Special';
import Blog from './components/Blog';
import Trip from './components/Trip';
import Gallery from './components/Gallery';
import Travelers from './components/Travelers'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Popular/>
      <Special/>
      <Blog/>
      <Trip/>
      <Gallery/>
      <Travelers/>
      <Footer/>
    </div>
  );
}

export default App;
