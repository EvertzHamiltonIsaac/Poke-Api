import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setNametrainer } from '../../store/slices/nameTrainer';


const FormHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNametrainer(e.target.trainerName.value.trim()))
        navigate('/pokedex')
    }

    return (
        <article className="home__nameform">
            <form className='nameform' onSubmit={handleSubmit}>
                <div className="formHome__name">
                    <input type="text" className='home_input' placeholder='write your name...' id='trainerName'/>
                    <button className='home_btn'>Begin</button>
                </div>
            </form>
        </article>
    )
}

export default FormHome