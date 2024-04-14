import React from "react";
import Link from "next/link";

const NavLink = ({ name, href, locale, p }) => {
  return (
    <Link
      style={{ padding: `${p ? p : "0.2"}rem 0.4rem` }}
      href={href}
      className="text-base text-text  hover:bg-grey  bg-grey w-full rounded-md   font-medium hover:text-primary1 hover:scale-105  transition-all "
    >
      {name}
    </Link>
  );
};

export default NavLink;
