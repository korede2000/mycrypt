import React from 'react'
import { FaCog, FaLock, FaUniversity, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SettingsTabs() {
    return (
        <div className='col-xl-3 col-md-4'>
            <div class="card settings_menu">
                <div class="card-header">
                    <h4 class="card-title">Settings</h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/account-setting">
                                <i class="la la-user"><FaUser /></i>
                                <span>Edit Profile</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/settings-preferences">
                                <i class="la la-cog"><FaCog /></i>
                                <span>Preferences</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/security">
                                <i class="la la-lock"><FaLock /></i>
                                <span>Security</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/settings-account">
                                <i class="la la-university"><FaUniversity /></i>
                                <span>Linked Account</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
