import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Auth0Provider
 domain="dev-ibohks5iw4hmbttd.us.auth0.com"
    clientId="vHOfJ0tIQy0shqIMjWi2hlIY5aoA7GnV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Router>
    <App/>
  </Router>
 
 </Auth0Provider>
);


