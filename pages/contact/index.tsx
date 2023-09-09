import React from 'react'
import BasicLayout from '../../src/app/basic-layout/BasicLayout'
import {BannerBottom} from '../../components/banner-bottom/BannerBottom'
import styles from './contact.module.scss'
import {BannerTitle} from '../../components/banner-title/BannerTitle'
import Image from 'next/image'
import Button from '../../components/button/Button'

function index() {
    return (
        <BasicLayout >
            <BannerTitle title='Contact' logo={true}/>
            <div className={styles['in-touch']}>
                <div className={styles['in-touch__title']}>
                    <h1>Get In Touch With Us</h1>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop
                        Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className={styles['in-touch__contact']}>
                    <div className={styles['left']}>
                        <div className={styles['left__adress']}>
                            <div className={styles['icone']}>
                                <Image src={'/images/location.png'} alt='' width={30} height={30} />
                            </div>
                            <div className={styles['infos']}>
                                <h2>Address</h2>

                                <p>236 5th SE Avenue, New York NY10000, <br /> United States</p>
                            </div>
                        </div>
                        <div className={styles['left__phone']}>
                            <div className={styles['icone']}>
                                <Image src={'/images/phone.png'} alt='' width={30} height={30} />
                            </div>
                            <div className={styles['infos']}>
                                <h2>Phone</h2>
                                <p>Mobile: +(84) 546-6789
                                    <br/>
                                    Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className={styles['left__working']}>
                            <div className={styles['icone']}>
                                <Image src={'/images/clock.png'} alt='' width={30} height={30} />
                            </div>
                            <div className={styles['infos']}>
                                <h2>Working Time</h2>
                                <p>Monday-Friday: 9:00 - 22:00
                                    <br/>
                                    Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['right']}>
                        <div className={styles['right__inp']}>
                            <h3>Your name</h3>
                            <input placeholder='Abc' />
                        </div>
                        <div className={styles['right__inp']}>
                            <h3>Email address</h3>
                            <input placeholder='Abc@def.com' />
                        </div>
                        <div className={styles['right__inp']}>
                            <h3>Subject</h3>
                            <input placeholder='This is an optional' />
                        </div>
                        <div className={styles['right__inp']}>
                            <h3>Message</h3>
                            <input placeholder='Hi! i’d like to ask abou3' />
                        </div>

                        <Button text='Submit' bkg={true} />
                    </div>
                </div>
            </div>
            <BannerBottom/>
        </BasicLayout>
    )
}

export default index