import React from 'react'
import ReactDOM from 'react-dom/client'
import Providers from 'providers'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>
)
