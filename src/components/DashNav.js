import React from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaWallet, FaToolbox, FaUserCog, FaPowerOff } from 'react-icons/fa';

const data = [
    {
        id: 1,
        url: '/dashboard',
        text: 'Dashboard',
        icon: <FaHome />,
        classStyle:'n'
    },
    {
        id: 2,
        url: '/models',
        text: 'Models',
        icon: <FaToolbox />,
        classStyle: 'n'
    },
    {
        id: 3,
        url: '/account',
        text: 'Account',
        icon: <FaWallet />,
        classStyle: 'n'
    },
    {
        id: 4,
        url: '/account-setting',
        text: 'Settings',
        icon: <FaUserCog />,
        classStyle: 'n'
    },
    {
        id: 5,
        url: '/signin',
        text: 'Signout',
        icon: <FaPowerOff />,
        classStyle:'logout'
    },

]
export default function DashNav() {
    return (
        <>
            <div className='header dashboard'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <nav className='navbar navbar-expand-lg navbar-light px-0 justify-content-between'>
                                <div className='header-search d-flex align-items-center'>
                                    <Link className='logo mr-3 brand-logo' to='/'>
                                        <img src={logo} alt='logo' width='50' />
                                    </Link>
                                    <form>
                                        <div className='input-group'>
                                            <input type='text' className='form-control' placeholder='Search' />
                                            <div className='input-group-append'>
                                                <span className='input-group-text' id='basic-adon2'>
                                                    <i className= 'fa fa-search'><FaSearch /></i>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='dashboard_log'>
                                    <div className='d-flex align-items-center'>
                                        <div className='profile_log dropdown'>
                                            <button type='button' className='dropdown-toggle btn btn-primary btn-dashboard btn-fill'>
                                                John Doe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <Link to='/dashboard' className='brand-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='menu'>
                    <ul>
                        {data.map((item) => {
                            const { id, url, text, icon, classStyle } = item;
                            return (
                                <li key={id} className={classStyle}>
                                    <Link to={url} alt={text} title={text} >
                                        <span>
                                            <i>{icon}</i>
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div class="copyright"> © ICB.Capital</div>
                </div>
            </div>
            <div className='page_title'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='page_title-content'>
                                <p>Welcome Back, <span>Akorede Special.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
