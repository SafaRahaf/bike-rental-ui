import { Link } from "react-router-dom";
import HeroImage from "../../assets/pexels-pixabay-248762.jpg";

const HeroSection = () => {
  return (
    <div className="flex">
      <div
        className="
        relative w-full m-5 rounded-md shadow-lg flex justify-center"
        style={{ height: "60vh" }}
      >
        <img src={HeroImage} alt="" className="w-full" />

        <div className="absolute top-0 left-0 w-full bg-[#446772] h-full border bg-opacity-10 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold text-black">
              Bike Rental
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-black ">
              Experience the thrill of the ride with our top-quality bikes.
            </p>
            <Link to="/user/rentalManagement">
              <button className="mt-8 px-6 py-3 bg-[#72445e] text-white font-semibold rounded-full hover:bg-cyan-900">
                Rent a Bike
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
