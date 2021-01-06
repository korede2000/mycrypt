import React from 'react'
import Workprocess from '../images/work-process.png';

const AboutSection = () => {
    return (
        <section className='section-padding blue-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 text-center justify-content-center flex-align order-r-2'>
                            <div className='work-box w-100'>
                                <div className='work-box-bg'></div>
                                <img src={Workprocess} className='rotation-img' alt='work process' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 justify-content-center order-r-1 mb-r-30'>
                            <div className='about-content work-box cl-white'>
                                <div className='section-title cl-white'>
                                    <h4>
                                        <span>Best</span>
                                        About us
                                    </h4>
                                    <h2>Explore us, know about us</h2>
                                </div>
                                <p> Sit amet consectetur adipisicing elit. Doloremque, similique! Magni ullam quas deleniti
                                    et fugit cumque animi praesentium. Eum eos alias facere recusandae,
                                    quidem culpa magni officiis. Nisi, ullam! Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Dolorum voluptate
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laudantium quo deleniti non enim possimus unde ex sed odio
                                    rerum expedita aliquam corporis reiciendis architecto inventore
                                    assumenda obcaecati fuga, dolorum ea Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. Suscipit vero consequuntur
                                    minus dolorem blanditiis laborum nemo. Error, quo aliquam
                                    reiciendis voluptatibus vero quam nostrum minima qui
                                    doloremque soluta officiis iusto? Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Temporibus quod sed sit adipisci harum, facere consequatur cumque commodi, quaerat mollitia maiores
                                    libero est alias tempora odit dignissimos quo quas laboriosam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default AboutSection;