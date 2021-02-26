// import logo from './logo.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import { Routes } from './core/Routes/Routes';
import './index.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Routes></Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
