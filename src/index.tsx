import store from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';

function render(){
  const App = require('./app/App').default;
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

render();

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./app/App', render)
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

