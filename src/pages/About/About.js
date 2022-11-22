import React from 'react'
import styles from './About.css'
import {Link, link} from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em um blog feito com React no Front-End e Firebase no Back-End</p>
        <p>Projeto feito por <span>Gabriel Krapp</span></p>
        <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About