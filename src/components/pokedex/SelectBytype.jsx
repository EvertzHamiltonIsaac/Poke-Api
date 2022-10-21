import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/selectBytype.css'


const SelectBytype = ({setSelectData, setPage}) => {

    const [typedata, setTypedata] = useState()
   

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type`
        axios.get(url)
        .then(res => setTypedata(res.data.results))
        .catch(err => console.log(err))

    }, [])
    
    const handleChange = e => {
        setSelectData(e.target.value)
        setPage(1)
    }
    
  return (
    <select onChange={handleChange} className='select__pokemons'>
        <option value="All Pokemons">All Pokemons</option>
        {
            typedata?.map(type => (
                <option value={type.url} key={type.url}>
                    {type.name}
                    </option>
            ))
        }
    </select>
  )
}

export default SelectBytype