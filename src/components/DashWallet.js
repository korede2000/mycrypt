import React from 'react'

export default function DashWallet() {
    return (
        <div className='row' style={{padding:'10px 0', marginBottom:'10px'}}>
            <div className='col-xl-3 col-md-6'>
                <div className='profile-balance mh pull-up'>
                    <div className='profile-bal-head'>
                        <h3>Account Balance</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>19.00234<small>BTC</small></h2>
                        <p className='mb-0 g-text'>$90,782.84</p>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6'>
                <div className='profile-balance mh pull-up' style={{backgroundImage:'linear-gradient(270deg,#e877ae,#7f73f1)'}}>
                    <div className='profile-bal-head'>
                        <h3>Registered Users</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>5000</h2>
                        <p className='mb-0 w-text'>Total Users Registered</p>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6'>
                <div className='profile-balance mh pull-up' style={{backgroundImage:'linear-gradient(270deg,#2a6ffa,#6617cd)'}}>
                    <div className='profile-bal-head'>
                        <h3>Available Funds</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>30.000<small>BTC</small></h2>
                        <p className='mb-0 g-text'>Funds Available for trade</p>
                    </div>
                </div>
            </div>
            <div className='col-xl-3 col-md-6'>
                <div className='profile-balance mh pull-up' style={{backgroundImage:'linear-gradient(270deg,rgb(252, 237, 62),#FF4137)'}}>
                    <div className='profile-bal-head'>
                        <h3>Refferal Earnings</h3>
                    </div>
                    <div className='profile-bal-body'>
                        <h2>$1,200</h2>
                        <p className='mb-0 g-text'>Successful refferal Earnings</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}
