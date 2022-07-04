import React from 'react'

// Import Component
import Alumni from '../../Component/Alumni/alumni'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'
//Import Image
import BillyStevanus from '../../Image/Alumni/BillyStevanus.webp'
import ScottMoses from '../../Image/Alumni/ScottMoses.webp'
import NicoleCharlene from '../../Image/Alumni/NicoleCharlene.webp'

const AlumniPage = () => {
    return(
        <>
        <Nav/>
        <div className='w-full mt-28 h-auto text-black px-8 md:px-12 lg:px-16 pb-28 sm:pb-32'>
            <div className='container mx-auto'>
                <div className='justify-center text-center font-bold'>
                    <div className= 'text-4xl xl:text-5xl leading-normal'>
                        Alumni Kami
                    </div>
                </div>
                <div className='grid grid-rows-3 grid-cols-none lg:grid-cols-3 lg:grid-rows-none gap-12 text-left lg:text-center'>
                    <Alumni
                        img = {BillyStevanus}
                        title = "Billy Stevanus"
                        desc = "Alumni yang Selalu Aktif dan Bersemangat"
                        dir = "/Kehidupan_smukiers/alumni/BillyStevanus"
                    />
                    <Alumni
                        img = {ScottMoses}
                        title = "Scott Moses"
                        desc = "Anak Muda Berbakat Dengan Segudang Pengalaman di Bidangnya"
                        dir = "/Kehidupan_smukiers/alumni/ScottMoses"
                    />
                    <Alumni
                        img = {NicoleCharlene}
                        title = "Nicole Charlene"
                        desc = "Perempuan yang Suka Melayani Dengan Segudang Prestasi"
                        dir = "/Kehidupan_smukiers/alumni/NicoleCharlene"
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AlumniPage
