import React from 'react'
import DashNav from '../components/DashNav';
// import DashWallet from '../components/DashWallet';
import WalletAddress from '../components/WalletAddress';
import Profile from '../components/Profile';

export default function Dashboard() {
    return (
        <>
            <DashNav />
            <div className='content-body'>
                <div className='container-fluid'>
                    {/* <DashWallet /> */}
                    <Profile />
                    <WalletAddress />
                </div>
            </div>
        </>
    )
}
