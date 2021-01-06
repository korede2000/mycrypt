import React from 'react'

export default function Banner({ children, title }) {
    return (
        <div className='site-breadcrumb'>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
