import "./App.css";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing.component";
import AboutMe from "./components/aboutMe.component";
import Experience from "./components/experience.component";
import Project1 from "./components/project1.component";
import Project2 from "./components/project2.component";
import Project3 from "./components/project3.component";
import Contact from "./components/contact.component";

function App() {
  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Experience />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
    </div>
  );
}

export default App;
