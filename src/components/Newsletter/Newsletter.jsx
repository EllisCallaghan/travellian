import React from 'react'
import './Newsletter.css'
const Newsletter = ({className}) => {
  return (
    <div className={`${className}`}>
      <div className='items-center md:items-start border rounded-[26px] bg-white border-[rgba(0,0,0,0.2)] flex flex-row
      md:flex-col w-[1262px] lg:w-[1080px] md:w-[732px] sm:w-[288px] h-[232px] md:h-[324px] sm:h-[463px] py-[60px] md:py-[40px] px-[80px] md:px-[40px]
      sm:px-[20px] lg:px-[40px] gap-[100px] lg:gap-[60px]'>
          <h1 className='font-primary md:text-left text-gray text-[64px] lg:text-[54px] sm:text-[40px] leading-[85px] lg:leading-[72px] sm:leading-[53px]'>Our Newsletter</h1>

          <form className='flex flex-row sm:flex-col gap-[32px] items-end'>
              <div className='flex flex-col gap-[16px]'>
                  <label htmlFor='email' className='text-left text-gray text-[20px] leading-[23.7px]'>Email</label>
                  <input className='rounded-[12px] bg-[#FFE8D4] w-[372px] lg:w-[378px] md:w-[457px] sm:w-[248px] py-[24px] px-[40px] text-[20px] leading-[23.7px]'
                  type='email' name='email' placeholder={'Enter your email'}
                  />
              </div>
              <button className='bg-primary sm:w-[248px] rounded-[12px] h-[73px] text-white px-[40px] py-[16px] text-[20px] leading-[23.7px]'>
                  Subscribe
              </button>
          </form>
      </div>
    </div>
  )
}

export default Newsletter