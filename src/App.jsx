import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./views/hero";
import Services from "./views/services";
import Project from "./views/projects";
import Contact from "./views/contact";
import Footer from "./components/footer";
import ProjectTemplate from "./views/projectDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Contact />
            </>
          }
        />
        {/* Route for individual project details */}
        <Route path="/projects/:id" element={<ProjectTemplate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;