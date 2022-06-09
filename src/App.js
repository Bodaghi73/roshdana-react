import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//components
import Home from "./pages/home.js";

//css
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
