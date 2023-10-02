import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { todoStore } from './todo-store';
import { FacebookProvider } from 'react-facebook';
import showFinderStore from './showfinder-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FacebookProvider appId={"2391615111008547"} lazy>
      <Provider store={todoStore}>
        {/* <Provider store={showFinderStore}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </Provider> */}
      </Provider>
    </FacebookProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
