import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Register() {
    return (
        <>
            <Navbar />
            <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='Register Now'>
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
                                    Create Account
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div className="site-form mb-30">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="text" placeholder="First Name" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="text" placeholder="Last Name" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="text" placeholder="Phone" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="password" placeholder="Password" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-sm-6">
                                            <input type="password" placeholder="Re-Password" required />
                                        </div>
                                        <div className='col-xl-12 col-lg-12 col-sm-12 mb-30'>
                                            <input className='input-checkbox' type='checkbox' id='agree-term-2' required />
                                            <label for='agree-term-2' className='check-label'>
                                                I agree to Icb 
                                                 <Link to='#'> Privacy Policy </Link>
                                                 and
                                                <Link to='#'> Terms</Link>.
                                            </label>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-sm-12">
                                            <button type="submit" className="bttn-mid btn-fill w-100">Register now</button>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-sm-12">
                                            <div className="extra-links cl-white">
                                                Already have an account?
                                                <Link to="/login" className="cl-white">Login Here!</Link>
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
