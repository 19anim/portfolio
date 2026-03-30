import "./App.css";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing.component";
import AboutMe from "./components/aboutMe.component";
import Experience from "./components/experience.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";

function App() {
  return (
    // <div className="App w-screen h-screen flex flex-col items-center justify-center gap-4">
    //   <div className="text-3xl">https://v4.brittanychiang.com/#projects</div>
    //   <button className="btn btn-neutral">Neutral</button>
    // </div>
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
