import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Container from './container'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
  </StrictMode>
)
