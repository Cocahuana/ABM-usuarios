import './App.css';
import { Routes, Route } from "react-router-dom";
import CreatePeople from './components/Forms/CreatePeople';
import CreateCompany from './components/Forms/CreateCompany';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={ <CreatePeople /> } />
          <Route path="/Create/People" element={ <CreatePeople /> } />
          <Route path="/Create/Company" element={ <CreateCompany /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
