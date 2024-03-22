import Image from "next/image";
import { Services } from "../Data/Services";
import Link from "next/link";

export default function Card() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-4 m-12">
      {Services.map((item, index) => (
        <Link key={index} href={`/Services/${item.Link}`}>
        <div  className="max-w-xs mx-auto mb-8">
          <div className="bg-white rounded-md shadow-lg p-6">
            <div className="mb-4">
              <Image
                className="rounded-md"
                src={item.image}
                alt="Service"
                width={300}
                height={200}
              />
            </div>
            <h1 className="text-center font-bold text-2xl mb-2 dark:text-gray-600">{item.Title}</h1>
            <p className="text-gray-600 line-clamp-3">{item.Description}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
