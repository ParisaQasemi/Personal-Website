import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/outfit'
import '@fontsource/roboto'



// Rendering App component ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(

  // Entire app in React.StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
