import React from "react";
import logo from "./logo.svg";
import { RouteComponentProps } from "react-router-dom";
import "./App.css";

interface AppProps {
  history?: RouteComponentProps["history"];
}

function App({ history }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <p>Este es un microFront!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
