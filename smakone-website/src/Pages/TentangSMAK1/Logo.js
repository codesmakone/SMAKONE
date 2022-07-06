import React from 'react'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

import ContentHeader from '../../Component/Content/ContentHeader'
import OSIS_Logo from '../../Image/OSIS_Logo.webp'
import Penabur_logo from '../../Image/Penabur_logo.webp'

const Logo = () => {
    return(
        <>
        <Nav/>
        <div className="container mx-auto">
            
            <div className="container w-full h-full mx-auto justify-center mt-28">
                <ContentHeader
                    title = 'Logo'
                />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                    <div className="mx-auto">
                        <div className="container mx-auto">
                            <img src={Penabur_logo} alt="Logo BPK" className="h-96 mx-auto object-center"/>
                        </div>
                        <ul className='list-disc sm:text-lg text-base ml-16 sm:ml-20 xl:ml-36 mt-2 text-left pr-12 sm:pr-16 xl:pr-36 font-medium text-gray-500'>
                            <li>Salib berwarna merah sebagai darah Yesus</li>
                            <li>Buku berwarna kuning sebagai terang pelita</li>
                            <li>Dasar yang dalam yang berwarna biru melambangkan kesetiaan</li>
                            <li>Dasar luar yang berwarna perak melambangkan kesucian</li>
                            <li>Dasar Iman, Ilmu, dan Pelayanan artinya iman Kristiani ilmu yang bermutu handal, dan pelayanan yang adil dan benar</li>
                        </ul>
                    </div>
                    <div>
                    <img src={OSIS_Logo} alt="Logo OSIS" className="h-96 mx-auto object-center"/>
                        <ul className='list-disc text-lg ml-16 sm:ml-20 xl:ml-36 mt-2 text-left pr-12 sm:pr-16 xl:pr-36 font-medium text-gray-500'>
                            <li>Salib melambangkan Iman yang nyata dalam perbuatan</li>
                            <li>Buku melambangkan ilmu yang digunakan untuk membuat segala sesuatu menjadi lebih baik</li>
                            <li>Merpati dengan daun di paruhnya melambangkan harapan yang diberikan siswa/siswi SMAK 1 kepada masyarakat di sekitarnya secara khusus dan Bangsa dan negara secara umum</li>
                        </ul>
                    </div>    

                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Logo