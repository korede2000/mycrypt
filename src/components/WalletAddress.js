import React from 'react'
import { FaBitcoin, FaBtc, FaCopy, FaEdit, FaLongArrowAltDown, FaLongArrowAltUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TransactionHistory from './TransactionHistory';
import Barcode from '../images/barcode.png';
import BtcImg from '../images/coinbtc.png';

export default function WalletAddress() {
    return (
        <>
        <div className='row' style={{marginTop:'30px'}}>
            <div className='col-lg-4'>
                <div className='option-identity-wrapper mb-15'>
                    <h3 className='boldy mt-0'>BTC WALLET ADDRESS</h3>
                    <div className='form-group '>
                        <p>Wallet Address (You can share this to fund your Btc wallet)</p>
                        <div className='input-group primary'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text' style={{background:'rgb(69, 19, 145)'}}><i><FaBitcoin /></i></span>
                            </div>
                            <input type='text' className='form-control' value='HWEW9032JM3MK29I02003I20EI320'  />
                        </div>
                    </div>
                    <div className='no-pl mt-30'>
                        <Link to='#' className='btn btn-primary btn-corner mr-10 pull-up' style={{backgroundColor:'teal' , padding:'10px 25px'}}><i><FaCopy /></i></Link>
                        <Link to='#' className='btn btn-primary btn-corner right15 pull-up' style={{backgroundColor:'rgb(222 222 55)', padding:'10px 25px'}}>Generate New</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='option-identity-wrapper no-mb'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='option-icon'>
                                <img src={Barcode} className='tab-img-icon' alt='icon' />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='scan-info left15'>
                                <h3 className='bold'>Just Scan The Wallet Address</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quaerat optio tempore, culpa iure ipsam voluptatum amet consectetur fuga ab, blanditiis saepe alias ea.</p>
                            </div>
                            <div className='col-lg-12 no-pl mt-10'>
                                <Link to='#' className='btn btn-primary  mr-10 pull-up' style={{backgroundColor:'teal' , padding:'10px 25px'}}>
                                    <i><FaLongArrowAltDown /></i>
                                    Receive
                                </Link>
                                <Link to='#' className='btn btn-primary btn-corner mr-10 pull-up' style={{backgroundColor:'rgb(222 222 55)', padding:'10px 25px'}}>
                                    <i><FaLongArrowAltUp /></i>
                                    Send
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <BtcPayout /> 
            <TransactionHistory />    
        </div>
        </>
    )
}


const BtcPayout = () => {
    return (
        <div className='col-xl-4'>
            <div className='card'>
                <div className='ref-payout'>
                    <img src={BtcImg} alt='' />
                    <span className='cl-white'>BTC Payout Address</span>
                </div>
                <div class="payout-address mt-30">
                    <div class="input-group primary mb-30">
                        <div className='input-group-prepend orange-bg'>
                            <span className='input-group-text' ><i><FaEdit /></i></span>
                        </div>
                        <input type="text" class="form-control text-left transparent" value="Xy734-34093jksd90sk-JKAOOEI900" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group primary mb-30">
                        <div className='input-group-prepend orange-bg'>
                            <span className='input-group-text' ><i><FaBtc /></i></span>
                        </div>
                        <input type="text" class="form-control text-left transparent" placeholder="0.002BTC" aria-describedby="basic-addon1"/>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg gradient-orange pull-up" style={{padding:'10px 25px'}}> Withdraw BTC Funds</button>
                </div>
            
            </div>
        </div>
    )
}
