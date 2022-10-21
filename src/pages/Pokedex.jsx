import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './styles/pokedex.css'
import axios from 'axios'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectBytype from '../components/pokedex/SelectBytype'
import Header from '../components/pokedex/Header'
import Pagination from '../components/pokedex/Pagination'

const Pokedex = () => {

  const userName = useSelector(state => state.NameTrainer)

  const [pokemon, setPokemon] = useState()
  const [selectData, setSelectData] = useState('All Pokemons')

  useEffect(() => {

    if (selectData !== 'All Pokemons') {
      axios.get(selectData)
        .then(res => {
          const result = res.data.pokemon.map(e => (e.pokemon))
          setPokemon(result)
        })
        .catch(err => console.log(err))

    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
      axios.get(URL)
        .then(res => setPokemon(res.data.results))
        .catch(err => console.log(err))
    }

  }, [selectData])

  //Pagination logic
  const [page, setPage] = useState(1)
  const [pokePerPage, setpokePerPage] = useState(9)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  return (
    <section className="pokedex__container">
      <header className="pokedex__header">
        <Header />
      </header>

      <div className="pokedex__body">

      <div className="pokedex__welcome">
        <p>Welcome <span className='pokedex__span__name'>{userName}</span>, here you can find your favorite pokemon.</p>
      </div>

      <div className='pokedex_inputs'>
        <InputSearch />        
          <SelectBytype
            setSelectData={setSelectData}
            setPage={setPage}
          />       
          
      </div>

      
      <article className="pokedex__cards">
        {
          pokemon?.slice(initialPoke, finalPoke).map(poke => (
            <CardPoke
              key={poke.url}
              pokeEndPoint={poke.url}
            />
          ))
        }
      </article>

      <div className="pokedex__pagination">
      <Pagination
       page={page}
       pagesLength={ pokemon && Math.ceil(pokemon.length / pokePerPage)}
       setPage={setPage}
      />
      </div>

      </div>
    </section>
  )
}

export default Pokedex