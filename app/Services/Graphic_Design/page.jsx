import React from "react";

export default function Page() {
  return (
    <div className="pt-24 px-4 lg:px-8">
      {/* Main container */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* First column */}
        <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg p-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-8">Graphic Design</h1>
          <h2 className="text-center font-semibold text-2xl mb-4 lg:mb-6">What we offer</h2>
          <ul className="text-center lg:text-left">
            <li className="mb-2">Logo Design</li>
            <li className="mb-2">Brand Identity</li>
            <li className="mb-2">Print Design</li>
            <li className="mb-2">Packaging Design</li>
            <li className="mb-2">Illustrations</li>
            <li className="mb-2">UI/UX Design</li>
            <li className="mb-2">Social Media Graphics</li>
            <li className="mb-2">Infographics</li>
            <li className="mb-2">Motion Graphics</li>
          </ul>
        </div>

        {/* Second column */}
        <div className="flex justify-center items-center">
          <div className="rounded-md overflow-hidden">
            {/* Replace "YourGraphic.png" with the path to your graphic */}
            <img src="/Graphic.png" alt="Graphic" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 lg:mt-20">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">DESCRIPTION</h1>
        <p className="mt-4 lg:mt-6 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          We specialize in graphic design services tailored to meet your branding and marketing needs. From crafting captivating logos and defining brand identities to creating visually stunning print materials and dynamic motion graphics, our team of designers is dedicated to bringing your ideas to life. Whether you are launching a new product, rebranding your business, or looking to enhance your online presence, we offer comprehensive graphic design solutions to help you achieve your goals.
        </p>
      </div>

      {/* Our Works */}
      <div className="mt-12 lg:mt-20 flex justify-center items-center">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left">
          OUR <span className="font-bold text-blue-600">Works</span>
        </h1>
      </div>
    </div>
  );
}
