import Image from "next/image";
import { Team } from "../Data/Team";
import Link from "next/link";

export default function TeamCard() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 justify-items-center mx-auto mt-12">
      {Team.map((item, index) => (
        <div key={index} className="bg-white rounded-md shadow-lg p-6">
          <div className="mb-4">
            <Image
              className="rounded-full mx-auto"
              src={`/${item.Image}`}
              alt={item.Name}
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-black text-center font-bold">{item.Name}</h1>
          <Link href={item.Social}>
            <p className="text-center block text-blue-600 hover:underline">
              LinkedIn
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
