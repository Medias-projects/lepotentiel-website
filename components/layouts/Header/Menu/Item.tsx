import React, { useMemo } from "react";
import Link from "next/link";

type Props = {
  label: string;
  link: string;
  onClick?: () => void;
};

function Item({ label, link, onClick }: Props) {
  const activeLink =
    typeof window !== "undefined" ? window.location.pathname : null;

  const isActive = useMemo(() => {
    return activeLink === link;
  }, [activeLink, link]);

  return (
    <li onClick={onClick}>
      <Link
        href={link}
        className={`flex items-center justify-center gap-2 hover:bg-red-500 p-4 ${
          isActive && "bg-black"
        } `}
      >
        <span className="text-white font-semibold uppercase text-center mx-2">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default Item;
