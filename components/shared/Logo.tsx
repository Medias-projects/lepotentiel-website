import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} passHref>
      <div className="Logo">
        <Image
          src="/images/logo-potentiel.png"
          alt="logo"
          width={200}
          height={60}
        />
      </div>
    </Link>
  );
}

export default Logo;
