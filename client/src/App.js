import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import AddCompany from './components/Forms/AddCompany';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Recruiters from './components/Recruiter/Recruiters';
function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Client" element={ <AddCompany /> } />
        <Route path="/Recruiter" element={ <Recruiters /> } />
        <Route path="/Recruiter/add" element={ <CreatePeople /> } />
      </Routes>
    </>
  );
}

export default App;
