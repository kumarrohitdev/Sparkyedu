import WorkCard from "@/app/Components/WorkCard";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="pt-24 px-4 lg:px-8">
      {/* Main container */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* First column */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded-md"
            src="/WebService.png"
            alt="Web Services"
            priority
            width={450}
            height={300}
          />
        </div>

        {/* Second column */}
        <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg p-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-8">Web Services</h1>
          <h2 className="text-center font-semibold text-2xl mb-4 lg:mb-6">What we provide</h2>
          <ul className="text-center lg:text-left">
            <li className="mb-2">Website Development</li>
            <li className="mb-2">Responsive Web Design</li>
            <li className="mb-2">E-commerce Solutions</li>
            <li className="mb-2">Content Management Systems (CMS)</li>
            <li className="mb-2">Web Application Development</li>
            <li className="mb-2">Website Maintenance and Support</li>
            <li className="mb-2">Search Engine Optimization (SEO)</li>
            <li className="mb-2">Website Analytics and Reporting</li>
            <li className="mb-2">Domain Registration and Hosting</li>
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 lg:mt-20">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center">DESCRIPTION</h1>
        <p className="mt-4 lg:mt-6 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          We offer a comprehensive <span className="text-amber-500">web service</span> solution designed to facilitate seamless interaction and data exchange between various applications and systems. Our <span className="text-amber-500">web service</span> enables streamlined communication over the internet, providing a standardized platform for clients to access a wide range of functionalities. Whether you require data retrieval, manipulation, or complex business logic processing, our <span className="text-amber-500">web service</span> ensures reliable and efficient operation. With a focus on interoperability and scalability, we empower businesses to optimize their operations and enhance connectivity across diverse platforms and technologies.
        </p>
      </div>

      {/* Our Works */}
      <div className="mt-12 lg:mt-20 flex justify-center items-center">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left">
          OUR <span className="font-bold text-blue-600">Works</span>
        </h1>

      </div>
<WorkCard />

    </div>
  );
}
