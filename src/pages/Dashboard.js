import React from 'react'
import DashNav from '../components/DashNav';
import TransactionHistory from '../components/TransactionHistory';
import DashWallet from '../components/DashWallet';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import Leader from '../components/Leader';
import Refer from '../components/Refer';

export default function Dashboard() {
    return (
        <>
            <DashNav />
            <div className='content-body'>
                <div className='container-fluid'>
                    <DashWallet />
                    <div className='row'>
                        <div className='col-xl-4'>
                            <PieChart />
                            <Refer  />
                        </div>
                        <TransactionHistory />
                    </div>
                    <LineChart />
                    <Leader />
                </div>
            </div>
        </>
    )
}
