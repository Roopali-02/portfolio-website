import './App.css';
import Navbar from './components/Navbar';
import Home from './scenes/Home';
import Skills from './scenes/Skills';
import Contact from './scenes/Contact';
import Projects from './scenes/Projects';
import About from './scenes/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills />
      <Projects />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
