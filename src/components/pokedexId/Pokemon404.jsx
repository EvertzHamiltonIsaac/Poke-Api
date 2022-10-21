import React from 'react'
import Header from '../pokedex/Header'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <div className="pokemon404__container">
      <div className="pokemon404__header">
        <Header/>
      </div>
      <div className="pokemon404__body">
        <div className="pokemon404__img">
          <img src="../images/poke-404/poke-404.jpg" alt="" />
        </div>
        <h1 className='pokemon404__title'> Pokemon not found! </h1>
      </div>
    </div>
  )
}

export default Pokemon404