
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexById/Pokemon404'
import Header from '../components/shared/Header'
import './styles/PokedexById.css'


const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })

  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  console.log(pokemon)

  return (
    <article className='pokedexById_container'>
      <Header />
      <header className='pokedexByID__header'>
        <img className='pokedexById__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='pokedexById__data'>
        <div className={`pokedexById__space bg-${pokemon?.types[0].type.name}`}></div>
        <h2 className='pokedexById_id'>{`# ${pokemon?.id}`}</h2>
        <h2 className={`pokedexById_name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <div className='pokedexById__hw-container'>
          <div className="pokedexById__height">
            <p className="pokedexById__label1">HEIGHT</p>
            <p className="pokedexById__label2">{pokemon?.height}</p>
          </div>
          <div className="pokedexById__weight">
            <p className="pokedexById__label1">WEIGHT</p>
            <p className="pokedexById__label2">{pokemon?.weight}</p>
          </div>
        </div>

        <div className='pokedexById__ta-container'>
          <div className='pokedexById__t-container'>
            <p className='pokedexById__ta-label'>TYPE</p>
            <ul className='pokedexById__type-container'>
              {
                pokemon?.types.map(type => (
                  <li key={type.slot} className={`pokedexById__type-type bg-${type.type.name}`}>{type.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div>
            <p className='pokedexById__ta-label'>ABILITIES</p>
            <ul className='pokedexById__ability-container'>
              {
                pokemon?.abilities.map(ability => (
                  <li key={ability.slot} className='pokedexById__ability'>{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h3 className='pokedexById__stats-title'>Stats</h3>
            <div className='pokedexById__stats-container'>
              {
                pokemon?.stats.map((stat) => (
                  <div>
                    <div className='pokedexById__stats-data-contanier' key={stat.stat.URL}>
                      <a className='pokedexById__stats-name'> {stat.stat.name}:</a>
                      <a className='pokedexById__stats-value'> {stat.base_stat} /150</a>
                      {/*const porcentage = marth.floor(${stat.base_stat} /150)*/}
                      
                    </div>  
                  <div className='pokedexById__stats-line-container'>
                     <div className='pokedexById__stats-line1'style={{ width: `${stat.base_stat/1.5}%` }} ></div>
                   <div className='pokedexById__stats-line2'style={{width: `${100-stat.base_stat/1.5}%`}} ></div>
                  </div>
                  
                  </div>

                ))}
            </div>
           
            <div style={{height:"20px"}}></div>
          </div>
        </div>
      </section>

      <section>
        <div className='pokedexById__movements-container'>
          <h2 className='pokedexById__movements-title'>Movements</h2>
          <ul className='pokedexById__moves-container'>
            {
              pokemon?.moves.map(move => (
                <li key={move.slot} className='pokedexById__move'>{move.move.name}</li>
              ))
            }
          </ul>

        </div>

      </section>
    </article>
  )
}
export default PokedexById
