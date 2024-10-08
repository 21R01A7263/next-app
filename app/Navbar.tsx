import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 px-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default Navbar;
