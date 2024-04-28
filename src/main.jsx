import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Principal from './Principal'
import './assets/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NavBar/>
   <Principal/>
  </React.StrictMode>,
)
