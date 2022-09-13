import Image from 'next/image'

import styles from './styles.module.scss'

import projects from './assets/someprojects.svg'
import mobileProjects from './assets/mobilesomeprojects.svg'
import planethorse from './assets/planethorse.png'
import megahyped from './assets/megahyped.png'
import chatr from './assets/chatr.png'
import portales from './assets/portales.png'

const ProjectsContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.title}>
            <Image src={projects} alt='Projects' height={330}/>
          </div>

          <div className={styles.mobileTitle}>
            <Image src={mobileProjects} alt='Projects' width={200}/>
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <div className={styles.projectsGrid}>
            <Image src={planethorse} alt='Planet Horse' width={200} height={100} style={{cursor: 'pointer'}} />
            <Image src={megahyped} alt='Mega Hyped' width={200} height={100} style={{cursor: 'pointer'}} />
            <Image src={chatr} alt='chatr Horse' width={200} height={100} style={{cursor: 'pointer'}} />
            <Image src={portales} alt='Portales' width={200} height={100} style={{cursor: 'pointer'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsContent