import React from 'react'
import { cards } from '../constants'

const TestimonialSection = () => {
  return (
    <section className='testimonials-section'>
        <div className='absolute size-full flex flex-col items-center pt-[5vw]'>
            <h1 className='text-black first-title'>What's</h1>
            <h1 className='text-light-brown sec-title'>EveryOne</h1>
            <h1 className='text-black third-title'>talking</h1>
        </div>

        <div className='pin-box'>
            {
                cards.map((cards,index)=>(
                    <div key={index} className={`vd-card ${cards.translation} ${cards.rotation}`} onMouseEnter={()=> handlePlay(index)}>
                        <video src={cards.src} playsInline muted loop className='object-cover size-full'></video>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default TestimonialSection