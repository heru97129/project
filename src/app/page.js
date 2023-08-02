'use client'
import {Presentation} from '../../components/presentation/Presentation';
import {HomePage} from '../../components/home/HomePage';
import {Menu} from '../../components/menu/Menu';
import styles from './page.module.css'
import JobAndExperience from '../../components/jobandexperience/JobAndExperience';
import Portfolio from '../../components/portfolio/Portfolio';
import Technology from '../../components/technology/Technology';
import Journey from '../../components/journey/Journey';

export default function Home() {
 
    return (
        <main className={styles.main}>
            <Menu/>
            <HomePage/>
            <JobAndExperience />
            <Presentation/>
            <Portfolio />
            <Technology />
            <Journey />
            
            
        </main>
    )
}
