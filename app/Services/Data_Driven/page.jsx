import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="pt-24 px-4 lg:px-8">
      {/* Main container */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* First column */}
        <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg p-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-8">Data Driven</h1>
          <h2 className="text-center font-semibold text-2xl mb-4 lg:mb-6">What we provide</h2>
          <ul className="text-center lg:text-left">
            <li className="mb-2">Data Analysis</li>
            <li className="mb-2">Data Visualization</li>
            <li className="mb-2">Predictive Analytics</li>
            <li className="mb-2">Machine Learning</li>
            <li className="mb-2">Big Data Solutions</li>
            <li className="mb-2">Business Intelligence</li>
            <li className="mb-2">Data Warehousing</li>
            <li className="mb-2">Data Governance</li>
            <li className="mb-2">Data Security</li>
          </ul>
        </div>

        {/* Second column */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-md"
            src="/DataDriven.png"
            alt="Data Driven"
            priority
            width={450}
            height={300}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 lg:mt-20">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">DESCRIPTION</h1>
        <p className="mt-4 lg:mt-6 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          We specialize in providing data-driven solutions to help businesses harness the power of their data. Our services cover a wide range of areas including data analysis, visualization, predictive analytics, machine learning, and more. Whether you need to uncover insights from your data, build predictive models, or implement data governance and security measures, we have the expertise to assist you in leveraging your data assets for informed decision-making and strategic growth.
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
