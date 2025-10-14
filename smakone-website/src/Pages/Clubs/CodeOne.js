import React from "react";

import Picture from "../../Image/Clubs/CodeOne/codeone_member.webp";
import codeone_bg from "../../Image/Clubs/CodeOne/codeone_logo.png";
import codeone_logo from "../../Image/Clubs/CodeOne/codeone_lg.png";
import github_logo from "../../Image/Clubs/CodeOne/Github-Logo.png";
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';

const CodeOne = () => {
    return (
        <div className="relative mt-12 md:mt-16 lg:mt-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] min-h-screen">
            <Nav />
            <div className="relative">
                <div className="relative overflow-hidden inline-block w-screen h-[21rem] md:h-[30rem]">
                    <div
                        className="w-full h-full pointer-events-none absolute bottom-0 left-0"
                        style={{ height: '8rem', zIndex: 1 }}
                    />
                    <img
                        src={codeone_bg}
                        alt="CodeOne Team"
                        className="relative -top-1 w-full h-[calc(100%+20px)] object-cover"
                    />
                    {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <img
                            className="w-[120vw] h-[120vw] md:w-[120vw] md:h-[120vw] max-w-[120rem] max-h-[120rem] md:max-w-[120rem] md:max-h-[120rem] object-contain"
                            src={codeone_logo}
                            alt="CodeOne Logo"
                        />
                    </div> */}
                </div>
                <div className="px-4 sm:px-10 xl:px-0 mx-auto -mt-28 relative mb-12 z-10 flex flex-col max-w-4xl w-full md:-mt-20">
                    <img
                        className="object-cover w-full h-[14rem] rounded-3xl md:h-[30rem] bg-white shadow-lg border border-gray-200"
                        src={Picture}
                        alt="CodeOne Team"
                    />
                    <p className="-mt-12 z-10 bg-white px-6 py-4 rounded-3xl shadow-2xl text-sm sm:text-base md:text-xl md:px-10 md:py-6 flex flex-col border border-gray-100">
                        <span className="mb-2 text-gray-700 leading-relaxed">
                            Codeone adalah club coding yang berada dibawah OSIS bidang 9. Tugas kami meliputi memelihara dan juga memperbarui website{" "}
                            <a
                                href="https://smakone.org"
                                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                            >
                                smakone.org
                            </a>{" "}
                            secara berkelanjutan, serta beberapa website lain yang terkait kebutuhan sekolah seperti SOC, SAP, dan TEDx. Teknologi yang kami gunakan sebagian besar menggunakan JavaScript dengan React sebagai library front-end. Semua code pada website SMAK1 bersifat open source dan dapat diakses melalui link{" "}
                            <a
                                href="https://github.com/codesmakone/SMAKONE"
                                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                            >
                                Github
                            </a>.
                        </span>
                        <span className="flex items-center justify-end gap-2 mt-4">
                            <img
                                className="w-6 md:w-7"
                                src={github_logo}
                                alt="Github"
                            />
                            <a
                                href="https://github.com/codesmakone/SMAKONE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#181717] hover:text-gray-800 font-medium"
                            >
                                SMAKONE
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CodeOne;