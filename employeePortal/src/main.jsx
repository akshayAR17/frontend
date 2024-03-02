import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import LoginDetailsProvider from './Context/LoginDetailsProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginDetailsProvider>
    <BrowserRouter> 
    <App />
    </BrowserRouter> 
    </LoginDetailsProvider> 
  </React.StrictMode>,
)
