import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UnderConstruction from './pages/UnderConstruction.tsx'

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const isUnderMaintenance = process.env.REACT_APP_UNDER_MAINTENANCE === "true";

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    {isUnderMaintenance ? <UnderConstruction /> : <App />}
  </React.StrictMode>
)