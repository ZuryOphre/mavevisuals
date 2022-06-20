{/*import Image from 'next/image'*/}
import {
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>Experiencias y recomendaciones</h1>
        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              {/*<Image
                alt="University of Silesia logo."
                src={usLogo}
                height={50}
  width={50}/>*/}
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Compañia, persona o empresa</h1>
              <h2 className={styles.cardContentDetails}>lugar</h2>
              <h2 className={styles.cardContentDetails}>año</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            descripcion
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <h1>año</h1>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              {/*<Image
                alt="Wasko company logo."
                src={waskoLogo}
                height={13}
width={55}/>*/}
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Compañia, persona o empresa</h1>
              <h2 className={styles.cardContentDetails}>lugar</h2>
              <h2 className={styles.cardContentDetails}>año</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            descripcion
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              {/*<Image
                alt="Noble Systems company logo."
                src={nobleLogo}
                height={50}
width={50}/>*/}
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Compañia, persona o empresa</h1>
              <h2 className={styles.cardContentDetails}>lugar</h2>
              <h2 className={styles.cardContentDetails}>año</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            descripcion
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>
    </div>
  )
}