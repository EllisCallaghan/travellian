import React from 'react'
import { arrow } from '../images'
const CTA = () => {
  return (
        <form className='flex flex-row sm:flex-col justify-start items-center border  
        border-none gap-[100px] sm:gap-[60px] bg-white rounded-r-[20px] 
        sm:mx-[16px] sm:rounded-[16px] max-w-[100vw]'>

            <div className='sm:w-full flex gap-[40px] py-[74px] lg:py-[55.5px] pl-[182px] xl:pl-[32px] sm:pl-0 items-end justify-center flex-wrap md:flex-row max-w-[100vw] sm:max-w-none'>

                <div className='flex-1 flex flex-col max-h-[68px] max-w-[248px] min-w-[225.25px] lg:min-w-[158.5px] sm:min-w-[248px] sm:h-[58px] gap-[12px]'>
                    <label htmlFor='destination' className='text-left text-gray'>DESTINATION</label>
                    <input type='text' placeholder='destination' defaultValue='Dubai' className='text-secondary text-[20px] xl:text-[18px] lg:text-[16px] leading-[26.66px] lg:leading-[21.33px] xl:leading-[24px] font-primary h-[37px] border-b-[1px] border-black outline-offset-[10px]'/>
                </div>
                <div className='flex-2 flex flex-col max-w-[248px] sm:min-w-[248px] min-w-[225.25px] lg:min-w-[158.5px] max-h-[68px] border-b-[1px] border-black outline-offset-[10px]'>
                    <label htmlFor='person' className='text-left text-[16px] mb-[12px] text-gray'>PERSON</label>
                    <select name='person' className='text-secondary h-[37px] font-primary text-[20px] xl:text-[18px] lg:text-[16px] leading-[26.66px] lg:leading-[21.33px] xl:leading-[24px] '>

                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='flex-3 flex flex-col max-w-[248px] sm:min-w-[248px] min-w-[225.25px] lg:min-w-[158.5px] max-h-[68px] border-b-[1px] border-black outline-offset-[10px]'>
                    <label htmlFor='checkIn' className='text-left mb-[12px] text-gray'>CHECK IN</label>
                    <select name='person'className='text-secondary h-[37px] font-primary text-[20px] xl:text-[18px] lg:text-[16px] leading-[26.66px] lg:leading-[21.33px] xl:leading-[24px] ' >
                        <option value="1">Sun,17th Sep 2020</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='flex-4 flex flex-col max-w-[248px] sm:min-w-[248px] min-w-[225.25px] lg:min-w-[158.5px] max-h-[68px] border-b-[1px] border-black outline-offset-[10px]'>
                    <label htmlFor='checkOut' className='text-left mb-[12px] text-gray'>CHECK OUT</label>
                    <select name='person' className='text-secondary h-[37px] font-primary text-[20px] xl:text-[18px] lg:text-[16px] leading-[26.66px] lg:leading-[21.33px] xl:leading-[24px] '>
                        <option value="1">Tue,17th Oct 2020</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
            <button type='submit' className='h-full sm:w-full sm:h-[128px] max-w-[170px] sm:max-w-none
             md:w-[288px] flex justify-between items-center bg-primary  
             px-[20px] border rounded-r-[20px] sm:rounded-r-none sm:!rounded-b-[16px] border-none text-white'>
                <div className='font-primary text-[36px] leading-[48px] text-left'>
                Book Now
                </div>
                <div className=''>
                    <img src={arrow} className='' alt='arrow'/>
                </div>
            </button>

        </form>

  )
}

export default CTA