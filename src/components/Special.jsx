import React from 'react'
import { arrowLeft,arrowRight,special1,special2,special3,rating } from '../images';

const CardData = [
  {
    image:`${special1}`,
    title:'Lisbon,Portugal',
    text:'5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    price:'€500',
    index:'1'
  },
  {
    image:`${special2}`,
    title:'Athens,Greece',
    text:'5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    price:'€800',
    index:'2'
  },
  {
    image:`${special3}`,
    title:'Rome,Italy',
    text:'5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    price:'€750',
    index:'3'
  },
  {
    image:`${special1}`,
    title:'Rome,Italy',
    text:'5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    price:'€750',
    index:'4'
  },
  {
    image:`${special2}`,
    title:'Athens,Greece',
    text:'5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
    price:'€800',
    index:'5'
  },
];

const Special = () => {
    const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 306;
    } else {
      current.scrollLeft += 306;
    }
  };
  return (
    <div className='flex md:justify-between my-[140px] lg:my-[100px] sm:my-[80px] mx-[182px] xl:mx-[32px] md:mx-[20px] sm:mx-[16px] flex-col gap-[100px]'>
      <div className=' flex flex-row justify-between items-end h-[165px]'>
        <div className='flex w-[172px] h-[60px] gap-[40px] items-end md:hidden'>
          <button className='bg-secondary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('left')}>
              <img src={arrowLeft} alt='arrow left' />
            </button>
            <button className='bg-primary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('right')}>
              <img src={arrowRight} alt='arrow right' />
            </button>
        </div>

        <div className=' flex flex-row justify-between items-end md:w-full md:justify-end'>
          <div className=' flex flex-col gap-[20px] justify-between
           items-end sm:items-start'>
              <h1 className='flex font-primary text-[64px] md:text-[54px] text-secondary
              items-start text-right sm:text-start md:leading-[72px] sm:text-[40px] sm:leading-[53.32px]'>
                  Special Offer
              </h1>
              <div className='flex border-b-[3px] border-primary items-start
              h-[3px] w-[241px]'/>
              <p className='text-end sm:text-start text-[24px] leading-[28px] text-gray sm:text-[18px] sm:leading-[21.33px]'>
                Check out our special offer and discounts
              </p>
          </div>
      </div>
    </div>
      <div className='flex items-start'>
        <div className='flex flex-row overflow-x-scroll scroll-smooth ' ref={scrollRef}>
          <div className='flex flex-row 
           gap-[32px] sm:gap-[16px] ' >
            {CardData.map((item,index) =>(
              <div className='w-[497px] xl:w-[437.33px] lg:w-[341.33px] md:w-[728px] sm:w-[288px] sm:mx-0 h-[629px] lg:h-[623px] md:h-[560px] sm:h-[675px] flex flex-col items-start  ' key={index}>
                <img src={item.image} alt="galleryImage" className='object-cover w-[497px] xl:w-[437.33px] lg:w-[341.33px] md:w-[728px] sm:w-[288px] min-h-[286px] rounded-[26px]'/>
                <div className='my-[40px] mx-[24px] sm:mx-[20px] sm:my-[24px] flex gap-[24px] flex-col'>
                  <div className=' flex flex-col items-start gap-[8px]'>
                    <h3 className='text-[28px] text-gray leading-[35.14px]'>{item.title}</h3>
                    <img src={rating}/>
                  </div>
                  <div className='text-start'>
                    <p className='lg:text-[18px] sm:text-[16px] lg:leading-[21.33px] sm:leading-[20px]'>{item.text}</p>
                  </div>
                  <div className='flex flex-row sm:flex-col sm:gap-[20px] justify-between'>
                    <div className='flex flex-row gap-[8px] items-center'>
                      <p className='text-gray text-[20px] lg:text-[18px] leading-[23.7px] lg:leading-[21.33px]'>From</p>
                      <h1 className='text-primary text-[40px] lg:text-[28px] leading-[47.4px] lg:leading-[33.18px]'>{item.price}</h1>
                    </div>
                      <button className='bg-primary w-[159px] lg:w-[127px] h-[64px] lg:h-[56px] rounded-[12px]
                      text-[20px] leading-[23.7px] text-white'>
                        DETAILS
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='hidden justify-center md:flex h-[60px] gap-[40px] items-center'>
          <button className='bg-secondary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('left')}>
              <img src={arrowLeft} alt='arrow left' />
            </button>
            <button className='bg-primary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('right')}>
              <img src={arrowRight} alt='arrow right' />
            </button>
        </div>
  </div>
  )
}

export default Special