import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//화면 분기 처리를 위해 react-router-dom을 사용한다.
//HTML history api를 사용해서 url을 변경하는 기능을 제공한다.
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
  		<App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
