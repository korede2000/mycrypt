import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import Navbar from '../components/Navbar';


export default function FaqPage() {

    return (
        <>
            <Navbar />
            <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='Find questions'>
                    <Link to='/' className='btn banner-btn btn-fill'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <Faq />
        </>
    );
}