import React from 'react'
import { traveller1, traveller2, traveller3,rating,arrowLeft,arrowRight } from '../images';

const CardData = [
  {
    image:`${traveller1}`,
    name:'John Doe',
    text:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
    job:'Accountant',
    index:'1'
  },
  {
    image:`${traveller2}`,
    name:'Joe Smith',
    text:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
    job:'Journalist,HWO News',
    index:'2'
  },
  {
    image:`${traveller3}`,
    name:'Tamara Bellis',
    text:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
    job:'Managing Director,JTH',
    index:'3'
  },
  {
    image:`${traveller3}`,
    name:'Tamara Bellis',
    text:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
    job:'Managing Director,JTH',
    index:'3'
  }
];

const Travelers = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 306;
    } else {
      current.scrollLeft += 306;
    }};
  return (
    <div className='mt-[140px] mb-[240px] lg:mb-[160px] lg:pb-[200px] md:pb-0 lg:my-[100px] md:my-[80px] ml-[182px] xl:ml-[32px] sm:ml-[16px] flex flex-col gap-[95px]'>
        <div>
            <h1 className='mb-[20px] text-left text-secondary font-primary text-[64px] md:text-[54px] sm:text-[48px] leading-[85.31px] md:leading-[72px] sm:leading-[64px]'>Traveler's Experiences</h1>
            <div className='flex border-b-[3px] border-primary items-start
                h-[3px] w-[231px]'/>
            <p className='mt-[32px] text-start text-gray font-[400] text-[24px] sm:text-[18px] leading-[28.44px] sm:leading-[21.33px]'>
              Here's some awesome feedback from our travelers
            </p>
        </div>
        <div className='flex items-start'>
          <div className='flex flex-row overflow-x-scroll scroll-smooth ' ref={scrollRef}>
            <div className='flex flex-row 
            gap-[32px] sm:gap-[16px] ' >
              {CardData.map((item,index) =>(
                <div className='px-[40px] py-[60px] w-[663px] xl:w-[562px] lg:w-[500px] sm:w-[288px] sm:px-[20px] sm:py-0 flex flex-col items-start  ' key={index}>
                  <div className='my-[40px] mx-[24px] sm:mx-[20px] sm:my-[24px] flex gap-[24px] flex-col'>
                    <div className=' flex flex-col items-start gap-[8px]'>
                      <img src={item.image} alt="galleryImage" className='object-cover w-[100px] h-[100px] rounded-[100px]'/>
                    </div>
                    <div className='text-start'>
                      <p className='text-gray text-[18px] sm:text-[16px] leading-[23px]'>{item.text}</p>
                    </div>
                    <img src={rating} className='w-[136px] h-[24px]'/>

                    <div className='flex flex-row sm:flex-col sm:gap-[20px] justify-between'>
                      <div className='flex flex-col gap-[4px]'>
                        <h1 className='text-gray text-[24px] leading-[32px] text-left'>{item.name}</h1>
                        <p className='text-gray text-[18px]  leading-[21.33px] text-left'>{item.job}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        <div className='flex justify-end md:justify-center md:flex h-[60px] gap-[40px] items-center mr-[182px] xl:mr-[32px] sm:mr-[16px] mt-[65px]'>
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

export default Travelers