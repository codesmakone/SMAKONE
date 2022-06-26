import React from 'react'

// Import Component
import Alumni from '../../Component/Alumni/alumni'

//Import Image
import BillyStevanus from '../../Image/Alumni/BillyStevanus.jpg'
import ScottMoses from '../../Image/Alumni/ScottMoses.jpg'
import NicoleCharlene from '../../Image/Alumni/NicoleCharlene.jpg'

const AlumniPage = () => {
    return(
        <div className='w-full h-auto text-black px-8 md:px-12 lg:px-16 pb-32'>
            <div className='container mx-auto'>
                <div className='justify-center text-center font-bold'>
                    <div className= 'text-4xl xl:text-5xl leading-normal'>
                        Alumni Kami
                    </div>
                </div>
                <div className='px-8'>
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
    )
}

export default AlumniPage
