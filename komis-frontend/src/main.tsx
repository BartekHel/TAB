import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/MainPage.tsx'
import './index.css'
import CarDetails from './pages/CarDetails.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
