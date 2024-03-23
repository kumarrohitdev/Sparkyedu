import Image from "next/image";
import Link from "next/link";

export default function Whatsappbtn() {
  return (
    <div>
      <div
        style={{ position: "fixed", bottom: "0", left: "0", padding: "10px" }}
      >
        <Link
          target="_blank"
          href="https://wa.me/9315297507?text=I%20want%20to%20know%20about%20Sparkyedu"
        >
          <Image
            className="rounded-full"
            src="/Whatsapp.png"
            alt="WhatsApp"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
