import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<About sidebar={<SideBar />} />} />
          <Route
            path="/projects"
            element={<Projects sidebar={<SideBar />} />}
          />
          <Route path="/blog" element={<Blog sidebar={<SideBar />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
