import './App.css';
import  MenuBar  from './Components/navbar/MenuBar';
import Cadastro from './Components/Cadastro/Cadastro';
import Login from './Components/Login/login';
import Exercise  from './Components/Exercise/Exercicio';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home/home';
import Date from './Components/ExercicioData/ExercicioData';
function App() {
  return (
    <Router>
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home/>   
          </>
        }/>

        <Route path="/cadastro" element={
          <>
            <Cadastro/>
          </>
        }/>

        <Route path ="/login" element={
          <>
            <Login/>
          </>
        }/>

        <Route path ="/exercise" element={
          <>
            <Exercise/>
          </>
        }/>
        <Route path ="/exercises" element={
          <>
            <Date/>
          </>
        }/>

      </Routes>
  
    </div>
    </Router>
  );
}

export default App;