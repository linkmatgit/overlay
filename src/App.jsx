import './App.scss'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Timer from './Compteur'
import Card from './Card'
function App() {

  return (
    <div className="App">
        <Header />
        <Timer />
        <Card />
        <Footer />
    </div>
  )
}

export default App
