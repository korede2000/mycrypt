import React from 'react'

export default function Hero({ children, hero }) {
    return (
        <header className={hero}>
            <div>
                <div className='row'>
                    <div className='col-xl-12'>
                        {children}
                    </div>
                </div>
            </div>
        </header>
    )
}
