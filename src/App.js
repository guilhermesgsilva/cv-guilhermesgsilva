import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
