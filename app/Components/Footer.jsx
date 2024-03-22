import React from "react";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="flex justify-center items-center bg-white dark:bg-gray-600 mt-12 shadow-lg p-6 border-t-2">
            <p className="text-center text-gray-700 dark:text-gray-300">
                © {date} Sparky Technologies. All rights reserved.
            </p>
        </footer>
    );
}
