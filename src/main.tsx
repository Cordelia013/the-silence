import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/reset.css'
import './index.css'
import './tailwind.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
