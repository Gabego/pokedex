import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'


const pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState('All Pokemons')

    useEffect(() => {

        if (typeSelected !== 'All Pokemons') {
            axios.get(typeSelected)
                .then(res => {
                    const result = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(result)
                })
                .catch(err => console.log(err))
        } else {
            const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1200offset=0'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])

    const userName = useSelector(state => state.userName)

    //LOGICA DE PAGINACION
const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(8)
const initialPoke  = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage



    return (
        <div className='pokedex__container'>
            <Header />
            <header className='pokedex__header-card'>
                <div className="space"></div>
                  <p className='pokedex__welcome'><span className='pokedex__welcome-red'>Welcome {userName}</span>, here you can find your favorite pokemon.</p>
            </header>
            <Pagination   
             page={page}
             pagesLength={pokemons &&  Math.ceil(pokemons?.length / pokePerPage)}
             setPage = {setPage}
             />
            <aside className='pokedex__aside'>
                <InputSearch />
            
                <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
            </aside>

            <main className='pokedex__main'>
                <div className='card-container'>
                    {
                        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                            <CardPoke
                                key={pokemon.url}
                                url={pokemon.url}
                            />
                        ))
                    }
                </div>
            </main>
            <Pagination   
             page={page}
             pagesLength={pokemons &&  Math.ceil(pokemons?.length / pokePerPage)}
             setPage = {setPage}
             />
        </div>
    )
}

export default pokedex