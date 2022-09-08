import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import CreateCompany from './components/Forms/CreateCompany';
import Home from './components/Home';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Create/People" element={ <CreatePeople /> } />
        <Route path="/Create/Company" element={ <CreateCompany /> } />
      </Routes>
    </div>
  );
}

export default App;
