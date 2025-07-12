import React from 'react';
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';
import Sere_bg from '../../Image/Clubs/Seren1ty/seren1ty_bg.png';
import Instagram from "../../Image/Clubs/Cressendo/instagram.webp";

const Serenity = () => {
    return (
        <div className="relative mt-12 md:mt-16 lg:mt-20">
            <Nav />
            <div className="relative">
                <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
                    <div className="w-full h-full pointer-events-none bg-gradient-to-t from-white via-white/0 to-white/0 absolute bottom-0 left-0" style={{ height: '8rem', zIndex: 1 }} />
                    <img
                        src={Sere_bg}
                        alt="Seren1ty Team"
                        className="relative -top-1 w-[calc(100%+20px)] h-[calc(100%+20px)] object-cover brightness-50"
                    />
                </div>

                <div className="px-10 xl:px-0 mx-auto -mt-28 relative mb-[3rem] z-10 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
                    <img
                        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem] bg-white"
                        src={Sere_bg}
                        alt="Serenity Team"
                    />
                    <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem]">
                        SEREN1TY singkatan dari Smukiez Dance Crew in Dynamic Rythm & Diversity merupakan sebuah club tari di SMAK 1 PENABUR Jakarta yang bertujuan untuk mengembangkan kemampuan dan kreativitas perserta didik dalam membuat sebuah koreografi. Club tari ini mengembangkan berbagai genre tarian seperti kontemporer, modern dance, tari tradisional, B-boy, ladies, couple dan lain-lain.

                        <div className="flex gap-3 items-center justify-end">
                            <div className="flex items-center gap-1">
                                <img className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
                                    src={Instagram}
                                    alt="Instagram"
                                />
                                <a
                                    href="https://www.instagram.com/seren1tydancecrew?igsh=MTF2ajFzaDhpMWVzOQ%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
                                >
                                    seren1tydancecrew
                                </a>
                            </div>
                        </div>
                    </p>
                </div>



            </div>
            <Footer />
        </div>
    );
};

export default Serenity;