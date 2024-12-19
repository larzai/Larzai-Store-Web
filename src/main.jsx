import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/pt-sans/400.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
