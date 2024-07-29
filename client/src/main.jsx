import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-0j5tqy64zwue15mk.us.auth0.com"
    clientId="agJGCI0OzqIi58Yp4nWMw54qRvuzJqjP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider></BrowserRouter>
)
