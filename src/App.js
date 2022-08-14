import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';


import Task2 from './Components/Task2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Task2/>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
