import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import AddCompany from './components/Forms/AddCompany';
import Home from './components/Home';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Create/People" element={ <CreatePeople /> } />
        <Route path="/Add/Company" element={ <AddCompany /> } />
      </Routes>
    </div>
  );
}

export default App;
