import React, { useState, useRef, useEffect } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
//import './newNav.css';

const links = [
    {
        id: 1,
        url: '/',
        text: 'HOME',
        drop: false
    },
    {
        id: 2,
        url: '/howitworks',
        text: 'HOW IT WORKS',
        drop: false
    },
    {
        id: 3,
        url: '/pages',
        text: 'PAGES',
        drop: [
            {
            id: 1,
            url: '/about',
            text:'ABOUT'
            },
            {
            id: 2,
            url: '/allpackages',
            text:'ALL PACKAGES'
            },
            {
            id: 3,
            url: '/faq',
            text:'FAQ'
            },
            {
            id: 4,
            url: '/sucess-stories',
            text:'SUCCESS STORIES'
            },
        ]
    },
    {
        id: 4,
        url: '/dashboard',
        text: 'DASHBOARD',
        drop: [
            {
            id: 1,
            url: '/dashboard',
            text:'DASHBOARD'
            },
            {
            id: 2,
            url: '/transaction',
            text:'TRANSACTIONS'
            },
            {
            id: 3,
            url: '/profile',
            text:'PROFILE'
            },
            {
            id: 4,
            url: '/notification',
            text:'NOTIFICATIONS'
            },
        ]
    },
    {
        id: 5,
        url: '/news',
        text: 'NEWS',
        drop: [
            {
            id: 1,
            url: '/all-news',
            text:'ALL NEWS'
            },
            {
            id: 2,
            url: '/single-news',
            text:'SINGLE NEWS'
            },
        ]
    },
    {
        id: 6,
        url: '/contact',
        text: 'CONTACT',
        drop: false
    }
]

export default function Navbar() {
    const [showLink, setShowLink] = useState(false);

    const toggleLink = () => setShowLink(!showLink);

    const closeLink = () => setShowLink(false);

    const linksRef = useRef(null);

    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => setSize(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', checkSize);

        return () => {
            window.removeEventListener('resize', checkSize);
        }
    }, []);

    useEffect(() => {
        if (showLink) {
            linksRef.current.classList.add('nav-active');
            if (size > 960) {
                setShowLink(false);
            } else {
                setShowLink(showLink);
            }
        } else {
            linksRef.current.classList.remove('nav-active');
        }
    }, [showLink, size]);

    return (
        <header className='header-area'>
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/' className='logo'>
                            <img src={logo} alt='log-file' className='logo-pic' />
                        </Link>
                        <div className='menu-icon' onClick={toggleLink}>
                            <i>{showLink ? <FaTimes className='fa-bars' /> : <FaBars className='fa-bars' /> }</i>
                        </div>
                    </div>
                    {/* ---links */}
                    <div className='links-container' ref={linksRef}>
                        <ul className='links nav-menu'>
                            {links.map((link) => {
                                return (
                                    <SingleLink key={link.id} {...link} closeLink={closeLink}>

                                    </SingleLink>
                                );
                            })}
                        </ul>
                        <div className='mobile'>
                            <Link to="/login" class="btn-mobile">Account Login</Link>
                        </div>
                    </div>
                    <div className='login-btn'>
                        <Link to="/login" class="btn-login">Account Login</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}


function SingleLink({ url, text, drop, closeLink }) {
    const [dropDown, setDropDown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            if (drop) {
                setDropDown(true);
            } else {
                setDropDown(false);
            }
        }
    }; 
    const OnMouseLeave = () => {
        if (drop) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    } 
    
        return (
            <li
                onMouseEnter={onMouseEnter}
                onMouseLeave={OnMouseLeave}
                className='nav-item'
            >
                <Link to={url} className='nav-links' onClick={closeLink}>
                    {text}
                    {drop && <i><FaAngleDown /> </i>}
                </Link>
                {dropDown && <Dropdown drop={drop} />}
            </li>
        );
}

function Dropdown({ drop }) {
    const [showLink, setShowLink] = useState(false);
    const toggleLink = () => setShowLink(!showLink);

    return (
        <ul
            onClick={toggleLink}
            className = {showLink ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {drop.map((item) => {
                const { id, url, text } = item;
                return (
                    <li key={id}>
                        <Link 
                            className='dropdown-link'
                            to={url}
                            onClick={() => setShowLink(false)}
                        >
                            {text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}