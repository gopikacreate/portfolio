
import './App.css';
import Portfolio from './components/portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/projects';

function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Portfolio />}></Route>
     <Route path="projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
