import React from 'react'

export default function DashWallet() {
    return (
        <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='profile-balance'>
                    <div className='profile-bal-head'>
                        <h3>Account Balance</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>19.00234<small>BTC</small></h2>
                        <p className='mb-0 g-text'>$90,782.84</p>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='profile-balance' style={{backgroundImage:'linear-gradient(270deg,#e877ae,#7f73f1)'}}>
                    <div className='profile-bal-head'>
                        <h3>Registered Users</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>5000</h2>
                        <p className='mb-0 w-text'>Total Users Registered</p>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='profile-balance' style={{backgroundImage:'linear-gradient(270deg,#2a6ffa,#6617cd)'}}>
                    <div className='profile-bal-head'>
                        <h3>Available Funds</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>30.000<small>BTC</small></h2>
                        <p className='mb-0 g-text'>Funds Available for trade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
