import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
    return (
        <>
            <Navbar/>
             <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='Login Account'>
                    <Link to='/' className='btn banner-btn btn-fill'>
                        return home
                    </Link>
                </Banner>
            </Hero> 
            <section className='section-padding blue-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 centered'>
                            <div className='section-title cl-white'>
                                <h4>
                                    <span>New</span>
                                    Login Account
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
                            <div className='site-form mb-30'>
                                <form action='#'>
                                    <div className='row'>
                                        <div className='col-xl-12 col-lg-12 col-sm-12'>
                                            <input type='email' placeholder='Email' required />
                                        </div>
                                        <div className='col-xl-12 col-lg-12 col-sm-12'>
                                            <input type='password' placeholder='Password' required />
                                        </div>
                                        <div className='col-xl-12 col-lg-12 col-sm-12'>
                                            <button type='submit' className='bttn-mid btn-fill w-100'>Login Account</button>
                                        </div>
                                        <div className='col-xl-12 col-lg-12 col-sm-12'>
                                            <div className='extra-links'>
                                                <Link to='/register' className='cl-white'>Create new account</Link>
                                                <Link to ='/forget-password' className='cl-white'>Forget Password?</Link>
                                            </div>
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
