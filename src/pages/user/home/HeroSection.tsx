const HeroSection = () => {
  return (
    <div className="flex">
      <div
        className="relative w-full m-5 bg-gradient-to-r from-pink-500 to-cyan-300 rounded-md shadow-lg flex justify-center"
        style={{ height: "80vh" }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="path-to-your-video.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-200 border bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-[#72445e]">
              Bike Rental
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-pink-800">
              Experience the thrill of the ride with our top-quality bikes.
            </p>
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-800 to-cyan-900 text-white font-semibold rounded-full hover:bg-cyan-900">
              Rent a Bike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
