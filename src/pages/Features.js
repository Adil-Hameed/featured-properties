import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Header1 from '../components/features/Header1'
import Cards from '../components/features/Cards'

export default function Features() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header1 />
            <Cards/>
            <Footer />
        </>
    )
}
