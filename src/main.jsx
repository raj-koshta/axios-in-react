import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Movie from './pages/Movie.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movie />
  </StrictMode>,
)
