import { VIcon } from './icon'
import {
  mailLogo,
  mailLogoHover,
  instagramLogo,
  instagramLogoHover,
  youtubeLogo,
  youtubeLogoHover
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare}/>
      <h4 className={styles.copyrights}>
      ©2022 MAVEVISUALS. All rights reserved.
        <br/>
        design & development with ♡ by <span>Zury Martinez</span>
      </h4>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={instagramLogo}
          onHoverIcon={instagramLogoHover}
          href="https://www.instagram.com/mavevisuals_/"
          height="30px"
          width="30px"
          name="Instagram"/>
        <VIcon
          defaulIcon={mailLogo}
          onHoverIcon={mailLogoHover}
          href="mailto:contacto@mavevisuals.com"
          height="30px"
          width="30px"
          name="mail"/>
        <VIcon
          defaulIcon={youtubeLogo}
          onHoverIcon={youtubeLogoHover}
          href="https://www.youtube.com/channel/UCVg4luXoZkjVbuvuZeYUaiA"
          height="30px"
          width="30px"
          name="YouTube"/>
      </div>
    </footer>
  )
}