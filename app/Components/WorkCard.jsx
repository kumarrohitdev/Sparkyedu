import Image from "next/image";

import { webWork } from "../Data/WebWork";
import Link from "next/link";

export default function WorkCard() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-4 m-12">
      {webWork.map((item, index) => (
        <div key={index}>
          <div className="max-w-xs mx-auto mb-8">
            <div className="bg-white rounded-md shadow-lg p-6">
              <div className="mb-4">
                <Image
                  className="rounded-md"
                  src={item.Image}
                  alt="Service"
                  width={300}
                  height={200}
                />
              </div>
              <p className="text-gray-600 line-clamp-3">{item.About}</p>
              <Link
                target="_blank"
                className="text-center text-blue-600"
                href={item.Link}
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
