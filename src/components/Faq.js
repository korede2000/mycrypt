import React, {useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import FaqImg from '../images/faq-image.png';

const data = [
  {
    id: 1,
    title: 'Do I have to allow the use of cookies?',
    category: 'important',
    info:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    title: 'How do I change my My Page password?',
    category: 'important',
    info:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    title: 'What is BankID?',
    category: 'important',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 4,
    title: 'Whose birth number can I use?',
    category: 'important',
    info:
      'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    category: 'important',
    info:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
  {
    id: 6,
    title: 'Do I have to allow the use of cookies?',
    category: 'essential',
    info:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 7,
    title: 'How do I change my My Page password?',
    category: 'essential',
    info:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 8,
    title: 'What is BankID?',
    category: 'essential',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
];

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

export default function Faq() {

    const [questions, setQuestions] = useState(data);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setQuestions(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setQuestions(newItems);
    }
    console.log(setCategories);
    return (
        <>
            
            <section className='section-padding blue-bg dots-after'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='row justify-content-center'>
                            <div className='col-xl-6 centered'>
                                <div className='section-title cl-white'>
                                    <h4>
                                        <span>New</span>
                                        Any asking
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-xl-12 col-lg-12 col-md-12-col-sm-12'>
                                <div className='faq-content mb-30'>           
                                    <Categories categories={categories} filterItems={filterItems} />
                                    <SingleData data={questions} />   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 text-center justify-content-center flex-align order-r-2'>
                        <div className='work-box w-100'>
                            <div className='work-box-bg'></div>
                            <img src={FaqImg} className='rotation' alt='work process' />
                        </div>
                    </div>
                </div>
                
                
            </section>
        </>
    )
}

const Categories = ({ categories, filterItems }) => {
    return (
        <div className='faq-filter'>
            {categories.map((category, index) => {
                return (
                    <button
                        type='button'
                        key={index}
                        onClick={() => filterItems(category)}
                        className='faq-filter-btn bttn-small btn btn-fill'
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

const SingleData = ({ data }) => {
    
    return (
        <>
            {data.map((dataItem) => {
                const { id, title, info } = dataItem;
                return (
                    <div key={id} className='question'>
                        <SingleQuestion title={title} info={info} />
                    </div>
                )
            })}
        </>
    )
}

const SingleQuestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
        <header>
            <h4>{title}</h4>
            <button className='faq-btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <FaMinus /> : <FaPlus /> }
            </button>
        </header>
            {showInfo && <p>{info}</p>}
        </>
    )
}