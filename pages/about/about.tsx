import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {
  VMenuBar,
  VPhotoGrid,
  VFooter
} from '../../utils'
import styles from './about.module.scss'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Matias velasquez Portfolio Page" />
        <meta name="author" content="Zury Martinez"/>
        <meta name="keywords" content="Matias Velasquez, Portfolio, Photographer"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              Sobre mi
            </h1>
            <h2>
            Mi objetivo en este mundo es poder crear una realidad y manipular lo justo para demostrar un sentimiento. Mi vocación está en la fotografía, específicamente amo poder plasmar un recuerdo, un sentimiento, un pensamiento a través de un lente, un sujeto y un ambiente. Grabar videos también me gusta, específicamente me encanta poder mostrar cómo puedo mostrarte la realidad a través de una ficción o incuso llevando la realidad a otro plano. Esto es una disciplina que consiste en ver el arte donde otros no, También practico calistenia, amo caminar y viajar por donde vea la oportunidad de llegar. Es lo que más me relaja. Constantemente estoy detrás de una computadora o dispositivo para saber qué es lo que la gente busca, o más bien lo que aún no encuentran.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.photoGallery}>
            <h1>
              Galeria de Fotos personales 
            </h1>
            <h2>
              Creo que las imágenes de las acciones hablan más que las palabras. Al mirar las imágenes a continuación, puede tener una idea de qué persona soy fuera del trabajo.
              <br/>
              <br/>
              Pase el cursor sobre la foto para obtener más detalles.
            </h2>
            <VPhotoGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}