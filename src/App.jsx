import "./App.css";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing.component";
import AboutMe from "./components/aboutMe.component";
import Experience from "./components/experience.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";
import Spotlight from "./components/motion/spotlight.component";
import Preloader from "./components/motion/preloader.component";

function App() {
  return (
    <>
      <Preloader />
      <Spotlight />
      <Navbar />
      <main className="site-main">
        <LandingPage />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
