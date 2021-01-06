import React from 'react'
import { ReactComponent as ServiceIcon1 } from '../images/services-icon1.svg';
import { ReactComponent as ServiceIcon2 } from '../images/services-icon2.svg';
import { ReactComponent as ServiceIcon3 } from '../images/services-icon3.svg';
import { ReactComponent as ServiceIcon4 } from '../images/services-icon4.svg';
import { ReactComponent as ServiceIcon5 } from '../images/services-icon5.svg';
import { ReactComponent as ServiceIcon6 } from '../images/services-icon6.svg';

const data = [
    {
        id: 1,
        image: <ServiceIcon1 />,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
    {
        id: 2,
        image: <ServiceIcon2 />,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
    {
        id: 3,
        image: <ServiceIcon3 />,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
    {
        id: 4,
        image: <ServiceIcon4/>,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
    {
        id: 5,
        image: <ServiceIcon5 />,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
    {
        id: 6,
        image: <ServiceIcon6 />,
        title: 'Currency Wallet',
        shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
        longText : 'Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'

    },
]
export default function Services() {
    return (
        <section className='section-padding dots-after white-purple-bg'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-6 centered'>
                        <div className='section-title cl-white'>
                            <h4 style={{background:'rgb(78, 13, 153)', color:'white'}}>
                                <span>New</span>
                                SERVICES
                            </h4>
                            <h2 style={{fontSize:'18px', color:'rgb(78, 13, 153)'}}>Emegence and design of the idea</h2>
                        </div>
                    </div>
                </div>
                <div className='ser-feature-block'>
                    <div className='row'>
                        {data.map((item) => {
                            const { id, image, title, shortText, longText } = item;
                            return (
                                <div key={id}className='col-lg-4 col-6 visible'>
                                    <div className='services-box mb-30'>
                                        <SingleItem image={image} title={title} sText={shortText} lText={longText} />
                                    </div>
                                </div> 
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

const SingleItem = ({image, title, sText, lText}) => {
    return (
        <>
            <div className='frontend'>
                <div className='services-icon services1'>
                    {image}
                </div>
                <div className='services-detail'>
                    <h3 className='ser-title'>{title}</h3>
                    <div className='ser-subtitle'>{sText}</div>
                </div>
            </div>
            <div className='backend'>
                <div className='services-detail'>
                    <div className='ser-subtitle'>
                        Sed ut perspiciatis unde omnis iste eaque ipsa quae ab under natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </div>
                </div>
            </div>
        </>
    )
}