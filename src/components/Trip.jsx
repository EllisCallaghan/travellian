import React from 'react'
import { useState } from 'react'
import { trip1,trip2,trip3,trip4,rating } from '../images'
const Trips = [{
    image:`${trip1}`,
    title:'Rome City Tour',
    price:'€102/day',
    days:'7',
    index:'1'
},
{
    image:`${trip2}`,
    title:'Paris City Tour',
    price:'€99/day',
    days:'7',
    index:'2'
},
{
    image:`${trip3}`,
    title:'Barcelona City Tour',
    price:'€98/day',
    days:'9',
    index:'3'
},
{   image:`${trip4}`,
    title:'Berlin City Tour',
    price:'€110/day',
    days:'5',
    index:'4'},
    {   image:`${trip4}`,
    title:'Berlin City Tour',
    price:'€110/day',
    days:'5',
    index:'5'},
        
]

const TripCard = ({id,img,title,index,price,active,handleClick,days}) => (
    <div className={`relative w-[300px] lg:w-[250px] min-w-[300px] lg:min-w-[250px] md:min-w-[728px] sm:min-w-[288px] : ${
        active === id ? '': 'my-[73px]'
    }`} onClick={() => handleClick(id)}>
        <img src={img} alt={title} className=' w-[300px] lg:w-[250px] h-[400px] lg:h-[350px] md:min-w-[728px] sm:min-w-[288px] object-cover rounded-[26px]'/>
        {active !== id ? (<div></div>):(
            <div className='py-[20px] flex gap-[20px] flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] leading-[21.33px]'>GUIDED TOUR</p>
                    <p>{price}</p>
                </div>
                <div>
                    <h1 className='font-primary text-[28px] leading-[37.32px] text-start font-[600]'>{title}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <img src={rating}/>
                    <p>{days} Days tour</p>
                </div>
            </div>
        )}
    </div>
    )



const Trip = () => {
const [active,setActive] = useState('2');
  return (
    <div className='my-[140px] ml-[182px] md:ml-0 xl:ml-[32px] md:!mx-[20px]
    flex flex-row md:flex-col gap-[100px] items-center md:items-start lg:justify-between'>
        <div className='flex flex-col max-w-[394px] md:max-w-[332px] h-[221px] xl:h-[344.5px] md:h-[352.5px] justify-between gap-[32px]'>
            <h1 className='text-left text-secondary font-primary text-[64px] md:text-[54px] sm:text-[40px] leading-[85.31px] md:leading-[72px] sm:leading-[53.32px]'>Trip Planners</h1>
            <div className='flex border-b-[3px] border-primary items-start
              h-[3px] w-[231px]'/>
            <p className='text-start text-gray text-[18px] leading-[21.33px]'>
            20 years from now you will be more <br className='block lg:hidden'/>
             disappointed by the things that you didn’t do.<br className='block lg:hidden'/>
              Stop regretting and start travelling, start<br className='block lg:hidden'/>
               throwing off the bowlines.
            </p>
            <div className='ml-[26px] sm:ml-0 mt-[35px] flex justify-between items-start max-w-[218px]'>
                <div className='absolute z-10 h-[43px] w-[43px] bg-secondary '/>
                <button className='max-w-[186px] h-[61px] rounded-[12px] p-[20px] flex items-center
                text-[18px] bg-primary text-white z-20 my-[14.5px] ml-[14px]'>
                    View all trip plans
                    
                </button>
                <div className='self-end z-10 h-[43px] w-[43px] bg-gray translate-x-[-25px]'/>
            </div>
            
        </div>
        <div className="flex flex-row md:flex-col gap-[32px] md:gap-0 max-w-[1244px] md:max-w-[728px] xl:max-w-[902px] sm:max-w-[288px] overflow-hidden xl:overflow-x-scroll scroll-smooth ">
            {Trips.map((item,index) => (
                <TripCard id={item.index} 
                key={index}
                title={item.title} 
                img={item.image}
                price={item.price}
                active={active}
                days={item.days}
                handleClick={setActive}/>
            ))}
        </div>
    </div>
  )
}

export default Trip