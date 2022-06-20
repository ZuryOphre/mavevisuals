import React from 'react'
import { VIcon } from '../icon'
import {
  windowsLogo,
  windowsLogoHover,
} from '../../assets'
import styles from './toolstech.module.scss'

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={windowsLogo}
          onHoverIcon={windowsLogoHover}
          height="50px"
          width="50px"
          name="Windows 10"
          tooltipID="windows-tooltip" />
      </div>
    </div>
  )
}
