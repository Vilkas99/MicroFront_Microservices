import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouteComponentProps } from "react-router-dom";
import App from "./App";

declare global {
  interface Window {
    rendermicrofront: any;
    unmountmicrofront: any;
  }
}

//Funciones que se ejecutan desde el contenedor
//El nombre del microfront debe coincidir con el nombre aquí asignado (En este caso, "microfront")

// Renderizamos el microfront
window.rendermicrofront = (
  containerId: string,
  history: RouteComponentProps["history"]
) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

// unmount micro frontend function
window.unmountmicrofront = (containerId: string) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId)!);
};

// Montamos el componente en la raiz si en el documento no encontramos el id
if (!document.getElementById("microfront-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}