import './App.css';
import {Header} from "../components/header/Header";
import {Movies} from "../components/movies/Movies";
import {Result} from "../components/result/Result";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <Result/>
        <Movies/>
    </div>
  );
}

export default App;
