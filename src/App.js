import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//components
import Header from "./components/header";
import Home from "./pages/home";
import AdvanceSearch from "./pages/advanceSearch";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AdvanceSearch" element={<AdvanceSearch/>}/>
      </Routes>

    </Router>
  );
}

export default App;
