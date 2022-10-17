import React from 'react'
import './styles/heater.css'


const Footer = () => {
  return (
    <heater className='heater'>
        
        <div className="heater__red">
            <div className="heater__black"></div>
            <div className="heater__circle">
                <div className="heater__circle-in"></div>
            </div>
        </div>
        <img className='pokedex__img2' src="/images/home/pokedex.png" alt="" />
        
    </heater>
  )
}

export default Footer