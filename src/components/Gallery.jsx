import React from 'react'
import { useState } from 'react';
import { gallery1,gallery2,gallery3,gallery4,arrowLeft,arrowRight } from '../images';

const GalleryCard=({index,id,img,active,handleClick,handleLeave})=>(
    <div className={`relative w-[365px] xl:w-[320px] lg:w-[248px] md:w-[596px] sm:w-[288px] h-[570px] xl:h-[469px] lg:h-[426px] md:h-[351px]  ${
        active === id ? 'mb-[80px] sm:mb-0': 'my-[37.5px] md:my-0'
    }`} onMouseEnter={() => handleClick(id)} onMouseLeave={() => handleLeave('')}>
        <img src={img} className=' w-[365px] xl:w-[320px] lg:w-[248px] md:w-[596px] sm:w-[288px] h-[570px] xl:h-[469px] lg:h-[426px] md:h-[351px] sm:h-[320px] object-cover rounded-[26px]'/>
        
    </div>
)

const Gallery = () => {
    const [active,setActive] = useState('');
    
    const scrollRef = React.useRef(null);
  
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    };

    return (
        <div className='flex items-center h-full my-[140px] mx-[182px] xl:mx-[32px] flex-col gap-[100px]'>
        <div className='flex flex-row items-end h-[165px]'>
            <div className=' flex justify-between flex-col gap-[20px] w-[1352px] xl:w-[1172px] lg:w-[884px] md:w-[728px] sm:w-[288px]
            h-[105px]'>
                <h1 className='flex font-primary text-[64px] md:text-[54px] sm:text-[40px] leading-[85.31px] md:leading-[72px] sm:leading-[53.32px] text-secondary
                items-start text-left'>
                    Destination Gallery
                </h1>
                <div className='flex border-b-[3px] border-primary items-start
                h-[3px] w-[283px]'/>
                <p className='flex items-start text-[24px] sm:text-[18px] leading-[28.44px] sm:leading-[21.33px] text-gray'>
                    Our photo gallery on trip
                </p>
            </div>
    
            <div className='flex md:hidden min-w-[172px] h-[60px] gap-[40px] pt-[105px] items-start'>
                <button className='bg-secondary px-[28px] py-[20px] rounded-[12px]' onClick={() => scroll('left')}>
                    <img src={arrowLeft} alt='arrow left' className='w-[10px] h-[20px]' />
                </button>
                <button className='bg-primary px-[28px]  py-[20px] rounded-[12px]' onClick={() => scroll('right')}>
                    <img src={arrowRight} alt='arrow right' className='w-[10px] h-[20px]'/>
                </button>
            </div>
        </div>
        <div className='flex items-start mt-[100px] w-[1556px] xl:w-[1376px] lg:w-[1088px] md:w-[596px] sm:w-[288px]'>
            <div className='flex flex-row  overflow-x-scroll scroll-smooth' ref={scrollRef}>
            <div className='flex flex-row md:flex-col
                gap-[32px] ' >
                {[gallery1,gallery2,gallery3,gallery4,gallery1].map((image,index) =>(
                <GalleryCard
                    index={image.length}
                    img={image}
                    id={index}
                    active={active}
                    handleClick={setActive}
                    handleLeave={setActive}
                />
                ))}
            </div>
            </div>
        </div>
        
    </div>
    
    )
      }
    

export default Gallery