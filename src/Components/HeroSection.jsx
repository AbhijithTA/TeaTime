import CoffeCup from "../assets/Images/coffe.png";
import "../../src/HeroSection.css"; // For the custom font and animation

const HeroSection = () => {
  return (
    <div className="bg-brown-900 text-white flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20">
      {/* Left Content */}
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl md:text-6xl font-custom leading-tight">
          We serve the
          <br />
          richest <span className="text-brown-500">Coffee</span>
          <br />
          in the city
        </h1>
        <div className="flex space-x-4">
          <button className="bg-brown-700 hover:bg-brown-800 text-white px-6 py-2 rounded-md transition">
            Coffee And Code
          </button>
          <button className="bg-brown-700 hover:bg-brown-800 text-white px-6 py-2 rounded-md transition">
            Best Coffee
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative mt-10 md:mt-0">
        <img
          src={CoffeCup}
          alt="Coffee Cup"
          className="w-60 md:w-80 rounded-full rotate-animation"
        />
      </div>
    </div>
  );
};

export default HeroSection;
