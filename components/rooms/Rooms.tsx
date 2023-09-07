'use client'
import React,{useState} from 'react'
import styles from './room.module.scss'
import Button from '../button/Button'
import Image from 'next/image'

let tabRooms = [
    {
        images: '/images/room-inspi/images1.png',
        number: '01',
        title: 'Inner Peace',
        desc: 'Bed Room'

    }, {
        images: '/images/room-inspi/images2.png',
        number: '01',
        title: 'Inner Peace',
        desc: 'Bed Room'

    }, {
        images: '/images/room-inspi/images3.png',
        number: '01',
        title: 'Inner Peace',
        desc: 'Bed Room'

    }
]

function Rooms() {
    
    let [spanSlect,setspanSlect ] = useState(1)

    return (
        <main className={styles['rooms']}>
            <div className={styles['rooms__container']}>
                <div className={styles['slogan']}>
                    <div className={styles['slogan__cont']}>
                        <h1>50+ Beautiful rooms
                            <br/>
                            inspiration</h1>
                        <p>Our designer already made a lot of beautiful prototype
                            <br/>
                            of rooms that inspire you
                        </p>
                        <Button text='Explore More'/>

                    </div>
                </div>
                <div className={styles['roomPT']}>
                    {tabRooms.map((data, i) => {
                        const {images, desc, title, number} = data
                        return (
                            <div className={styles['room']}>
                                {i === 0 && <Image src={images} alt='rooms' width={404} height={582}/>}
                                {i !== 0 && <Image src={images} alt='rooms' width={372} height={486}/>}

                            </div>
                        )
                    })
}

                </div>
                <div className={styles['steps']}>
                    <span onClick={()=> setspanSlect(1)} className={styles[spanSlect === 1 ? 'span-selected' : '']}></span>
                    <span onClick={()=> setspanSlect(2)} className={styles[spanSlect === 2 ? 'span-selected' : '']}></span>
                    <span onClick={()=> setspanSlect(3)} className={styles[spanSlect === 3 ? 'span-selected' : '']}></span>
                    <span onClick={()=> setspanSlect(4)} className={styles[spanSlect === 4 ? 'span-selected' : '']}></span>

                </div>

            </div>

        </main>
    )
}

export default Rooms