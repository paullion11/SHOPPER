import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const shop = () => {
  return (
    <div>
        <Hero/> 
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default shop;
