import React from 'react'

import Layout from '../../Component/Layout/KegiatanLayout'
import f1rst from '../../Image/Clubs/F1RST.JPG'

const F1RST = () => {
    return(
        <div>
            <Layout
                cat = "Clubs"
                title = "F1RST"
                quote = '“Fourth, Third, Second, F1RST!”'
                latterPar1 = "F1RST merupakan sebuah club tari dengan genre modern dance di bawah naungan ekskul modern dance asal SMAK 1 Penabur Jakarta. Club yang di kenal dengan slogan “Fourth, Third, Second, F1RST!” ini kerap hadir untuk memeriahkan berbagai acara dengan pertunjukan tarian yang dilangsungkan di SMAK 1 seperti SmakOneCup, SAPxSNM, CNYxVals, Prom Night, BazOne, dan lain sebagainya. F1RST juga banyak menorehkan prestasi lewat perlombaan-perlombaan yang diikuti seperti Juara 1 UBS Gold Dance Competition DKI Jakarta Honda DBL 2019, Top 12 UBS Gold Dance Competition DKI Jakarta Honda DBL 2022, Juara 1 Lomba Modern Dance Santa Ursula Cup 2023, Juara 1 Lomba Modern Dance Tiara Kasih Cup 2023, dan lain sebagainya."
                img = {f1rst}
                alt = "f1rst"
                latterPar2 = "Untuk info lebih lanjut mengenai club F1RST (seperti untuk ketentuan audisi), dapat mengunjungi instagram @f1rstdancecrew atau dapat menghubungi contact person yang tertera pada post."
                dir="/Clubs/CodeOne"
            />
        </div>
        
    )
}

export default F1RST