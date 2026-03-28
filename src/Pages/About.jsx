import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    return (
        <div ref={ref}>
            <div>
                <img
                    src='/Core/Frame.png' alt='Image'
                    className=''
                />
            </div>
            <div className='relative p-8 h-full hidden sm:block'>
                <div className='flex flex-col'>
                    <div className='ml-16 z-10'>
                        <div>
                            <div className='absolute left-16 mt-5 uppercase text-5xl font-[700] text-[#D0A151] flex flex-col items-center w-full'>
                                <h2>Sarthak Mittal<sup>™</sup></h2>
                                <h3 className='text-sm text-black mt-1 tracking-widest'>CEO OF MITTAL ALLIANCE INDUSTRIES</h3>
                                <img src='/About/Underline.png' alt='Not Real Underline' className='mt-2 w-65' />
                            </div>
                            <div className='absolute top-15 left-12 bg-[#E6C58480]/50 h-[100px] rotate-90 w-[200px]'>
                            </div>
                        </div>
                        <div>
                            <div className='h-full rounded-lg border-2 ml-20 mt-30 w-[1000px]'>
                                <ul className='list-disc p-8 uppercase text-justify leading-relaxed'>
                                    <li>
                                        <p>
                                            <strong>FOUNDER & CEO </strong> of <strong>Mittal Alliance Industries Private Limited (India) </strong> and <strong>Mittal Brandtech Inc. (Colorado, USA) </strong> — two successful enterprises partnering with leading brands and <strong>2000+ industrialists</strong> worldwide.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Recognized globally as <strong>"CEO Sarthak"</strong>, he is a leading expert in <strong>Thought Leadership Personal Branding</strong> and <strong>Founder Personal Brand Strategy</strong> across APAC, USA, and Europe.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            We uphold the highest standards of <strong>quality</strong> and <strong>process</strong>, proudly certified to <strong>ISO</strong> 9001:2015.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Achieved a LinkedIn reach of over <strong>15 million+</strong>, earning the trust and admiration of top industrialists and business leaders.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            AUTHOR of “Contact Centre Success”, a <strong>Kindle book</strong> focused on sales, communication, and customer engagement in call centers.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            PODCASTER & CONTENT CREATOR, running a <strong>YouTube channel</strong> and LinkedIn Live series with <strong>3,500+ subscribers,</strong> offering powerful insights on branding, entrepreneurship, and leadership.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>GLOBAL SPEAKER</strong>, delivering <strong>200+ webinars</strong>, featured on <strong>TEDx</strong>, and honored with <strong>12+ awards</strong> and <strong>70+ testimonials</strong> from clients and forums around the globe — including Mittal Business Exchange, MSFB, and AACST.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ANIMATED DESKTOP IMAGE */}
                    <div className={`
                        absolute top-38 right-15
                        transition-all ease-in-out duration-2000
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-50'}
                    `}>
                        <img
                            src='/About/sarthak.png'
                            alt='CEO Sarthak (Sarthak Mittal) - Founder of Mittal Alliance Industries'
                            className='h-full w-[330px]'
                        />
                    </div>
                </div>
            </div>
            <div className='relative h-173 overflow-hidden sm:hidden'>
                <div className='flex flex-col justify-center text-center'>
                    <div className='z-10'>
                        <div>
                            <div className='absolute px-4 justify-center w-full uppercase font-[700] mt-4 text-[#D0A151] flex flex-col items-center'>
                                <h2 className='text-[26px]'>Sarthak mittal<sup>™</sup></h2>
                                <span className='text-[10px] text-black tracking-widest'>CEO OF MITTAL ALLIANCE INDUSTRIES</span>
                            </div>
                            <div className='absolute top-13 bg-[#E6C58480]/50 h-[40px] rotate-90 -left-6 w-[120px]'>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className='rounded-lg w-[260px] border-2 mt-26 text-[8.5px]'>
                                <ul className='list-disc p-4 uppercase text-justify leading-relaxed'>
                                    <li>
                                        <p>
                                            <strong>FOUNDER & CEO </strong> of <strong>Mittal Alliance Industries Private Limited (India) </strong> and <strong>Mittal Brandtech Inc. (Colorado, USA) </strong> — two successful enterprises partnering with leading brands and <strong>2000+ industrialists</strong> worldwide.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            Recognized globally as <strong>"CEO Sarthak"</strong>, he is one of the <strong>most trusted branding experts</strong> across APAC, USA, and Europe.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            CREATOR of <strong>BADVERSE</strong>  (Breakdown, Analysis, and Decision), a thriving community of over <strong>10,000 members</strong> dedicated to strategic personal and business transformation.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            Achieved a LinkedIn reach of over <strong>15 million+</strong>, earning the trust and admiration of top industrialists and business leaders.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            AUTHOR of “Contact Centre Success”, a <strong>Kindle book</strong> focused on sales, communication, and customer engagement in call centers.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            PODCASTER & CONTENT CREATOR, running a <strong>YouTube channel</strong> and LinkedIn Live series with <strong>3,500+ subscribers,</strong> offering powerful insights on branding, entrepreneurship, and leadership.
                                        </p>
                                    </li>
                                    <br />
                                    <li>
                                        <p>
                                            <strong>GLOBAL SPEAKER</strong>, delivering <strong>200+ webinars</strong>, featured on <strong>TEDx</strong>, and honored with <strong>12+ awards</strong> and <strong>70+ testimonials</strong> from clients and forums around the globe — including Mittal Business Exchange, MSFB, and AACST.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ANIMATED MOBILE IMAGE */}
                <div className={`
                    absolute top-75 right-[-68px]
                    transition-all ease-in-out duration-1000
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}
                `}>
                    <img
                        src='/About/sarthak.png'
                        alt='CEO Sarthak Personal Branding Expert'
                        className='w-[230px]'
                    />
                </div>

                <div className='absolute top-35 right-[-3px]'>
                    <div className="bg-black h-18 w-30 rounded-lg flex flex-col items-center justify-center p-3">
                        <span className="bg-gradient-to-r from-[#CC9A48] to-[#C99748] bg-clip-text text-transparent font-bold text-[10px] uppercase">
                            Sarthak mittal<sup>™</sup>
                        </span>
                        <span className="text-white text-[7px] mt-1 text-center">
                            FOUNDER & CEO of Mittal Alliance Industries
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;