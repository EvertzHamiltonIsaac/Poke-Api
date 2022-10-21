import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './styles/pokedexById.css'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/pokedex/Header'
import '../components/pokedex/styles/dinamics_colors.css'

const PokedexById = () => {
  const { id } = useParams()

  const [pokeinfoId, setPokeinfoId] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(URL)
      .then(res => setPokeinfoId(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  console.log(pokeinfoId);

  return (
    <>
    <Header />
    <article className="pokedex-by-Id__container">
      

      <div className="pokedexbyid__principal__container">
        <header className={`pokedex-by-id__tittle bg-${pokeinfoId?.types[0].type.name}`}>
          <div className="pokedex-by-id_img">
            <img src={pokeinfoId?.sprites.other['official-artwork'].front_default}
              alt={pokeinfoId?.name} />
          </div>
        </header>

        <div className={`pokedexbyId_tittle__text letter-${pokeinfoId?.types[0].type.name}`}>
          <h2 className='pokedexbyId_tittle_id'>#{pokeinfoId?.id}</h2>
          <h2>{pokeinfoId?.name}</h2>
        </div>

        <div className="pokedexbyId__size">
          <div className="pokedexbyId__height">
            <p>Height</p>
            <span>{pokeinfoId?.height}</span>
          </div>
          <div className="pokedexbyId_weight">
            <p>Weight</p>
            <span>{pokeinfoId?.weight}</span>
          </div>
        </div>

        <div className="pokedexbyId__type-abilities">
          <div className="type__container">

            <h4>Types</h4>
            <ul className='type__list'>
              {
                pokeinfoId?.types.map(type => (
                  <li className={`type__element bg-${pokeinfoId?.types[0].type.name}`}
                    key={type.type.url}
                  >{type.type.name}</li>
                ))
              }
            </ul>

          </div>
          <div className="abilities__container">
            <h4>Abilities</h4>
            <ul className='abilities__list'>
              {
                pokeinfoId?.abilities.map(ability => (
                  <li className='abilities__element'
                    key={ability.ability.url}
                  >{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </div>


        <div className="pokedexbyId__stats__container">
          <h2 className='stast__title'>Stats</h2>
          <ul className='stats__list'>
            {
              pokeinfoId?.stats.map(stat => (
                <li className={`stats_element `} key={stat.stat.url}>
                  <div className="stat_element_header">
                    <span>{stat.stat.name}</span>
                    <span className={`stat_element_value`}>{stat.base_stat}/150</span>
                  </div>

                  <div className="bar_stat">
                    <div className={`bar_progress bg-${pokeinfoId?.types[0].type.name}`} style={{ width: `${Math.ceil(((stat.base_stat) * (100)) / (150))}%` }}></div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>


      </div>
      <div className="pokedexbyId__movements__container">
        <h2>Movements</h2>
        <ul className='movements__list'>
          {
            pokeinfoId?.moves.slice(0, 24).map(move => (
              <li className='movements__element' key={move.move.url}>
                {move.move.name}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
    </>
  )
}

export default PokedexById