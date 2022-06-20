import Image from 'next/image'
import React from 'react'
import { useTypedText } from '..'
import {
matiALoJojos,
matiAbrigo,
matiFuckBoy,
matiBrillando,
matiPlaya,
matiGato,
matiRosado,
matiTirandoRopa,
volcan,
estrellitasLindas
} from '../../assets'
import styles from './photogrid.module.scss'

export function VPhotoGrid() {
  return (
    <div className={styles.photoGrid}>
      <div className={styles.barca}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: asdasd', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="asdasd" src={estrellitasLindas} layout="fill"/>
      </div>
      <div className={styles.bridge}>
        <h2 className={styles.photoInfo}>
          {useTypedText('', 50)}
          <br/>
          {useTypedText('Date: 09.2019', 50)}
        </h2>
        <Image alt="asdasd" src={volcan} layout="fill"/>
      </div>
      <div className={styles.climb}>
        <h2 className={styles.photoInfo}>
          {useTypedText('asdasd', 50)}
          <br/>
          {useTypedText('Date: 10.2018', 50)}
        </h2>
        <Image alt="asdasd" src={matiALoJojos} layout="fill"/>
      </div>
      <div className={styles.eiffel}>
        <h2 className={styles.photoInfo}>
          {useTypedText('', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="asdasdr" src={matiAbrigo} layout="fill"/>
      </div>
      <div className={styles.murren}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 02.2021', 50)}
        </h2>
        <Image alt="" src={matiFuckBoy} layout="fill"/>
      </div>
      <div className={styles.church}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 06.2022', 50)}
        </h2>
        <Image alt="" src={matiBrillando} layout="fill"/>
      </div>
      <div className={styles.alps}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="" src={matiPlaya} layout="fill"/>
      </div>
      <div className={styles.wales}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 02.2020', 50)}
        </h2>
        <Image alt="" src={matiGato} layout="fill"/>
      </div>
      <div className={styles.chelsea}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="" src={matiRosado} layout="fill"/>
      </div>
      <div className={styles.arsenal}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="" src={matiTirandoRopa} layout="fill"/>
      </div>
      {/*<div className={styles.manchester}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.bowling}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 07.2018', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.cross}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 04.021', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.waterfall}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: ', 50)}
          <br/>
          {useTypedText('Date: 08.2017', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.boots}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 06.2019', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.sushi}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 10.2019', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.monument}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 07.2019', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.lake}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Tajty Lake, Wilkasy', 50)}
          <br/>
          {useTypedText('Date: 05.2021', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.skyscrapper}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.car}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 06.2019', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.ski}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:', 50)}
          <br/>
          {useTypedText('Date: 02.2021', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
      </div>
      <div className={styles.game}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place:, Katowice', 50)}
          <br/>
          {useTypedText('Date: 03.2019', 50)}
        </h2>
        <Image alt="" src={} layout="fill"/>
  </div>*/}
    </div>
  )
}

//TO-DO refactoring of VPhotoGrid