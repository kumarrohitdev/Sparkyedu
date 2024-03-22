import Image from "next/image";

export default function Hero() {
  return (
    <div>      
      <Image className="w-screen h-auto" src='/Home.jpg' priority width={600} height={600} />
    </div>
  )
}
