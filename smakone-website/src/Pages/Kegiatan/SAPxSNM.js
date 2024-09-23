import React from 'react'
import Layout from '../../Component/Layout/SAPLayout'
import theater from '../../Image/Home/Kegiatan/theater.webp'
import baju from '../../Image/SAPxSNM/baju.png'
import buttonPin from '../../Image/SAPxSNM/buttonpin.png'
import gelang from '../../Image/SAPxSNM/gelang.png'
import phoneStrap from '../../Image/SAPxSNM/phonestrap.png'
import sticker from '../../Image/SAPxSNM/sticker.png'
import tas from '../../Image/SAPxSNM/tas.png'
import stageview_image from '../../Image/SAPxSNM/stageview_image.jpg'
import sap_image from '../../Image/SAPxSNM/sap_image.jpg'

const SAPxSNM = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Smukiez Art Performance x Smukiez Night Market"
            quote = 'Smukiez Art Perforance x Smukiez Night Market: Saat Berbagai Seni Dipadukan dan Menghasilkan Sebuah Karya yang Memukau'
            titleDesc = ""
            img1 = {sap_image}
            img2 = {sap_image}
            img3 = {sap_image}
            alt = "SAPxSNM"
            performance1 = "Mask" 
            performance2 = "Smukiez Choir"
            performance3 = "Smukiez Youth Chamber"
            performance4 = "Seren1ty"
            performance5 = "Cressendo"
            performance6 = "F1RST"
            performance7 = "Smukiez Guitar Ensemble"
            AboutSAP = "Sebuah inisiatif yang dirancang untuk mengasah serta menampilkan potensi, kreativitas, dan bakat seni siswa/i SMAK 1 PENABUR Jakarta. Acara ini memberikan kesempatan bagi siswa/i untuk memamerkan karya seni mereka sebagai wujud dari dedikasi dan semangat yang tinggi."
            AboutSNM = "Puncak acara STN adalah pertunjukan dari MASK, klub teater SMAK 1. Namun diluar itu, STN juga dimeriahkan oleh berbagai pertunjukan lainnya, seperti Crescendo tim band SMAK 1, serta pertunjukan tarian dari Serenity dan First."
            umkm1 = ""
            umkm2 = ""
            umkm3 = ""
            umkm4 = ""
            umkm5 = ""
            umkm6 = ""
            umkm7 = ""
            imgMerch1 = {baju}
            merch1 = "T-Shirt"
            imgMerch2 = {buttonPin}
            merch2 = "Button Pin"
            imgMerch3 = {gelang}
            merch3 = "Gelang"
            imgMerch4 = {phoneStrap}
            merch4 = "Phone Strap"
            imgMerch5 = {sticker}
            merch5 = "Stickers"
            imgMerch6 = {tas}
            merch6 = "Bag"
            imgNews1 = {theater}
            imgNews2 = {theater}
            descNews1 = "Pada suatu hari lorem ipsum menemukan teman sejatinya pada delman yang dia naiki pada hari minggu dimana ia turut ayah ke kota sembari duduk di depan muka kuda."
            descNews2 = "Pada suatu hari lorem ipsum menemukan teman sejatinya pada delman yang dia naiki pada hari minggu dimana ia turut ayah ke kota sembari duduk di depan muka kuda."
            imgStage = {stageview_image}
            dir_merch="https://bit.ly/POMERCHSAPXSNM2"
            dir_ticket="https://tickets.smakone.org"
            dir="/kegiatan/KR1ZA"
        />
    )
}

export default SAPxSNM