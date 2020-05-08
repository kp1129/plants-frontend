import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {plantsReducer} from './reducers/plantsReducer';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// create redux store
const store = createStore(plantsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


