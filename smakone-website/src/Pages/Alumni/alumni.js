import React from 'react'
import Alumni from '../../Component/Alumni/alumni'
import BillyStevanus from '../../Image/BillyStevanus.jpg'
import ScottMoses from '../../Image/ScottMoses.jpg'
import NicoleCharlene from '../../Image/NicoleCharlene.jpg'

const AlumniPage = () => {
    return(
        <div className='w-full h-auto text-black px-16 py-32'>
            <div className='container mx-auto'>
                <div className='justify-center text-center font-bold'>
                    <div className= 'text-5xl leading-normal'>
                        Alumni Kami
                    </div>
                </div>
                <div className="px-8">
                    <Alumni
                        img = {BillyStevanus}
                        title = "Billy Stevanus"
                        desc = "Alumni yang Selalu Aktif dan Bersemangat"
                        dir = "/alumni/BillyStevanus"
                    />
                    <Alumni
                        img = {ScottMoses}
                        title = "Scott Moses"
                        desc = "Anak Muda Berbakat Dengan Segudang Pengalaman di Bidangnya"
                        dir = "/alumni/ScottMoses"
                    />
                    <Alumni
                        img = {NicoleCharlene}
                        title = "Nicole Charlene"
                        desc = "Perempuan yang Suka Melayani Dengan Segudang Prestasi"
                        dir = "/alumni/NicoleCharlene"
                    />
                </div>
            </div>
        </div>
    )
}

export default AlumniPage
