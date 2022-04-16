import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import InfoLalulintas from './InfoLalulintas'
import InfoPariwisata from './InfoPariwisata'
import Sarana from './Sarana'

export default function HomePage() {
    return (
        <div>

            <Hero />
            <Sarana />
            <InfoLalulintas />
            <InfoPariwisata />
            <Footer />
        </div>
    )
}
