import image1 from "../../../Image/Clubs/Monograph/portofolio/1.webp";
import image2 from "../../../Image/Clubs/Monograph/portofolio/2.webp";
import image3 from "../../../Image/Clubs/Monograph/portofolio/3.webp";
import image4 from "../../../Image/Clubs/Monograph/portofolio/4.webp";
import image5 from "../../../Image/Clubs/Monograph/portofolio/5.webp";
import image6 from "../../../Image/Clubs/Monograph/portofolio/6.webp";
import image7 from "../../../Image/Clubs/Monograph/portofolio/7.webp";
import image8 from "../../../Image/Clubs/Monograph/portofolio/8.webp";
import image9 from "../../../Image/Clubs/Monograph/portofolio/9.webp";
import image10 from "../../../Image/Clubs/Monograph/portofolio/10.webp";
import image11 from "../../../Image/Clubs/Monograph/portofolio/11.webp";
import image12 from "../../../Image/Clubs/Monograph/portofolio/12.webp";

const SwiperComponent = () => {
  const imagePaths = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <div className="max-w-[17rem] sm:max-w-[30rem] md:max-w-[40rem] xl:max-w-[75rem] xl:flex xl:overflow-x-auto xl:whitespace-nowrap">
      {imagePaths.map((image, i) => (
        <div
          key={i}
          className="max-w-full flex items-center justify-center mt-[2rem] xl:shrink-0 xl:scrollbar-thin xl:scrollbar-thumb-rounded xl:scrollbar-thumb-[#555]"
        >
          <img
            className="xl:inline-block xl:h-[30rem] xl:leading-[25rem] xl:mr-[4rem]"
            src={imagePaths[i]}
            alt={`Portofolio ${i + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SwiperComponent;
