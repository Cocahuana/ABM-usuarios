import './App.css';
import { Routes, Route } from "react-router-dom";
import Personas from './components/Personas';
function App () {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={ <Personas /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
