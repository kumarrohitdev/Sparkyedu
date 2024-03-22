import Link from "next/link";
import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center bg-white dark:bg-gray-600 mt-12 shadow-lg p-6 border-t-2">
      <div>
        <h1>Quick Links</h1>
        <ul>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Service</Link>
          </li>

          <li>
            <Link href={""}></Link>
          </li>

          <li>
            <Link href={""}></Link>
          </li>

          <li>
            <Link href={""}></Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-300">
        © {date} Sparky Technologies. All rights reserved.
      </p>
    </footer>
  );
}
