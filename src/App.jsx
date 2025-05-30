import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Services } from "./components/Services/Services";
import { Works } from "./components/Works/Works";
import { Skills } from "./components/Skills/Skills";
import { ProjectPage } from "./components/ProjectPage/ProjectPage";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Services />
              <Skills />
              <Works />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/project/:id"
          element={
            <>
              <Navbar />
              <ProjectPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
