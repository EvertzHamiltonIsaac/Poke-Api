import React, { useEffect, useState } from 'react'
import axion from 'axios'
import './styles/cardpoke.css'
import { useNavigate } from 'react-router-dom'
import './styles/dinamics_colors.css'
const CardPoke = ({ pokeEndPoint }) => {   

    const navigate = useNavigate()

    const [pokeInfo, setPokeinfo] = useState()

    useEffect(() => {
        axion.get(pokeEndPoint)
            .then(res => setPokeinfo(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokeInfo?.id}`)
    }
    return (
        <article className={`carpoke__container border-${pokeInfo?.types[0].type.name}`}>

            <header className={`carpoke__header bg-${pokeInfo?.types[0].type.name}`}>
                <div className="cardpoke_img" onClick={handleClick}>
                    <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={pokeInfo?.name} />
                </div>
            </header>

            <div className="cardpoke__tittle">
                    <h3 className={`cardpoke__name letter-${pokeInfo?.types[0].type.name}`} onClick={handleClick}>{pokeInfo?.name}</h3>
                    <ul className="cardpoke__types">
                        {
                            pokeInfo?.types.map(type => (
                                <li className="cardpoke__type" key={type.type.url}>
                                    {type.type.name}
                                </li>
                            ))
                        }
                    </ul>
                    <p className="cardpoke__type-label">type</p>
                </div>

            <div className="card__body">
                <ul className="cardBody__elements">
                    {
                        pokeInfo?.stats.map(stat => (
                            <li className={`cardBody__element`} key={stat.stat.url}><span className="cardBody__span">{stat.stat.name}</span>{stat.base_stat}</li>
                        ))
                    }
                </ul>
            </div>
            
        </article>
    )
}

export default CardPoke