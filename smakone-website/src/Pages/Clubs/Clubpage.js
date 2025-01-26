import React from 'react'

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'


const Clubpage = () => {
    return(
        <div>
            <Nav />
            <div className="container w-full h-full mx-auto justify-center pb-5 mt-28">
                <ContentHeader
                    title = 'Clubs'
                    quote = 'Siswa-siswi SMAK 1 memiliki banyak kesempatan untuk mengembangkan diri melalui berbagai club yang seru dan inspiratif. Dari seni, olahraga, hingga teknologi, setiap klub dirancang untuk memperluas keterampilan, kreatifitas, juga pengalaman siswa dan siswi. Selain itu dengan mengikuti clubs yang ada, siswa dan siswi dapat memperkuat portofolio agar memiliki peluang yang lebih besar untuk diterima di kampus favorit. Beberapa club yang dapat diikuti yaitu : F1RST, SERENITY, Mask, Smukiez Choir, Smukiez Youth Chamber (SYC), Cressendo, CodeOne, ShutterOne, dan banyak lagi. Baca deskripsi clubs dibawah ini untuk mengetahui lebih lanjut!'
                />

                <ContentHeader
                    title = 'Deskripsi Clubs'
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Clubpage