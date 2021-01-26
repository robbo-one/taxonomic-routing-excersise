import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { HashRouter as Router,Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
    <Router>
    <App />
    
    </Router>
    
    </>,
    document.getElementById('app')
  )
})
