import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </Router>
  );
}

export default App;