import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
export default function Contact() {
    return (
        <>
            <Navbar />
          <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='Get In Touch'>
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
                                    Any Query?
                                </h4>
                                <h2 style={{fontSize:'16px'}}>Emegence and design of the idea</h2>
                            </div>
                        </div>
                    </div> 
                    <div className='row'>
                        <div class="col-lg-6">
                            <div class="nk-block-text" style ={{color:'white'}}>
                                <div class="nk-block-text-head">
                                    <h2 class="title title-lg ttu animated fadeInUp" data-animate="fadeInUp" data-delay="0.7" style={{ visibility: 'visible', animationDelay: '0.7s', marginBottom:'1.2rem' }}>
                                        Contact Us
                                    </h2>
                                    <p class="animated fadeInUp" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: 'visible', animationDelay: '0.8s', color:'rgba(255, 255, 255, 0.5)', marginBottom:'0' }}>
                                        We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.
                                    </p>
                                </div>
                                <form class="nk-form-submit" action="#" >
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="field-item animated fadeInUp" data-animate="fadeInUp" data-delay="0.8" style={{ visibility: 'visible', animationDelay: '0.8s'}}>
                                                <label class="field-label ttu">Your Name</label>
                                                <div class="field-wrap">
                                                    <input name="contact-name" placeholder="Introduce yourself" type="text" class="input-bordered required" required />
                                                    {/* <label id="contact-name-error" class="error" for="contact-name" style="">This field is required.</label> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="field-item animated fadeInUp" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: 'visible', animationDelay: '0.9s' }}>
                                                <label class="field-label ttu">Your Email</label>
                                                <div class="field-wrap">
                                                    <input name="contact-email" placeholder="Who do we replay to" type="email" class="input-bordered required email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="field-item animated fadeInUp" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: 'visible', animationDelay: '0.9s' }}>
                                                <label class="field-label ttu">Your Contact</label>
                                                <div class="field-wrap">
                                                    <input name="contact-number" placeholder="Phone" type="text" class="input-bordered required email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="field-item animated fadeInUp" data-animate="fadeInUp" data-delay="0.9" style={{ visibility: 'visible', animationDelay: '0.9s' }}>
                                                <label class="field-label ttu">Subject</label>
                                                <div class="field-wrap">
                                                    <input name="subject" placeholder="Subject" type="email" class="input-bordered required email" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field-item animated fadeInUp" data-animate="fadeInUp" data-delay="1.0" style={{ visibility: 'visible', animationDelay: '1s' }}>
                                        <label class="field-label ttu">Your Message</label>
                                        <div class="field-wrap">
                                            <textarea name="contact-message" placeholder="Leave your question or comment here" class="input-bordered input-textarea required" required >
                                            </textarea>
                                        </div>
                                    </div>
                                    <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                                    <div class="row">
                                        <div class="col-sm-5 animated fadeInUp" data-animate="fadeInUp" data-delay="1.1" style={{ visibility: 'visible', animationDelay: '1.1s' }}>
                                            <button type="submit" class="btn btn-round btn-fill bttn-mid">
                                                SEND
                                            </button>
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="form-results alert alert-success" style={{ display: 'none' }}>
                                                We have <strong>successfully</strong> received your message. We'll get back to you soon.
                                            </div>
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-5 text-center' style={{paddingTop:'25px', paddingBottom:'25px'}}>
                            <div className='nk-block-contact nk-block-contact-s1'>
                                <ul className='contact-list'>
                                    <li>
                                        <i className='contact-icon'><FaPhone /></i>
                                        <div className='contact-text'>
                                            <h3 style={{fontSize:'16px'}}>Call Us On</h3>
                                            <p>+234 123 456 789 0</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='contact-icon'><FaEnvelope /></i>
                                        <div className='contact-text'>
                                            <h3 style={{fontSize:'16px'}}>Email</h3>
                                            <p>aicb@capital.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='contact-icon'><FaMapMarker /></i>
                                        <div className='contact-text'>
                                            <h3 style={{fontSize:'16px'}}>Visit us</h3>
                                            <p>Futa Tech Hub, Akure, NGA</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className='nk-circle-animation nk-df-center white small'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
}

