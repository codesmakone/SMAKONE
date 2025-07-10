import React from 'react'

import ContentHeader from '../../Component/Content/ContentHeader'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

const Lagu = () => {
    return(
        <>
        <Nav/>
        <div className="container mx-auto">
            <div className="container w-full h-full mx-auto justify-center mt-28">
                <ContentHeader
                    title = 'Lagu Tema'
                />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                    <div className="xl:mx-10">
                        <div>
                            <div className="mt-4 mb-8 iframe-container grid place-items-center">
                            <iframe
                                className="object-cover sm:w-[80%] sm:h-[300px] md:h-[360px] lg:w-[90%] lg:h-[300px] xl:w-full  xl:h-[350px] " 
                                title="MARS BPK PENABUR"
                                src="https://www.youtube.com/embed/e6kY2wYT9_A" 
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            </div>
                            <h2 className="font-medium text-3xl lg:text-5xl mt-3 justify-center text-center">
                                Mars BPK PENABUR
                            </h2>
                            <div>
                                <p className="text-center text-base ml-12 sm:ml-16 xl:ml-32 mt-2 text-left pr-12 sm:pr-16 xl:pr-36 font-medium text-gray-500">

                                    Mari satukan langkahmu, lengan baju singsingkan <br />
                                    Dalam karya t’rus berpacu, membangun masa depan <br />
                                    Membentuk manusia baru, segambar Penciptanya <br />
                                    Pendidikan agar maju, mencerdaskan umat-Nya <br />
                                    <br />
                                    <b>Reff:</b>
                                    <br/>
                                    Marilah taburkan kasih rakhmat Tuhan <br />
                                    Hasil karyamu tingkatkan <br />
                                    Marilah amalkan yang Tuhan sabdakan <br />
                                    Untuk isi pembangunan <br />
                                    <br />
                                    Bertekunlah dan belajar, hai teruna harapan <br />
                                    Hormat pada sang pengajar, ucapnya perhatikan <br />
                                    Taat pada orang tua dan janganlah tekebur <br />
                                    Timba ilmu yang berguna di BPK PENABUR <br />
                                    <br />
                                    <b>[Reff]</b>
                                    <br /> <br />
                                    Kristus sudah b’ri teladan kasih pada manusia <br />
                                    Dia rela mengurbankan diri-Nya bagi dunia <br />
                                    Mari kita menyatakan dan masyurkan kasih-Nya <br />
                                    Iman, ilmu, pelayanan persembahkan pada-Nya <br />
                                    <br />
                                    <b>[Reff]</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className='lg:hidden'/>
                    <div className='xl:mx-10'>
                        <div className="mt-4 mb-8 iframe-container grid place-items-center">
                           <iframe 
                                className=" object-cover sm:w-[80%] sm:h-[300px] md:h-[360px] lg:h-[300px] xl:w-full xl:h-[350px]" 
                                src="https://www.youtube.com/embed/QFAnES2GBAw?list=RDQFAnES2GBAw" 
                                title="Cinta SMAK 1 - Music Video by Shutterone and Smukiez Choir" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen></iframe> 
                        </div>
                        <h2 className="font-medium text-3xl lg:text-5xl mt-3 justify-center text-center">
                            Cinta SMAK 1
                        </h2>
                        <div>
                            <p className="text-center text-base ml-12 sm:ml-16 xl:ml-32 mt-2 text-left pr-12 sm:pr-16 xl:pr-36 font-medium text-gray-500">
                            Bersama kami datang <br />
                            Bersama kami blajar <br />
                            Menuntut ilmu tuk masa depan <br />
                            Dan jadi harapan bangsa <br />
                            <br />
                            SMAK 1 lah tempat kami <br />
                            SMAK 1 lah cinta kami <br />
                            Di SMAK 1 lah kita jaya <br />
                            Itulah semboyan kami <br />
                            <br />
                            Kami bangga padanya <br />
                            Dan berjanji kan setia <br />
                            Kami tidak kan mengecewakan <br />
                            Kami menjaga citra mu SMAK 1 <br />
                            <br />
                            Berdoa slalu padaNya <br />
                            Belajar dan bekerjalah <br />
                            Maju terus dan pantang mundur  <br />
                            Di SMAK 1 kita jaya 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Lagu