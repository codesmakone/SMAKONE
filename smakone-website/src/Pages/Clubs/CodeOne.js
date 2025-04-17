import React from "react";

import Picture from "../../Image/Clubs/CodeOne/CodeOne2.webp";
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

const CodeOne = () => {
    return (
        <div className='container mx-auto mt-28'>
            <Nav/>
            <div className='px-6 md:px-12 lg:px-16 xl:px-28 text-justify'>
            <div className='px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>Clubs</h2>
                    <h1 className='text-4xl xl:text-6xl font-black'>CodeOne</h1>
                </div>
                <img 
                    src={Picture} 
                    className="object-cover h-auto w-full rounded-3xl mt-5" 
                    alt="CodeOne"
                />
            </div>
                
            <div className='lg:px-16 xl:px-28 text-xl mb-6 mt-9 justify-center'>
                <p>
                    Codeone adalah club coding yang berada dibawah OSIS bidang 9. Tugas kami meliputi memelihara dan juga memperbarui website <a href="https://smakone.org" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">smakone.org</a> secara berkelanjutan, serta beberapa website lain yang terkait kebutuhan sekolah seperti SOC, SAP, dan TEDx. Teknologi yang kami gunakan sebagian besar menggunakan JavaScript dengan React sebagai library front-end. Semua code pada website SMAK1 bersifat open source dan dapat diakses melalui link <a href="https://github.com/codesmakone/SMAKONE" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">github</a>.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default CodeOne;