import React from 'react'
import DashNav from '../components/DashNav';
import DashWallet from '../components/DashWallet';
import PieChart from '../components/PieChart'
export default function Dashboard() {
    return (
        <>
            <DashNav />
            <div className='content-body'>
                <div className='container'>
                    <DashWallet />
                    <PieChart />
                </div>
            </div>
        </>
    )
}
