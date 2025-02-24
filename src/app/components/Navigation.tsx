"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-5 justify-center p-2">
      <Link href={"/"} className={pathname === "/" ? "font-bold" : "text-blue-300"}>
        Home
      </Link>
      <Link
        href={"/about"}
        className={pathname === "/about" ? "font-bold" : "text-blue-300"}
      >
        About
      </Link>
      <Link
        href={"/products/1"}
        className={pathname === "/products/1" ? "font-bold" : "text-blue-300"}
      >
        Product 1
      </Link>
    </nav>
  );
};

export default Navigation;
