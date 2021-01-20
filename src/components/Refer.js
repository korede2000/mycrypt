import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

export default function Refer() {
    return (
        <div class="option-identity-wrapper" style={{padding:'0px'}}>
                <div class="card-header">
                    <h4 class="card-title">Earn $25 to invite</h4>
                </div>
            <div class="card-body">
                
                <p>Boluptate quis optio, quibusdam quo unde cum dolores tempora veniam eius, voluptatum illum</p>
                <Link to="#" class="bttn-small btn-fill"><i class="ti-arrow-down"><FaArrowDown/></i> refer a friend</Link>
            </div>
        </div>    
    )
}
