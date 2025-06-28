import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "About Us",
};


export default function AboutLayout({ children }) {
  
  return (
    <div>
      <hr />
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li><Link href="/about/mission">Mission</Link></li>
          <li><Link href="/about/vission">Vision</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
