import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Matias Velasquez Portfolio Page" />
        <meta name="author" content="Zury Martinez"/>
        <meta name="keywords" content="Matias Velasquez, Portfolio, Photographer"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              Evolucion de mi trabajo fotografico
            </h1>
            <h2>
            Todo comenzó con la fotografía móvil, por el 2011 en pleno auge le la telefonía móvil con Apple y Nokia.
            En el año 2013 cuando la telefonía móvil estaba en la guerra de los megapixeles
            y el iPhone 5s estrenaba una cámara capaz de grabar en 120fps, mientras que Nokia 
            sacaba su buque insignia “Lumia 1020” con el primer sensor de 41 megapixeles. 
            Yo mientras tanto comencé con un iPhone 5, cuyas fotografías comenzaron entre amigos, 
            pero cada vez que salía con mis amigos ocurría una cosa al momento de hacer fotos… 
            sentía que ellos no me sacaban buenas fotografías, ni comprendían el cómo quería salir, 
            y siempre ellos me demostraban con sus expresiones de satisfacción al ver sus fotografías 
            hechas por mi, finalmente me dejaban a mi a sacar fotos. Mi primera cámara réflex la obtuve 
            en el año 2020 con una Canon 70D, desde entonces ya tenía conocimientos avanzados de edición 
            fotográfica con Lightroom y Photoshop. Desde entonces mi creatividad no se ha detenido, 
            y siempre con un enfoque, desterrando de las personas su lado más fotogénico y visual.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}