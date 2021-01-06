import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ForgetPassword() {
    return (
        <>
            <Navbar/>
            <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='Forget Password'>
                    <Link to='/' className='btn banner-btn btn-fill'>
                        return home
                    </Link>
                </Banner>
            </Hero> 
            <section className='section-padding blue-bg dots-after'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 centered'>
                            <div className='section-title cl-white'>
                                <h4>
                                    <span>New</span>
                                    Forget Password
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="site-form mb-30">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-sm-12">
                                            <input type="email" placeholder="Recovery Email" required />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-sm-12">
                                            <button type="submit" className="bttn-mid btn-fill w-100">Verify Email</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
