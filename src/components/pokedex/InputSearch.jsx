import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()  
        navigate(`/pokedex/${e.target.SearchingPoke.value.trim().toLowerCase()}`)
    }

  return (
    <article className="inputSearch__container" onSubmit={submit}>
        <form className='inputSearch__form'>
            <input type="text" placeholder='Search a pokemon'  id='SearchingPoke' className='inputSearch__input'/>
            <button className='inputSearch__btn'>Search</button>
        </form>
    </article>
  )
}

export default InputSearch