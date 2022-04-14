import NavBar from "./navigation/NavBar";
import Login from "./sessions/Login";
import Home from "./static/Home";
import Signup from "./sessions/Signup";
import InvestmentList from "./Investments/InvestmentList";
import InvestmentForm from "./Investments/InvestmentForm";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/investments' element={ <InvestmentList /> } />
        <Route path='/investments/new' element={ <InvestmentForm /> } />
      </Routes>
    </Router>
  );
}

export default App;