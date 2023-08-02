import React from 'react'
import styles from './technology.module.scss'
import { Span } from '../topspan/Span'

function Technology() {
  return (
    <div className={styles['technology']}>
        <div className={styles['technology__title']}>
          <Span text='🧑‍💻 skills · Expériences' />
          <h1>Technologies et compétences</h1>
        </div>
        <div className={styles['technology__stack']}>
       <h4>Les technologies que j'utilise le plus</h4>
       <div className={styles['icone-stack']}>
   
         <img src='images/icone/Javascript.png' />
         <img src='images/icone/Nextjs.png' />
         <img src='images/icone/React.png' />
         <img src='images/icone/TypeScript.png' />
         <img src='images/icone/Githubviolet.png' /> 
         <img src='images/icone/sass.png' />
         <img src='images/icone/Nodejs.png' />          
         <img src='images/icone/Group 1.png' />
         <img src='images/icone/Group 2.png' />
         <img src='images/icone/Figma.png' />   
       </div>
        </div>

        <div className={styles['technology__stack2']}>
       <h4>Les technologies que j'utilise moins fréquements</h4>
       <div className={styles['icone-stack']}>
   
         <img src='images/icone/TailwindCSS.png' />
         <img src='images/icone/vue.png' />
         <img src='images/icone/mangodb.png' />
         <img src='images/icone/TypeScript.png' />
         <img src='images/icone/Githubviolet.png' /> 

       </div>
        </div>
    </div>
  )
}

export default Technology