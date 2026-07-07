import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

const Smukie360 = () => {
  return (
    <>
      <Nav />

      <div className="text-center flex justify-center flex-col mx-auto w-full h-full mt-[7rem] sm:mt-[8rem]">
        <p className="flex justify-center text-2xl sm:text-3xl">Virtual Tour</p>
        <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem] pb-10">
          Smukie 360°
        </p>

        {/* Virtual Tour */}
        <div className="w-full max-w-6xl px-4 mx-auto">
          <div className="relative w-full pt-[120%] sm:pt-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              loading="lazy"
              allow="xr"
              src="https://pano.cool/@fernysia.0122527390DC3gBmR/smukie-360?embed&fullscreen=true"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-3 mt-6">
        <p className="w-full max-w-xs mx-auto text-center sm:max-w-xl sm:text-xl text-md">
          Jika virtual tour tidak dapat dimuat, ketuk tombol di bawah.
        </p>

        <a
          href="https://pano.cool/@fernysia.0122527390DC3gBmR/smukie-360"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full shadow-md px-7 hover:bg-blue-700 active:scale-95"
        >
          Open Smukie 360°
          <span>↗</span>
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Smukie360;
