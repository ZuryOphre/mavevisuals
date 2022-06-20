import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>
            MV
          </div>
          <h3 className={styles.name}>
            MAVEVISUALS
          </h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Home" ? {color: "#5C0588"} : {color: "#D5D5D5"}}>
            Inicio
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Work" ? {color: "#5C0588"} : {color: "#D5D5D5"}}>
            Portfolio
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "About" ? {color: "#5C0588"} : {color: "#D5D5D5"}}>
            Sobre mi
          </h3>
        </a>
      </Link>
    </nav>
  )
}