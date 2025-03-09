import React from 'react';

import ContentHeader from '../../Component/Content/ContentHeader';
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';

import f1rst_bg from '../../Image/Clubs/Clubpage/bg_f1rst.webp';
import mono_bg from '../../Image/Clubs/Clubpage/bg_mono.webp';
import sc_bg from '../../Image/Clubs/Clubpage/bg_sc.webp';
import sere_bg from '../../Image/Clubs/Clubpage/bg_sere.webp';
import syc_bg from '../../Image/Clubs/SYC/2024-2025.jpg';

import f1rst_logo from '../../Image/Clubs/Clubpage/logo_f1rst.webp';
import codeone_logo from '../../Image/Clubs/Clubpage/logo_codeone.webp';
import mono_logo from '../../Image/Clubs/Clubpage/logo_mono.webp';
import sc_logo from '../../Image/Clubs/Clubpage/logo_sc.webp';
import sere_logo from '../../Image/Clubs/Clubpage/logo_sere.webp';
import syc_logo from "../../Image/Clubs/SYC/Logo.png";

const LinkBox = ({href, title, image, description, icon}) => {
    return (
        <a href={href} className="bg-white shadow-lg rounded-lg w-full h-full text-center overflow-hidden relative hover:scale-105 hover:bg-gray-200 transition-transform duration-200">
            <div className="relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-40 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-600 opacity-50"></div>
                <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                    <div className="bg-white rounded-full p-0.5">
                        <img src={icon} alt={title} className="w-12 h-12 object-fill rounded-full" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
        </a>
    );
}

const Clubpage = () => {
    return(
        <div>
            <Nav />
            <div className="container w-full h-full mx-auto justify-center pb-5 mt-28">
                <ContentHeader
                    title='Clubs'
                    quote='Siswa-siswi SMAK 1 memiliki banyak kesempatan untuk mengembangkan diri melalui berbagai club yang seru dan inspiratif. Dari seni, olahraga, hingga teknologi, setiap klub dirancang untuk memperluas keterampilan, kreatifitas, juga pengalaman siswa dan siswi. Selain itu dengan mengikuti clubs yang ada, siswa dan siswi dapat memperkuat portofolio agar memiliki peluang yang lebih besar untuk diterima di kampus favorit. Beberapa club yang dapat diikuti yaitu : F1RST, SERENITY, Mask, Smukiez Choir, Smukiez Youth Chamber (SYC), Cressendo, CodeOne, ShutterOne, dan banyak lagi. Baca deskripsi clubs dibawah ini untuk mengetahui lebih lanjut!'
                />
                <ContentHeader title='Deskripsi Clubs' />
                <div className='pt-12 px-6 md:px-12 lg:px-16 xl:px-28 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 content-evenly'>
                    <LinkBox 
                        href="..\..\Clubs\f1rst" 
                        title="F1RST" 
                        image={f1rst_bg} 
                        description="Club Modern Dance" 
                        icon={f1rst_logo} 
                    />
                    <LinkBox 
                        href="..\..\Clubs\Serenity" 
                        title="SEREN1TY" 
                        image={sere_bg} 
                        description="Club Contemporary Dance" 
                        icon={sere_logo} 
                    />
                    <LinkBox 
                        href="..\..\Clubs\SmukiezChoir" 
                        title="Smukiez Choir" 
                        image={sc_bg} 
                        description="Club Paduan Suara" 
                        icon={sc_logo}
                    />
                    <LinkBox 
                        href="..\..\Clubs\SYC" 
                        title="SYC" 
                        image={syc_bg} 
                        description="Club Orchestra" 
                        icon={syc_logo} 
                    />
                    <LinkBox 
                        href="..\..\Clubs\CodeOne" 
                        title="CodeOne" 
                        image={codeone_logo}
                        description="Club Coding" 
                        icon={codeone_logo} 
                    />
                    <LinkBox 
                        href="..\..\Clubs\Monograph" 
                        title="Monograph" 
                        image={mono_bg} 
                        description="Club Design Gratis" 
                        icon={mono_logo}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Clubpage;
