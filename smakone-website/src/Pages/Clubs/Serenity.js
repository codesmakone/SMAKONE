import React from 'react'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'
import Sere from '../../Image/Clubs/seren1ty.png'

const Serenity = () => {
    return(
        <div className='container mx-auto mt-28'>
            <Nav/>
                <div className='px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>Clubs</h2>
                    <h1 className='text-4xl xl:text-6xl font-black'>SEREN1TY</h1>
                </div>

                <div className='pt-12 px-6 md:px-12 lg:px-16 xl:px-28 text-justify'>
                    <img src={Sere} className="object-cover h-auto w-full rounded-3xl mt-5" alt="seren1ty"/>
                </div>

                <div className='lg:px-16 xl:px-28 text-xl mb-6 mt-9 justify-center'>
                    <p>SEREN1TY singkatan dari Smukiez Dance Crew in Dynamic Rythm & Diversity merupakan sebuah club tari di SMAK 1 PENABUR Jakarta yang bertujuan untuk mengembangkan kemampuan dan kreativitas perserta didik dalam membuat sebuah koreografi. Club tari ini mengembangkan berbagai genre tarian seperti kontemporer, modern dance, tari tradisional, B-boy, ladies, couple dan lain-lain.</p>
                </div>
            <Footer/>
        </div>
    )
}

export default Serenity