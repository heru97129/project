'use client'
import {Presentation} from '../../components/presentation/Presentation';
import {HomePage} from '../../components/home/HomePage';
import {Menu} from '../../components/menu/Menu';
import styles from './page.module.css'
import JobAndExperience from '../../components/jobandexperience/JobAndExperience';
import Portfolio from '../../components/portfolio/Portfolio';
import Technology from '../../components/technology/Technology';
import Journey from '../../components/journey/Journey';
import Recommendation from '../../components/recommendation/Recommendation';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import {useState, useRef, useEffect} from 'react';
let data = []
export default function Home() {

    let mainRef = useRef()
    const [scrollPosition,
        setScrollPosition] = useState(0);
    let [allTopSection,
        setAllTopSection] = useState()
    let [menuPosFix,
        setMenuPosFix] = useState(false)
    let [sectionIn,setSectionIn] = useState('')

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        data.forEach(limit =>{
             if(Object.values(limit)[0].top /1.1 < position && Object.values(limit)[0].bottom  > position){
                setSectionIn(Object.keys(limit).join(''))
                console.log(Object.keys(limit),position)
             }
        })

        if(allTopSection?.length > 0){

        if (scrollPosition > Number(Object?.values(allTopSection[1])[0].top)) {
            setTimeout(function () {
            setMenuPosFix(true)
            },1000)
        } else {
            setTimeout(function () {
                setMenuPosFix(false)

            },1000)
        }
        
    }
    };
    const getboxArea = (e) => {
        data.map((section,i)=>{
            // console.log( e,'tesst')

            if(Object.keys(section).join('') === Object.keys(e).join('')){
                if(Object.keys(e).join('')){
                    section[Object.keys(e).join('')] = Number(Object.values(e)[0].top)

                }
            }else{
            }
        })
          if(data.length === 0){
            data.push({Home:{
                top : mainRef.current.offsetTop,
                bottom : mainRef.current.offsetTop + window.innerHeight
            }})
          }
        if (data.length <= 6) {
            data.push(e)
            setAllTopSection([...data])
        }

    }
    const scrollToArea = (e) => {

        if (e.innerText) {
            let filter = allTopSection.filter(item => Object.keys(item).join('') === e.innerText)
            console.log(Object.values(filter[0])[0].top)
            if (filter[0]) {
                window.scrollTo({
                    top: Object.values(filter[0])[0].top,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        }

    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <main className={styles.main} ref={mainRef}>
            <Menu scrollToArea={scrollToArea} limiteTop={sectionIn}  menuPosFix={menuPosFix}/>
            <HomePage getboxArea={getboxArea}/>
            <JobAndExperience/>
            <Presentation getboxArea={getboxArea}/>
            <Portfolio getboxArea={getboxArea}/>
            <Technology getboxArea={getboxArea}/>
            <Journey getboxArea={getboxArea}/>
            <Recommendation getboxArea={getboxArea}/>
            <Contact getboxArea={getboxArea}/>
            <Footer/>

        </main>
    )
}
