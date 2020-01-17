import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css' 

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// hot module replacement
// const rootEL = document.getElementById('root');

// let render = () => {
//     ReactDOM.render(<App />, rootEL);
// }

// if (module.hot) {
//     module.hot.accept("./App", () => {
//         setTimeout(render);
//     })
// }
