import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import AddCompany from './components/Forms/AddCompany';
import Home from './components/Home';
import NavBar from './components/NavBar';
function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Client" element={ <CreatePeople /> } />
        <Route path="/Recruiter" element={ <AddCompany /> } />
      </Routes>
    </>
  );
}

export default App;
