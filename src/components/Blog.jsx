import React from 'react'
import { blog1,arrowPrimary } from '../images'
const Blog = () => {
  return (
    <div className='my-[140px] lg:my-[100px] mx-[182px] xl:mx-[32px] '>
        <div className='flex gap-[100px] flex-col '>
                <div className='flex flex-col items-start gap-[32px] xl:gap-[24px]'>
                    <h1 className='font-primary text-secondary text-[64px] md:text-[54px] sm:text-[40px] leading-[85.31px] md:leading-[72px] sm:leading-[53.32px]'>Our Blog</h1>
                    <div className='flex border-b-[3px] border-primary items-start h-[3px] w-[150px]'/>
                    <p className='text-start text-gray text-[24px] sm:text-[18px] leading-[28.44px] sm:leading-[21.33px]'>
                        An insight the incredible experience in the world
                    </p>
                </div>
                <div className='flex gap-[32px] sm:gap-[24px] justify-between items-center md:flex-wrap '>
                    <img className='md:object-cover w-[762px] xl:w-[672px] lg:w-[528px] md:w-[728px] sm:w-[288px] h-[873px] xl:h-[802px] lg:h-[686px] md:h-[555px] sm:h-[314px] rounded-[26px]' src={blog1}/>
                    <div className='flex flex-col justify-center gap-[24px] py-[106.5px] lg:py-[32px]'>
                        <h1 className='text-secondary font-primary
                        text-[54px] sm:text-[40px] leading-[72px] sm:leading-[53.32px] text-start'>
                            Beautiful Italy<br/> Let's travel
                        </h1>
                        <p className='text-[24px] lg:text-[18px] leading-[52px] lg:leading-[42px] text-start'>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.
                        </p>

                        <button className='align-top items-center flex flex-row gap-[20px] text-primary text-[24px] leading-[52px]'>
                            <p className='text-primary pb-[3px]'>Read More</p> 
                            <img src={arrowPrimary} alt='arrow'/>
                        </button>
                        

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Blog