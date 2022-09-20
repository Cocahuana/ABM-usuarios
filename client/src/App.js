import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import AddCompany from './components/Forms/AddCompany';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Admin from './components/Admin/Admin'
import Candidate from './components/Candidate/Candidates'
import Client from './components/Client/Clients'
import Recruiters from './components/Recruiter/Recruiters';
import FormUpdatePeople from './components/Forms/FormUpdatePeople';
import Auth from './components/Auth/Auth';
import useToken from './CustomHooks/useToken';
import RoutesAdmin from './routes/RoutesAdmin';
function App () {
  // const tipoAdmin = 0;
  // const tipoCandidato = 1;
  // const tipoCliente = 2;
  // const tipoRecruiter = 3;

  const { token, setToken } = useToken();

  if ( !token )
  {
    return <Auth setToken={ setToken } />
  }

  return (
    <>
      <NavBar />
      { token === 'admin' ? <RoutesAdmin /> : <h1>No way men</h1> }
    </>
  );
}

export default App;
