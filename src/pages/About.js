import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import Abouts from '../images/about-1.jpg';
import About2 from '../images/about-2.png';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team-4.jpg';
import { FaPlay, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const data = [
    {
        id: 1,
        name: 'John Doe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur',
        image:  team1
    },
    {
        id: 2,
        name: 'John Doe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur',
        image : team2 
    },
    {
        id: 3,
        name: 'John Doe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur',
        image : team3 
    },
    {
        id: 4,
        name: 'John Doe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur',
        image : team4 
    }
]


export default function About() {
    return (
        <>
            <Navbar />
            <Hero hero='breadcrumb-area gradient-overlay land-ban'>
                <Banner title='About Us'>
                    <Link to='/' className='btn banner-btn btn-fill'>
                        return home
                    </Link>
                </Banner>
            </Hero> 
            <AboutSection />
            <section className='section-padding light-blue-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 flex-align mb-r-30 '>
                            <div className='work-box'>
                                <div className='section-title cl-white'>
                                    <h4>
                                        <span>Best</span>
                                        About us
                                    </h4>
                                    <h2 className='work-process-title'>Our Mission</h2>
                                </div>
                                
                                <p class="about-des ">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium
                                </p>
                                <p class="work-des">
                                    Bitcoin is different than any currency you’ve used before,
                                    so it’s very important to understand some key points.
                                    You can use them to send or receive any amount of money,
                                    with anyone, anywhere in the world, at very low cost.
                                    Bitcoin payments are impossible to block and safety.
                                    Bitcoin is different than any currency you’ve used before,
                                    so it’s very important to understand some key points.
                                    You can use them to send or receive any amount of money,
                                    with anyone, anywhere in the world, at very low cost.
                                    Bitcoin payments are impossible to block and safety.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 flex-align text-center justify-content-center '>
                            <div className='work-box'>
                                <img src={Abouts} alt='work process' />
                                <Link to='#' className='play-icon' >
                                    <span>
                                        <i><FaPlay className='fa-play'/></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding blue-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 text-center flex-align justify-content-center order-r-2'>
                            <div className='work-box'>
                                <img src={About2} alt='about2' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 flex-align mb-r-30 order-r-1'>
                            <div className='work-box'>
                                <div className='section-title cl-white'>
                                    <h4>
                                        <span>Best</span>
                                        About us
                                    </h4>
                                    <h2 className='work-process-title'>Our vision</h2>
                                </div>
                                <p className='work-des'>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected 
                                    humour, or randomised words which don't look even slightly believable. 
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure 
                                    there isn't anything embarrassing hidden in the middle of text. All the 
                                    Lorem Ipsum generators on the Internet tend to repeat predefined chunks 
                                    as necessary, making this the first true generator on the Internet. It 
                                    uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks 
                                    reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-padding light-blue-bg bg-pattern team-part'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 pb-65'>
                            <div className='section-title text-center cl-white'>
                                <h4>
                                    <span>Meet</span>
                                    The Team
                                </h4>
                                <h2>Our Team</h2>
                            </div>
                            <p class="heading-des text-center" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        {data.map((people) => {
                            const { id, name, desc, image } = people;
                            return (
                                <div className='col-md-6 pb-45' key={id}>
                                    <div className='team-box flex-align'>
                                        <div className='team-img'>
                                            <Link to='#'>
                                                <img src={image} alt={name} />
                                            </Link>
                                        </div>
                                        <div className='team-des'>
                                            <Link to='#' className='member-name'>{name}</Link>
                                            <p className='member-desc'>{desc}</p>
                                            <ul className='pt-15'>
                                                <li>
                                                    <Link className='fa-facebook'>
                                                        <FaFacebook />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='fa-facebook'>
                                                        <FaTwitter />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='fa-facebook'>
                                                        <FaLinkedin />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}


