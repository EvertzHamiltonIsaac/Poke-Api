import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/Home.css'

const Home = () => {
  return (
    <section className="home__container">
        <header className="home__tittle">
        <img src="/images/home/image 11.png" alt="" />
        </header>
        <article className="home__subtittle">
            <h2>Hi trainer!</h2>
            <p>if you want to see the pokedex write your name</p>
        </article>
        <FormHome/>
    </section>
  )
}

export default Home