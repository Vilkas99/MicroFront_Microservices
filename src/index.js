import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Funciones que se ejecutan desde el contenedor
//El nombre del microfront debe coincidir con el nombre aquí asignado (En este caso, "microfront")

// Renderizamos el microfront
window.rendermicrofront = (containerId, history) => {
  ReactDOM.render(
    <App history={history}/>,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountmicrofront = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Montamos el componente en la raiz si en el documento no encontramos el id 
if (!document.getElementById('microfront-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
