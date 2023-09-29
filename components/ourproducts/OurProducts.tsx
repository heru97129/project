
import React from 'react'
import styles from './ourptoducts.module.scss'
import CardProd from '../card-products/CardProd'

let tabProducts = [
    {
        title: 'Sytherine',
        images: '/images/our-products/images1.png',
        desc: 'Stylish cafe chair',
        price: '600 $',
        label: '/images/our-products/Label50.png'

    }, {
        title: 'Leviosa',
        images: '/images/our-products/images2.png',
        desc: 'Stylish cafe chair',
        price: '600 $',
        label: ''
    }, {
        title: 'Lolito',
        images: '/images/our-products/images3.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Labelnew.png'
    }, {
        title: 'Respira',
        images: '/images/our-products/images4.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: ''
    }, {
        title: 'Sytherine',
        images: '/images/our-products/images5.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: ''
    }, {
        title: 'Epura',
        images: '/images/our-products/images6.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Labelnew.png'
    }, {
        title: 'Varioza',
        images: '/images/our-products/images7.png',
        desc: 'Stylish cafe chair',
        price: '6000 $',
        label: '/images/our-products/Label50.png'
    }, {
        title: 'Comercia',
        images: '/images/our-products/images8.png',
        desc: 'Living room',
        price: '6000 $',
        label: '/images/our-products/Labelnew.png'
    }
]


function OurProducts() {
    console.log(tabProducts,'tab')
    return (
        <div className={styles['ourpro']}>
            <h1>
                OurProducts
            </h1>

            <div className={styles['ourpro__grid-card']}>
                {tabProducts.map((data, i) => {
                    const {title, desc, images, price, label} = data
                    console.log(title)
                    return <CardProd
                    key={i}
                        images={images}
                        label={label}
                        price={price}
                        desc={desc}
                        title={title}/>

                })}
            </div>
           <div className={styles['ourpro__show-more']}>
                 Show More
           </div>
        </div>
    )
}

export default OurProducts