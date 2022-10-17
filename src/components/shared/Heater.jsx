import React from 'react'
import './styles/heater.css'


const Footer = () => {
  return (
    <heater className='heater'>
        <img className='pokedex__img' src="/images/home/pokedex.png" alt="" />
        <div className="heater__red">
            <div className="heater__black"></div>
            <div className="heater__circle">
                <div className="heater__circle-in"></div>
            </div>
        </div>
        
    </heater>
  )
}

export default Footer