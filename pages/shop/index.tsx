'use client'
import { BannerBottom } from '../../components/banner-bottom/BannerBottom';
import { BannerTitle } from '../../components/banner-title/BannerTitle';
import { Filter } from '../../components/filter/Filter';
import React, { useEffect,useState } from 'react'
import styles from './shop.module.scss'
import BasicLayout from '../../src/app/basic-layout/BasicLayout'
import CardProd from '../../components/card-products/CardProd';
import { title } from 'process';


let tabShop = [
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
    },
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

function index() {
    let [prod,setprod] = useState()
    const  handle = async () => {
   let response =  await fetch('/api/products')
   let data = await response.json()
   console.log(data)

    }

    useEffect(()=>{

   handle()
    },[])

  return (
  <>
       <BasicLayout  >
          <main className={styles['shop']}>
       <BannerTitle title='shop' logo={undefined}    />
        <Filter     />
      <div className={styles['shop__all-prod']}>
        <div className={styles['gallery']}>
        {
          tabShop.map((data,i)=>{
            const {images,desc,label,title,price} = data
            return(
              <CardProd  images={images} desc={desc} label={label} title={title} price={price}/>
            )
          })
        }
        </div>
        <div className={styles['pages']}>
          <div>
          <span>1</span><span>2</span><span>3</span><span>Next</span>
          </div>
        </div>
      </div>
<BannerBottom     />
        </main>
        </BasicLayout>       
        </>
  )
}

export default index