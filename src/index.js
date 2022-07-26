import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {store} from "./components/store/contacts/index"
import './index.css';




// store.subscribe(()=> console.log(store.getState()))

// store.dispatch(addContact({
//   id: 1,
//  name:"fff",
//  number:"55555",
// }))

// store.dispatch(removeContact({
//   id: 1
// }))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <App />
  </Provider>
);
