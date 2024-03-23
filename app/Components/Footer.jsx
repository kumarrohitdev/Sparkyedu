import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="flex flex-col justify-center items-center bg-gray-900 text-white py-10">
            <div className="flex flex-wrap justify-center items-center mb-6">
                <Link href="/#About" className="mx-3 my-2 hover:text-blue-400 transition duration-300">About Us</Link>
                <Link href="/#Contact" className="mx-3 my-2 hover:text-blue-400 transition duration-300">Contact Us</Link>
                <Link href="/faq" className="mx-3 my-2 hover:text-blue-400 transition duration-300">FAQ</Link>
                <Link href="/terms" className="mx-3 my-2 hover:text-blue-400 transition duration-300">Terms of Service</Link>
                <Link href="/refund-policy" className="mx-3 my-2 hover:text-blue-400 transition duration-300">Refund Policy</Link>
                {/* Add links to other pages such as Privacy Policy, etc. */}
            </div>
            <div className="flex justify-center items-center mb-6">
                <div className="mr-4">
                    <FaPhoneAlt className="inline-block mr-2 text-blue-400" />
                    <Link href="tel:1234567890" className="text-gray-400 hover:text-blue-400 transition duration-300">931-529-7507</Link>
                </div>
                <div>
                    <FaMapMarkerAlt className="inline-block mr-2 text-blue-400" />
                    <span className="text-gray-400">Goswami Marg khichripur East Delhi-110091</span>
                </div>
            </div>
            <p className="text-sm text-gray-400">
                © {date} Sparky Technologies. All rights reserved.
            </p>
        </footer>
    );
}
