import "./App.css";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing.component";
import AboutMe from "./components/aboutMe.component";
import Experience from "./components/experience.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";

function App() {
  return (
    <>
      <Navbar />
      <main>
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
