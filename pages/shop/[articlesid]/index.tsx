'use client'
import { Banner } from '../../../components/banner/Banner';
import {ArticlesInformations} from '../../../components/articles-informations/ArticlesInformations';

import {TextArticle} from '../../../components/text-articles/TextArticle';

import {Gallery} from '../../../components/gallerie/Gallery';
import React from 'react'
import styles from './article.module.scss'
import stylesP from "../../../src/app/pages.module.css"
import BasicLayout from '../../../src/app/basic-layout/BasicLayout'
import {useRouter} from 'next/router'
import CardProd from '../../../components/card-products/CardProd';
import Button from '../../../components/button/Button';

let tabarticle = [
    '/images/articles/small1.png',
    '/images/articles/small2.png',
    '/images/articles/small3.png',
    '/images/articles/small4.png',
    '',
    '/images/articles/Big.png'
]

let tabRelated = [
    {
        title: 'Sytherine',
        images: '/images/related-prod/images1.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: ''
    }, {
        title: 'Sytherine',
        images: '/images/related-prod/images2.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Labelnew.png'
    }, {
        title: 'Sytherine',
        images: '/images/related-prod/images3.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Label50.png'
    }, {
        title: 'Sytherine',
        images: '/images/related-prod/images4.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Labelnew.png'
    }
]

function index({params}) {
    let route = useRouter()
    const {articlesid} = route.query

    console.log(articlesid)
    return (
        <BasicLayout >
            <div className={stylesP['main']}>
                <div className={styles['article']}>
         <Banner   articlesid={articlesid}  />
                    <div className={styles['article__content']}>
                        <div className={styles["container"]}>
                            <Gallery tabGallery={tabarticle}/>
                            <TextArticle/>
                        </div>

                    </div>
                    <hr/>
                    <ArticlesInformations/>
                    <hr />
                    <div className={styles['article__related-prod']}>
                        <h1>Related Product</h1>

                        <div className={styles['related']}>
                            {tabRelated.map((data) => {

                                const {images, desc, label, title, price} = data
                                return (
                                    <div>
                                        <CardProd
                                            images={images}
                                            desc={desc}
                                            label={label}
                                            title={title}
                                            price={price}/>

                                    </div>
                                )
                            })}
                        </div>

                        <Button text='Show More' bkg={false} center={true} />

                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}

export default index