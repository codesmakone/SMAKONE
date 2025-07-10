import React from "react";

import Picture from "../../Image/Clubs/CodeOne/codeone_member.webp";
import codeone_bg from "../../Image/Clubs/CodeOne/codeone_bg.png";
import github_logo from "../../Image/Clubs/CodeOne/Github-Logo.png";
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';

const CodeOne = () => {
    return (
        <div className="relative mt-12 md:mt-16 lg:mt-20">
            <Nav />
            <div className="relative">
                <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
                <div className="w-full h-full pointer-events-none bg-gradient-to-t from-white via-white/0 to-white/0 absolute bottom-0 left-0" style={{ height: '8rem', zIndex: 1 }}/>
                <img
                    src={codeone_bg}
                    alt="CodeOne Team"
                    className="relative -top-1 w-[calc(100%+20px)] h-[calc(100%+20px)] object-cover brightness-50"
                />
                </div>
                <div className="px-10 xl:px-0 mx-auto -mt-28 relative mb-[3rem] z-10 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
                    <img
                    className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[30rem] bg-white"
                    src={Picture}
                    alt="CodeOne Team"
                    />
                    <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col">
                        <span>
                            Codeone adalah club coding yang berada dibawah OSIS bidang 9. Tugas kami meliputi memelihara dan juga memperbarui website <a href="https://smakone.org" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">smakone.org</a> secara berkelanjutan, serta beberapa website lain yang terkait kebutuhan sekolah seperti SOC, SAP, dan TEDx. Teknologi yang kami gunakan sebagian besar menggunakan JavaScript dengan React sebagai library front-end. Semua code pada website SMAK1 bersifat open source dan dapat diakses melalui link <a href="https://github.com/codesmakone/SMAKONE" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">github</a>.
                        </span>
                        <span className="flex items-center justify-end gap-2 mt-4">
                            <img
                                className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
                                src={github_logo}
                                alt="Github"
                            />
                            <a
                                href="https://github.com/codesmakone/SMAKONE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#181717] hover:text-gray-800 font-medium"
                            >SMAKONE</a>
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CodeOne;