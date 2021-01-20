import React from 'react'
import { FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa';

const data = [
    {
        id: 1,
        activity: 'Top Up',
        amount: '+0.0023Btc',
        status: 'Completed'
    },
    {
        id: 2,
        activity: 'Withdraw',
        amount: '-0.0015Btc',
        status: 'Completed',
    },
    {
        id: 3,
        activity: 'Withdraw',
        amount: '-0.0014Btc',
        status: 'Pending'
    },
    {
        id: 4,
        activity: 'Top Up',
        amount: '+0.0023Btc',
        status: 'Completed'
    },
    {
        id: 5,
        activity: 'Withdraw',
        amount: '-0.0015Btc',
        status: 'Cancelled',
    }
]

export default function TransactionHistory() {
    return (
        <div class="col-xl-8">
            <div class="option-identity-wrapper" style={{padding:'0px'}}>
                <div class="card-header">
                    <h4 class="card-title">TRANSACTION HISTORY</h4>
                </div>
                <div class="card-body">
                    <div className='transaction-table'>
                        <div className='table-responsive'>
                            <table className='table mb-0 table-responsive-sm'>
                                <tbody>
                                    {data.map((tableItem) => {
                                        const { id, activity, amount, status } = tableItem;
                                        return (
                                            <tr key={id}>
                                                <td>
                                                    {activity ==='Withdraw' ? <FaArrowCircleDown className='sold-thumb' /> : <FaArrowCircleUp className='buy-thumb'/>}
                                                </td>
                                                <td>
                                                    {activity ==='Withdraw' ? <h3>Withdraw</h3> : <h3>TopUp</h3>}
                                                </td>
                                                <td>
                                                    {amount[0] === '+' ? <h3 className='text-success'>{amount}</h3> : <h3 className='text-danger'>{amount}</h3>}
                                                </td>
                                                <td>
                                                    {status === 'Completed' ? <h3 className='text-success'>{status}</h3> : status === 'Cancelled' ? <h3 className='text-danger'>{status}</h3> : <h3>{status}</h3>}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
