import React, { useRef } from 'react'
import { cards } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TestimonialSection = () => {

    const vdRef = useRef([]);

    useGSAP(()=>{
        gsap.set(".testimonials-section",{
            marginTop:"-140vh",
        });

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"top bottom",
                end:"200% top",
                scrub:true,
            },
        });

        tl.to(".testimonials-section .first-title",{
            xPercent:70,
            
        },"<").to(".testimonials-section .sec-title",{
            xPercent:25,
            
        },"<").to(".testimonials-section .third-title",{
            xPercent:-70,
            
        });

        const pinTl =   gsap.timeline({
            scrollTrigger:{
                trigger:".testimonials-section",
                start:"10% top",
                end:"200% top",
                scrub:1.5,
                pin:true,

            },
        });
        pinTl.from(".vd-card",{
            yPercent:150,
            stagger:0.2,
            ease:"power1.inOut",
        });
    })

    const handlePlay = (index)=>{
        const video = vdRef.current[index];
        video.play();
    };

    const handlePause = (index)=>{
        const video = vdRef.current[index];
        video.pause();
    }
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
                    <div key={index} className={`vd-card ${cards.translation} ${cards.rotation}`} onMouseEnter={()=> handlePlay(index)}
                    onMouseLeave={()=> handlePause(index)}>
                        <video ref={(el)=> (vdRef.current[index] = el)} src={cards.src} playsInline muted loop className='object-cover size-full'></video>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default TestimonialSection