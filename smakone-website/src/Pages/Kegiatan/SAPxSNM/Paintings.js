import React from "react"
import phoneStrap from '../../../Image/SAPxSNM/phonestrap.PNG'
import sticker from '../../../Image/SAPxSNM/sticker.png'

const Paintings = () => {
    return(
        <div className="mx-auto pt-10 lg:pt-20 text-white bg-gradient-to-b from-[#1a2632] to-black">
            <h1 className="text-left text-4xl xl:text-6xl font-black leading-9 pb-5 pl-4">Collection</h1>
            <hr></hr>
            <div className="grid grid-cols-2 gap-6 px-6 md:px-8 lg:px-10 xl:px-12 pt-10 justify-center text-center">
                <div>
                    <div className="text-left">
                        <img className="" src={phoneStrap} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle1]</h2>
                            <span className="text-l">[paintingDesc1]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={sticker} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle3]</h2>
                            <span className="text-l">[paintingDesc3]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={phoneStrap} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle5]</h2>
                            <span className="text-l">[paintingDesc5]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={sticker} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle7]</h2>
                            <span className="text-l">[paintingDesc7]</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-left">
                        <img className="" src={sticker} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle2]</h2>
                            <span className="text-l">[paintingDesc2]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={sticker} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle4]</h2>
                            <span className="text-l">[paintingDesc4]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={phoneStrap} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle6]</h2>
                            <span className="text-l">[paintingDesc6]</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <img className="" src={phoneStrap} alt=""/>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">[paintingTitle8]</h2>
                            <span className="text-l">[paintingDesc8]</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 text-center">
                <a href="" className="text-black focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 bg-[#eaddd7] hover:bg-[#d2c6c1] dark:bg-[#eaddd7] dark:hover:bg-[#d2c6c1] ">
                  Load More
                </a>
            </div>
        </div>
    )
}
export default Paintings