import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Navbar from '../src/lading-page/components/Navbar.jsx'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCartShopping } from '@fortawesome/sharp-regular-svg-icons'
// library.add(faCartShopping)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
