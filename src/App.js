import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Events from  './Components/Events/Events'
import Membership from './Components/Membership/Membership';
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar />
                  <div className="content">
                      <Routes>
                          <Route exact path="/" element={<Home />}/>
                          <Route exact path="/" element={<Events />}/>
                          <Route exact path="/" element={<Membership />}/>
                      </Routes>
                </div>
          </Router>
      </div>
  );
}

export default App;
