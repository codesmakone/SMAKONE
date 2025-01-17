import React from "react"
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import { paintingData } from "./PaintingData";

const paintingListLeft = paintingData.slice(0, 24);
const paintingListRight = paintingData.slice(24, 51);

const Paintings = () => {
    return (
    <div className="container mx-auto mt-28">
        <Nav/>
        <div >
            <h1 className="text-left text-4xl xl:text-6xl font-black leading-9 pb-5 pl-4">Our Collection</h1>
            <div className="grid grid-cols-2 gap-6 px-6 md:px-8 lg:px-10 xl:px-12 pt-10 justify-center text-center">
                <div>
                { paintingListLeft.map((painting, i) => 
                    <div className="text-left">
                        <a href={'artwork/'+painting.id}><img className="" src={painting.img} alt=""/></a>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">{painting.title}</h2>
                            <span className="text-l">{painting.artist}</span>
                        </div>
                    </div>
                )}
                </div>
                <div>
                { paintingListRight.map((painting, i) => 
                    <div className="text-left">
                        <a href={'artwork/'+painting.id}><img className="" src={painting.img} alt=""/></a>
                        <div className="my-6 mr-3 col-h2-full lg:col-h2-4">
                            <h2 className="font-black text-xl">{painting.title}</h2>
                            <span className="text-l">{painting.artist}</span>
                        </div>
                    </div>
                )}
                </div>
            </div>
            </div>
            <Footer/>
    </div>
    )
}
export default Paintings