import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hola a todos!", 50)}
        <br/>
        {useTypedText("Soy Matias.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Bienvenido a mi Portafolio Soy fotografo y camarografo, inquieto por naturaleza, actualmente vivo en Puerto Montt, Chile", 30, 350)}
      </h2>
    </div>
  )
}