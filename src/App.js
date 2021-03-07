import { useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import { LoadingContext } from "./core/Loading/contexts/LoadingContext";
import { Loading } from "./core/Loading/Loading";
import { Routes } from './core/Routes/Routes';
import './index.scss';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
    <div className="App">
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <Loading></Loading>
      <Routes></Routes>
    </LoadingContext.Provider>
    </div>
    </Router>
  );
}

export default App;
