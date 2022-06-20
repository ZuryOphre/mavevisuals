import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import {
  VFooter,
  VMainHeader,
  VMenuBar,
  VToolsTech
} from '../../utils'
import {
  chevronDown,
  profilePicture
} from '../../assets'
import styles from './home.module.scss'

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Mavevisuals</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person." />
        <meta name="author" content="Zury Martinez"/>
        <meta name="keywords" content="Matias Velasquez, Portfolio, Photographer"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              <Image
                alt="Profile picture of Matias Velasquez."
                src={profilePicture}/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>Experiencia<br/>Laboral</h1>
              <h2 className={styles.linkBoxTextContent}>Aquí puedes conocer más sobre las empresas y personas con las que he colaborado, los proyectos en los que he formado parte y las tecnologías que utilizo a diario.</h2>
              <Link href={`/work/work`}>
                <a className={styles.linkBoxButton}>
                Mira mi historial laboral
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Tecnologías y herramientas con las que trabajo</h1>
            <VToolsTech/>
          </Fade>
        </div>
        <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>Sobre mi</h1>
                <h2 className={styles.linkBoxTextContent}>Aquí puedes saber más sobre mí, mis aficiones y el proyecto personal en el que estoy trabajando actualmente.</h2>
                <Link href={`/about/about`}>
                  <a className={styles.linkBoxButton}>
                  Conoce más sobre mí
                  </a>
                </Link>
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}
