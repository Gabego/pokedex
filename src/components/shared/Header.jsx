import React from 'react'
import './styles/header.css'


const Header = () => {
  return (
    <header className='heater'>
        
        <div className="heater__red">
            <div className="heater__black"></div>
            <div className="heater__circle">
                <div className="heater__circle-in"></div>
            </div>
        </div>
        <img className='pokedex__img2' src="/images/home/pokedex.png" alt="" />
    </header>
  )
}

export default Header