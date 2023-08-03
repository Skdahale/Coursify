// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          
          <Route exact path="/Home" element={<Home/>}></Route>
         </Routes>

      </Router>
      
    </div>
  );
}

export default App;
