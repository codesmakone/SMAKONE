import React from 'react'
import Layout from '../../Component/Layout/SAPLayout'
import theater from '../../Image/Home/Kegiatan/theater.webp'
import baju from '../../Image/SAPxSNM/baju.png'
import buttonPin from '../../Image/SAPxSNM/buttonpin.jpg'
import gelang from '../../Image/SAPxSNM/gelang.png'
import phoneStrap from '../../Image/SAPxSNM/phonestrap.PNG'
import sticker from '../../Image/SAPxSNM/sticker.png'
import tas from '../../Image/SAPxSNM/tas.png'

const SAPxSNM = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Smukiez Art Performance x Smukiez Night Market"
            quote = '"Saat Berbagai Seni Dipadukan dan Menghasilkan Sebuah Karya yang Memukau"'
            titleDesc = "Smukiez Theater Night (STN) adalah sebuah pertunjukan seni yang ditampilkan oleh murid-murid teater untuk siswa-siswi SMAK 1 PENABUR. STN merupakan wadah bagi siswa-siswi SMAK 1 untuk dapat berkarya dan mengembangkan kreativitas dalam bidang kesenian. STN diadakan satu tahun sekali."
            img1 = {theater}
            img2 = {theater}
            img3 = {theater}
            alt = "SAPxSNM"
            performance1 = "Lorem si ipsum" 
            performance2 = ""
            AboutSAP = "Puncak acara STN adalah pertunjukan dari MASK, klub teater SMAK 1. Namun diluar itu, STN juga dimeriahkan oleh berbagai pertunjukan lainnya, seperti Crescendo tim band SMAK 1, serta pertunjukan tarian dari Serenity dan First."
            AboutSNM = "Puncak acara STN adalah pertunjukan dari MASK, klub teater SMAK 1. Namun diluar itu, STN juga dimeriahkan oleh berbagai pertunjukan lainnya, seperti Crescendo tim band SMAK 1, serta pertunjukan tarian dari Serenity dan First."
            umkm1 = "Lorem sang ipsum"
            umkm2 = ""
            imgMerch1 = {baju}
            merch1 = "Lorem Ipsum"
            imgMerch2 = {buttonPin}
            merch2 = "Lorem Ipsum"
            imgMerch3 = {gelang}
            merch3 = "Lorem Ipsum"
            imgMerch4 = {phoneStrap}
            merch4 = "Lorem Ipsum"
            imgMerch5 = {sticker}
            merch5 = "Lorem Ipsum"
            imgMerch6 = {tas}
            merch6 = "Lorem Ipsum"
            imgNews1 = {theater}
            imgNews2 = {theater}
            descNews1 = "Pada suatu hari lorem ipsum menemukan teman sejatinya pada delman yang dia naiki pada hari minggu dimana ia turut ayah ke kota sembari duduk di depan muka kuda."
            descNews2 = "Pada suatu hari lorem ipsum menemukan teman sejatinya pada delman yang dia naiki pada hari minggu dimana ia turut ayah ke kota sembari duduk di depan muka kuda."
            imgStage = {theater}
            dir="/Kegiatan/KR1ZA"
        />
    )
}

export default SAPxSNM