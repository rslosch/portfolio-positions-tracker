import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;