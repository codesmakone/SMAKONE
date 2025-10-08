import React from 'react';
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer"
import { useParams } from 'react-router-dom';
import { paintingData } from './PaintingData';



const PaintingDetail = () => {
  const { id } = useParams(); // Get the painting ID from the URL
  const painting = paintingData.find(p => p.id === id); // Find the painting by ID

  if (!painting) {
    return <div>Painting not found</div>; // Handle case where painting is not found
  }

  return (
    <div>
      <Nav />
      <div className='container mx-auto mt-28'>


        <h1 className="text-left text-4xl xl:text-6xl font-black leading-9 ml-4">"{painting.title}"</h1>

        <img className='my-4' src={painting.img} alt={painting.title} />
        <div className='text-l mx-5'>
          <p className='font-bold'>{painting.artist}</p>

          <p className='font-bold'>{painting.kelastahun}</p>

          <br />
          <p>{painting.desc}</p>
          <br />
          <p>Medium: {painting.medium}</p>
          <p>{painting.price}</p>
          <br />
          <p>Contact: {painting.contact}</p>
          <br />
          <br />
          <a className='font-bold rounded-full bg-light-blue text-white py-4 px-6' href="/kegiatan/sapxsms/artwork">Back to Collection</a>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default PaintingDetail;
