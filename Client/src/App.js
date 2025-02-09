import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Start from './Components/Start';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Start />} />
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
