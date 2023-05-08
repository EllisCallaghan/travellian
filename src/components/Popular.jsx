import React from 'react'
import { arrowLeft,arrowRight,popular1,popular2,popular3,popular4 } from '../images';

const Popular = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 336;
    } else {
      current.scrollLeft += 336;
    }
  };

  return (
    <div className=' flex h-full flex-col gap-[100px] 
    my-[140px] lg:my-[100px] md:my-[80px] ml-[182px] xl:ml-[32px] md:mx-[20px] sm:mx-[16px]'>
      <div className='flex flex-row justify-between items-end mr-[182px] xl:mr-[32px] sm:mr-0'>
        <div className=' flex justify-start flex-col gap-[20px] 
         '>
            <h1 className=' font-primary font-[400] text-[64px] md:text-[54px] sm:text-[40px] text-secondary
             leading-[85.31px] md:leading-[72px] sm:leading-[53.32px] text-left'>
                Popular Destinations
            </h1>
            <div className='flex border-b-[3px] border-primary items-start
            h-[3px] w-[227px]'/>
            <p className='flex items-start text-[24px] md:text-[20px] sm:text-[18px] leading-[28.44px] md:leading-[23.7px] sm:leading-[21.33px] text-gray text-left mt-[12px]'>
              Most popular destinations around the world,from historical
              places <br className='hidden lg:block sm:hidden'/> to natural wonders.
            </p>
        </div>
        <div className='flex h-[60px] gap-[40px] items-center md:hidden'>
            <button className='bg-secondary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('left')}>
                <img src={arrowLeft} alt='arrow left' />
              </button>
              <button className='bg-primary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('right')}>
                <img src={arrowRight} alt='arrow right' />
              </button>
        </div>
        </div>

      <div className='flex items-start'>
        <div className='flex flex-row overflow-x-scroll scroll-smooth' ref={scrollRef}>
          <div className='flex flex-row 
           gap-[16px] ' >
            {[popular1,popular2,popular3,popular4].map((image,index) =>(
              <div className='w-[497px] md:w-[728px] sm:w-[288px] h-[661px] md:h-[456px] sm:h-[320px] flex items-center mx-[16px] md:mx-0' key={index}>
                <img src={image} alt="galleryImage" className='object-cover w-[497px] md:w-[728px] sm:w-[288px] h-[661px] md:h-[456px] sm:h-[320px] rounded-[26px]'/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='hidden justify-center h-[60px] gap-[40px] items-center md:flex'>
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

export default Popular