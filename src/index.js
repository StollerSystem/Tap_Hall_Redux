import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer, 
  {masterTapList: [
    {name: "Viking Mead", brand: "Skull Crusher", price: "4.50", alcoholContent: "8.5", quantity: "10", id:"10001" },
    {name: "Dansk Blod", brand: "Einstök", price: "5.50", alcoholContent: "6.5", quantity: "0", id:"10002" },
    {name: "Savage Pilsner", brand: "Ragnar", price: "3.50", alcoholContent: "3.5", quantity: "124", id:"10003" }
  ]});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
