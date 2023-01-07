import React, { useState, useCallback } from "react";
import Link from "next/link";
import Iconify from "../../../shared/Iconify";

type Props = {
  label: string;
  children: [
    {
      label: string;
      link: string;
    }
  ];
};

function Dropdown({ label, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <li className="relative">
      <div
        className="flex items-center justify-center gap-2 hover:bg-red-500 p-2 cursor-pointer"
        onClick={toggle}
      >
        <span className="text-white font-semibold uppercase text-center mx-2">
          {label}
        </span>
        {isOpen ? (
          <Iconify icon="bx:bx-chevron-up" className="text-white text-xl" />
        ) : (
          <Iconify icon="bx:bx-chevron-down" className="text-white text-xl" />
        )}
      </div>
      <ul
        className={
          isOpen
            ? " absolute bg-black transition-all duration-300 ease-in-out"
            : "hidden"
        }
      >
        {children.map((child, index) => (
          <li key={index} onClick={toggle}>
            <Link
              href={child.link}
              className="flex items-center  gap-2 hover:bg-red-500 p-2"
            >
              <span className="text-white font-semibold uppercase  mx-2">
                {child.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Dropdown;
