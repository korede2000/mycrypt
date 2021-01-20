import React from 'react'
import Team from '../images/team-1.jpg';
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaHome, FaMoneyBill, FaPhone,  FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Profile() {
    return (
        <div class="row">
            <div class="col-xl-4  col-md-6">
                <div class="option-identity-wrapper profile_card">
                    <div class="card-body" style={{padding:'0px'}}>
                        <div class="media" >
                            <img class="mr-3 rounded-circle mr-0 mr-sm-3" src={Team} width="60" height="60" alt="" />
                            <div class="media-body">
                                <span style={{color:'darkorange'}}>Hello</span>
                                <h4 class="mb-2">Maria Pascle</h4>
                                <p class="mb-1"> <span><i class="fa fa-phone mr-2 text-primary"><FaPhone /></i></span> +1 235 5547</p>
                                <p class="mb-1"> <span><i class="fa fa-envelope mr-2 text-primary"><FaEnvelope /></i></span>hello@example.com</p>
                            </div>
                        </div>
                        <ul class="card-profile__info">
                            <li>
                                <h5 class="mr-4">Address</h5>
                                <span class="text-muteds">Futa Tech Hub, Akure.</span>
                            </li>
                            <li class="mb-1">
                                <h5 class="mr-4">Total Log</h5>
                                <span style={{color:'lightblue'}}>103 Time (Today 5 Times)</span>
                            </li>
                            <li><h5 class="text-danger mr-4">Last Log</h5>
                                <span class="text-danger">3 February, 2019, 10:00 PM</span>
                            </li>
                        </ul>
                        <div class="social-icons">
                            <a class="facebook text-center" href="/cheerio_react/accounts">
                                <span><i class="fa fa-facebook"><FaFacebookF /></i></span>
                            </a>
                            <a class="twitter text-center" href="/cheerio_react/accounts">
                                <span><i class="fa fa-twitter"><FaTwitter /></i></span>
                            </a>
                            <a class="youtube text-center" href="/cheerio_react/accounts">
                                <span><i class="fa fa-youtube"><FaYoutube/></i></span>
                            </a>
                            <a class="googlePlus text-center" href="/cheerio_react/accounts">
                                <span><i class="fa fa-google"><FaGooglePlusG/></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4  col-md-6">
                <div class=" card acc_balance" style={{padding:'0px'}}>
                    <div class="card-header">
                        <h4 class="card-title">WALLET</h4>
                    </div>
                    <div class="card-body" >
                        <div style={{padding:'10px', marginBottom:'10px'}}>
                            <span style={{color:'deeppink'}}>Available BTC</span>
                            <h3>0.0230145 BTC</h3>
                        </div>
                        <div style={{padding:'10px', marginBottom:'10px'}}> 
                            <span style={{color:'gold'}}>Referral Bonus</span>
                            <h3>0.0230145 BTC</h3>
                        </div>
                        <div style={{padding:'10px', marginBottom:'10px' }}>
                            <span style={{color:'#34c38f'}}>Total BTC</span>
                            <h3>0.0230145 BTC</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="option-identity-wrapper" style={{padding:'0px'}}>
                    <div class="card-header">
                        <h4 class="card-title">WITHDRAW</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <div class="form-group" style ={{padding: '10px'}}>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text">
                                            <i class="fa fa-money"><FaMoneyBill /></i>
                                        </label>
                                    </div>
                                    <input type="text" class="form-control" placeholder="5000 USD" />
                                </div>
                            </div>
                            <div class="form-group" style={{padding:'10px'}}>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text">
                                            <i class="fa fa-bank"><FaHome/></i>
                                        </label>
                                    </div>
                                    <select class="form-control" >
                                        <option>Bank of America ********45845</option>
                                        <option>Master Card ***********5458</option>
                                    </select>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-block pull-up" style={{padding:'10px', backgroundColor: 'rgb(52, 195, 143)'}}>Withdraw Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
