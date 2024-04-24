import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/MainPage.tsx'
import './index.css'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)
