import React from 'react'
import DashNav from '../components/DashNav';
import SettingsTabs from '../components/SettingsTabs';
import {FaCheck, FaDotCircle, FaEnvelope, FaInfoCircle, FaPhone} from 'react-icons/fa'
import Id from '../images/Id.png';
export default function Security() {
    return (
        <div>
            <DashNav />
            <div className='content-body'>
                <div className='container-fluid'>
                    <div className='row'>
                        <SettingsTabs />
                        <Settings />
                   </div>
                </div>
            </div>
        </div>
    )
}

const Settings = () => {
    return (
        <div className='col-xl-9 col-md-8'>
            <div className='row'>
                <div className='col-xl-6'>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Email Verification</h4>
                        </div>
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <div class="phone_verify">
                                        <h4 class="card-title mb-3">Email Address</h4>
                                        <form action="otp-2.html">
                                            <div class="form-row align-items-center">
                                                <div class="form-group col-xl-12">
                                                    <input type="text" class="form-control" placeholder="hello@example.com " />
                                                    <button class="btn btn-success mt-4 btn-dashboard">Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="phone_verified">
                                        <h5>
                                            <span><i class="fa fa-envelope"><FaEnvelope /></i></span> 
                                            hello@example.com
                                        </h5>
                                        <div class="verify">
                                            <div class="verified">
                                                <span><i class="la la-check"><FaCheck /></i></span>
                                                <h5>Verified</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='col-xl-6'>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Contact Verification</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="phone_verify">
                                        <h4 class="card-title mb-3">Add Phone Number</h4>
                                        <form action="otp-2.html">
                                            <div class="form-row align-items-center">
                                                <div class="form-group col-xl-12">
                                                    <input type="text" class="form-control" placeholder="+1 2335 2458 " />
                                                    <button class="btn btn-success mt-4 btn-dashboard">Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="phone_verified">
                                        <h5> <span><i class="fa fa-phone"><FaPhone/></i></span> +1 23584 2659</h5>
                                        <div class="verify">
                                            <div class="verified">
                                                <span><i class="la la-check"><FaCheck/></i></span>
                                                <h5>Verified</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-12'>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Identity Verification</h4>
                        </div>
                        <div class="card-body">
                            <div class="pull-left">
                                <h4 style={{fontSize:'1.2rem', margin:'10px 0'}}>
                                    <i class="fa fa-info-circle color-primary complete f-s-14" style={{fontSize:'14px'}}><FaInfoCircle /></i>
                                    <small>To increase purchase limit please provide the following documents</small>
                                </h4>
                                <h4 class="help-block ml-20">
                                    <small>maximum file size 4MB - The Verification process can last to 24 hours</small>
                                </h4>
                                <ul class="ml-20 mt-30 list-unstyled">
                                    <li><h5 style={{magin:'10px 0'}}><i class="fa fa-dot-circle-o blue-text mr-10"><FaDotCircle/></i>Proof of Identity (Government issued ID or Passport)</h5></li>
                                    <li><h5 style={{margin:'10px 0'}}><i class="fa fa-dot-circle-o blue-text mr-10"><FaDotCircle/></i>Selfie of holding clearly your identity document in your hands</h5></li>
                                </ul>
                            </div>
                            <div className='row align-items-center' style={{marginTop:'30px'}}>
                                <div className='col-xl-4'>
                                    <div className='id_card'>
                                        <img src={Id} alt='' className='img-fluid'  />
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='id_info'>
                                        <h3>Korede Special</h3>
                                        <p className='mb-1 mt-3'>
                                            ID: 1234 5678 9843 2356
                                        </p>
                                        <p class="mb-1">Status: <span class="font-weight-bold text-success">Verified</span></p>
                                    </div>
                                    <div class="controls">
                                        <input type="file" class="" id="formfield10" name="formfield10" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" style={{marginTop:'30px'}}><button class="btn btn-success pl-5 pr-5 btn-dashboard">Save</button></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}