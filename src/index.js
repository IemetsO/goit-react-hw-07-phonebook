import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import storeP from './components/store/contacts/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storeP.store}>
    <PersistGate loading={null} persistor ={storeP.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
