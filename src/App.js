import logo from './logo.svg';
import './App.css';
import Candidate from './components/Candidate';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/candidate" element={<Candidate/>}/>
        
        

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
