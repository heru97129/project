'use client'
import { Recom } from '../recom/Recom';
import React, { useEffect,useRef,useState } from 'react'
import styles from './recommendation.module.scss'
import Verify from '../hooks/VerifyWidth';


let arrayRecoms = [{
  text : `Je souhaite recommander vivement Grégory pour ses compétences  en développement front-end, 
  démontrées lors de la création de notre newsletter à l'agence Black Lemon. Grégory a non seulement délivré une newsletter visuellement attrayante, 
  mais il a également assuré une expérience utilisateur fluide et efficace pour nos abonnés.`,
  person:'Romain Guillou',
  poste : 'Commerciale'
},
{
    text : `Grégory s'est montré professionnel, fiable, et toujours prêt à relever de nouveaux défis.
     notre agence dispose désormais d'une application de marketing puissante qui a grandement amélioré nos capacités de gestion et de communication.
     Si vous recherchez un développeur front-end talentueux et passionné, je vous recommande fortement Grégory`
     ,
    person:'Ricardo Silva',
    poste : 'Commerciale'
  },
  {
    text : `Je suis ravi de recommander chaleureusement Grégory pour son travail exceptionnel en tant que développeur front-end lors de la création de notre application pour l'association de marketing "The World We Act".
    il a fait preuve d'un haut niveau de compétence technique et d'un engagement remarquable tout au long du projet qui est sur le point de se finalisé.`,
    person:'Lassana Dirra',
    poste : 'Chef de projet'
  }
]
function Recommendation({getboxArea}) {
    let recommandationRef = useRef()
    let [widthPosition,setWidthPosition] = useState(0)
    let VerifyWidth = new Verify(setWidthPosition,'pres')
    useEffect(()=>{
       getboxArea({Recommandation: {
        top : recommandationRef.current.offsetTop,
        bottom : recommandationRef.current.offsetTop + recommandationRef.current.offsetHeight
       }})
       VerifyWidth.FindWidth()
    },[widthPosition])

    return (
        <div className={styles['recommendation']} ref={recommandationRef}>
            <div className={styles['recommendation__controler']}>
                <h1>Recommendations</h1>
                <div className={styles['arrows']}>

                    <img src='images\arrow left.png'/>
                    <img src='images\arrow right.png'/>
                </div>
            </div>
            <div className={styles['recommendation__gallerie']}>
                <div className={styles['inner-gal']}>
               {arrayRecoms.map((data,i)=>{
                const { text,person , poste} = data 
                 return <Recom key={i} text={text} person={person} poste={poste}/>
               })}
               </div>
            </div>

        </div>
    )
}

export default Recommendation