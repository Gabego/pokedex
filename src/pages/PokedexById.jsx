
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
                  <li key={type.slot} className='pokedexById__type-type'>{type.type.name}</li>
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
            <p className='pokedexById__stats-label'>Stats</p>
            <ul className='pokedexById__stats-container'>
              {
                pokemon?.stats.map(stat => (
                  <li key={stat.name} className='pokedexById__stat-name'>{stat.stat.name}</li>
                ))
              }
              {
                pokemon?.stats.map(base_stat => (
                  <li key={base_stat.slot} className='pokedexById__stat-value'>{base_stat.base_stat}</li>
                ))
              }
            </ul>

          </div>
          </div>
    {/*}      <div className='Stats'>
        <h2>Stats Base</h2>
        {
          pokemon.stats?.map((stat) => (
            
             <div key={stat.stat.URL}>
              <b>{stat.stat.name}: </b> <div className='Stats1'><div style={{width:`${stateColor(stat.base_stat)}%`}} className='Stats2'> {stat.base_stat} /150</div></div>
            </div>
            
          ))
        }
      </div>*/}
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
