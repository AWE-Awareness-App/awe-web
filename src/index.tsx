import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UnderConstruction from './pages/UnderConstruction.tsx'

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

// Function to check URL parameter
const getQueryParam = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Check if maintenance mode is enabled via env variable
const envMaintenance = process.env.REACT_APP_UNDER_MAINTENANCE === "true";
console.log(process.env.REACT_APP_UNDER_MAINTENANCE);

// Allow overriding via query param (?underMaintenance=true or false)
const queryMaintenance = getQueryParam("underMaintenance");
const isUnderMaintenance = queryMaintenance === "true" ? true : queryMaintenance === "false" ? false : envMaintenance;

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    {isUnderMaintenance ? <UnderConstruction /> : <App />}
  </React.StrictMode>
)