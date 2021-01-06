import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import errorImg from '../images/404.png';
export default function Error() {
    return (
        <>
            <Navbar />
            <Hero hero=' breadcrumb-area gradient-overlay land-ban'>
                <Banner title='error page '>
                    <Link to='/' className='btn banner-btn btn-fill'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <section className='section-padding blue-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-g col-md-6 col-sm-12'>
                            <div className='section-title cl-white'>
                                <h2 className='mb-20'>opps! Page not found</h2>
                                <p className='mb-30'>
                                    Natus eum dolore consequuntur maiores beatae quibusdam vel quaerat eos adipisci animi nostrum, unde minus quo tempora quis repellat ut excepturi delectus.
                                </p>
                                <Link to='/' className='bttn-small btn-fill btn'>
                                    Back to home
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-g col-md-6 col-sm-12 centered'>
                            <img src={errorImg} alt='error' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
