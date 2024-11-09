import React from 'react';

const Body = () => {
    return (
        <div>
            <section className='flex justify-between items-center mt-36 gap-16 xs:flex-col xl:flex-row'>
                <div className='xs:text-center xl:text-left'>
                    <h1 className='text-darkGreen font-extrabold heading xs:text-[50px] xs:leading-[55px] sm:text-[65px] sm:leading-[70px] lg:text-[85px] lg:leading-[90px]'><span className='text-brightGreen'>Attend Live</span> Classes Every Week</h1>
                    <p className='mt-6 text-gray-600'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
                    <button className='buttonStyle bg-brightGreen mt-6 hover:bg-darkGreen'>Join 24/7 WhatsApp + discord for $5/month</button>
                </div>

                <img src="/assets/bootcamp.png" alt="AI Bootcamp" className='bootcampImg h-full smd:w-[474px] xs:w-full' />
            </section>


            <section className='flex items-center justify-center gap-14 mt-16 xs:flex-wrap xl:flex-nowrap'>
                <div className='featureDiv'>
                    <img src="/assets/icon-guides.svg" alt="" className='h-7'/>
                    <p>5+ guides for free</p>
                </div>

                <div className='featureDiv'>
                    <img src="/assets/icon-courses.svg" alt="" className='h-7'/>
                    <p>Exclusive Courses & Projects</p>
                </div>
                
                <div className='featureDiv'>
                    <img src="/assets/icon-whatsapp.svg" alt="" className='h-7'/>
                    <p>24/7 WhatsApp Support Group</p>
                </div>

                <div className='featureDiv'>
                    <img src="/assets/icon-sessions.svg" alt="" className='h-7'/>
                    <p>1:1 Free Session</p>
                </div>
            </section>


            <section className='flex items-center justify-center sm:mt-36 xs:mt-20 gap-10 xs:flex-wrap xl:flex-nowrap'>
                <div className='flex flex-col items-center text-center'>
                    <img src="/assets/avatars/avatar-aryan.webp" alt="" className='h-20'/>
                    <q className='font-medium text-gray-600 mt-6'>This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level.</q>
                    
                    <p className='font-bold text-sm mt-6'>Aryan Singh</p>
                    <p className='text-gray-500 text-sm mt-2 font-semibold'>SWE at Google</p>

                    <div className='flex gap-1 mt-4'>
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                    </div>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <img src="/assets/avatars/avatar-kevin.webp" alt="" className='h-20 rounded-full'/>
                    <q className='font-medium text-gray-600 mt-6'>The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community.</q>

                    <p className='font-bold text-sm mt-5'>Kevin Smith</p>
                    <p className='text-gray-500 text-sm mt-2 font-semibold'>SWE at Tesla</p>

                    <div className='flex gap-1 mt-6'>
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                    </div>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <img src="/assets/avatars/avatar-umang.webp" alt="" className='h-20 rounded-full'/>
                    <q className='font-medium text-gray-600 mt-6'>Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp Group has been an incredible resource for networking and collaboration. I highly recommend this community.</q>

                    <p className='font-bold text-sm mt-5'>Umang Chaudhary</p>
                    <p className='text-gray-500 text-sm mt-2 font-semibold'>SWE at TikTok</p>

                    <div className='flex gap-1 mt-6'>
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                        <img src="/assets/icon-star.svg" alt="" />
                    </div>
                </div>
            </section>


            <section className='sm:mt-36 xs:mt-20 text-center'>
                <h1 className='uppercase font-extrabold smd:text-[48px] smd:leading-[55px] xs:text-[30px] xs:leading-[38px]'>Simple no-tricks pricing</h1>
                <p className='text-gray-600 font-semibold mt-3'>Everything you need to grow 10x for less than a coffee.</p>

                <div className='rounded-3xl flex justify-between p-3 ring-2 ring-gray-100 mt-16 lg:flex-row xs:flex-col'>
                    <div className='smd:p-7 xs:p-3 text-left'>
                        <h1 className='font-bold text-2xl'>Premium Elite Subscription</h1>
                        <p className='text-gray-600 mt-6'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>

                        <div className='flex gap-4 items-center sm:mt-20 xs:mt-10'>
                            <div className='flex gap-1'>
                                <p className='text-brightGreen font-bold'>What's</p>
                                <p className='text-brightGreen font-bold'>included</p>
                            </div>
                            <div className='h-[2px] w-full bg-gray-200'></div>
                        </div>

                        <div className='flex items-center md:gap-20 smd:flex-row xs:flex-col xs:gap-6 xs:justify-center lg:justify-between mt-7'>
                            <div className='flex gap-2 items-center'>
                                <img src="/assets/icon-check.svg" alt="" />
                                <p className='text-gray-600 font-medium'>Expert Mentors</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="/assets/icon-check.svg" alt="" />
                                <p className='text-gray-600 font-medium'>Exclusive Courses</p>
                            </div>
                        </div>

                        <div className='flex items-center md:gap-20 smd:flex-row xs:flex-col xs:gap-6 xs:justify-center lg:justify-between mt-6'>
                            <div className='flex gap-2 items-center'>
                                <img src="/assets/icon-check.svg" alt="" />
                                <p className='text-gray-600 font-medium'>Networking & Collaboration</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="/assets/icon-check.svg" alt="" />
                                <p className='text-gray-600 font-medium'>Career guidance</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-100 flex flex-col justify-center items-center ring-gray-100 ring-2 rounded-2xl xl:px-36 xl:py-10 xs:px-12 xs:py-5 xs:mt-8'>
                        <p className='text-gray-600 font-semibold mt-3'>Less than a cup of coffee.</p>
                        <div className='flex items-center gap-1 mt-4'>
                            <h1 className='text-black font-extrabold text-5xl'>$5</h1>
                            <h1 className='text-gray-500 line-through text-4xl font-semibold'>$1000</h1>
                        </div>
                        <button className='buttonStyle bg-brightGreen hover:bg-darkGreen mt-6 py-3 px-6 text-base'>Join Community</button>
                        <img src="/assets/members.png" alt="" className='h-8 mt-6'/>
                        <p className='text-sm font-semibold mt-3'>100+ Active Members</p>
                    </div>
                </div>
            </section>


            <section className='sm:mt-36 xs:mt-20 text-center'>
                <h1 className='uppercase font-extrabold smd:text-[48px] smd:leading-[55px] xs:text-[30px] xs:leading-[38px]'>Everything you need in <br /> one community</h1>
                <p className='text-gray-600 font-semibold mt-6'>Unleashing your digital potential for lasting success.</p>

                <div className='flex sm:gap-12 lg:gap-24 justify-center smd:mt-12 xs:mt-0 xs:flex-wrap xl:flex-nowrap'>
                    <div className='flex flex-col items-center w-[260px]'>
                        <img src="/assets/illustration-mentors.svg" alt="" className='hoverPic transitionElement'/>
                        <h2 className='uppercase font-bold text-xl mt-4'>Expert mentors</h2>
                        <p className='text-gray-600 font-medium text-sm mt-4'>Get personalized guidance from expert mentors to take your coding skills to the next level.</p>
                    </div>

                    <div className='flex flex-col items-center w-[260px]'>
                        <img src="/assets/illustration-networking.svg" alt="" className='hoverPic transitionElement'/>
                        <h2 className='uppercase font-bold text-xl mt-4'>Networking</h2>
                        <p className='text-gray-600 font-medium text-sm mt-4'>Connect with like-minded coders from around the world and collaborate on exciting projects.</p>
                    </div>

                    <div className='flex flex-col items-center w-[260px]'>
                        <img src="/assets/illustration-courses.svg" alt="" className='hoverPic transitionElement'/>
                        <h2 className='uppercase font-bold text-xl mt-4'>Courses</h2>
                        <p className='text-gray-600 font-medium text-sm mt-4'>Exclusive courses in Full Stack, AI, Blockchain, and more to help you stay ahead of the curve.</p>
                    </div>
                </div>
            </section>


            <section className='flex items-center justify-between md:mt-36 xs:mt-16 xs:flex-wrap xs:justify-center xl:flex-nowrap gap-10'>
                <img src="/assets/company-logos/adobe.svg" alt="" className='w-40'/>
                <img src="/assets/company-logos/airbnb.svg" alt="" className='w-40'/>
                <img src="/assets/company-logos/figma.svg" alt="" className='w-40'/>
                <img src="/assets/company-logos/framer.svg" alt="" className='w-40'/>
                <img src="/assets/company-logos/google.svg" alt="" className='w-40'/>
                <img src="/assets/company-logos/dropbox.svg" alt="" className='w-40'/>
            </section>

            <section className='flex sm:mt-36 xs:mt-20 items-center justify-between xs:px-4 md:px-20 xs:flex-col xs:gap-16 xl:flex-row'>
                <div className='xs:text-center xl:text-left'>
                    <h1 className='uppercase font-extrabold smd:leading-[55px] smd:text-[48px] xs:text-[30px] xs:leading-[38px]'>Gain a competitive <br /> edge in job market</h1>
                    <p className='text-gray-600 font-semibold mt-6'>Join founders, freelancers, designers, FAANG <br /> engineers, indie hackers, and more in our 24/7 <br /> WhatsApp Group for less than a cup of coffee.</p>
                    <p className='text-brightGreen font-bold uppercase mt-8'>What you'll get</p>

                    <div className='flex items-center gap-2 mt-6 xs:justify-center xl:justify-start'>
                        <img src="/assets/icon-guides-2.svg" alt="" />
                        <p className='font-semibold text-gray-600'>Comprehensive guides, projects & courses</p>
                    </div>

                    <div className='flex items-center gap-2 mt-6 xs:justify-center xl:justify-start'>
                        <img src="/assets/icon-job.svg" alt="" />
                        <p className='font-semibold text-gray-600'>Exclusive jobs + internship postings</p>
                    </div>

                    <div className='flex items-center gap-2 mt-6 xs:justify-center xl:justify-start'>
                        <img src="/assets/icon-tips.svg" alt="" />
                        <p className='font-semibold text-gray-600'>1:1 Career guidance & mentorship</p>
                    </div>
                </div>

                <div>
                    <img src="/assets/illustration-job.svg" alt="" className='w-[470px] transitionElement imageRotate'/>
                </div>
            </section>
        </div>
    );
};

export default Body;
