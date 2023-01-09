import React from "react";
import Iconify from "../../shared/Iconify";

function Headericons() {
  return (
    <div className="icons flex gap-4">
      <a href="#" rel="noopener noreferrer" target={"_blank"}>
        <Iconify
          icon="logos:apple-app-store"
          className="text-primary text-xl font-semibold"
        />
      </a>
      <a href="#" rel="noopener noreferrer" target={"_blank"}>
        <Iconify
          icon="logos:google-play-icon"
          className="text-primary text-xl font-semibold"
        />
      </a>
      <a
        href="https://www.facebook.com/lepotentiel.cd?_rdc=1&_rdr"
        rel="noopener noreferrer"
        target={"_blank"}
      >
        <Iconify
          icon="logos:facebook"
          className="text-primary text-xl font-semibold"
        />
      </a>
      <a
        href="https://twitter.com/LePotentiel_rdc"
        rel="noopener noreferrer"
        target={"_blank"}
      >
        <Iconify
          icon="logos:twitter"
          className="text-primary text-xl font-semibold"
        />
      </a>
      <a
        href="https://www.youtube.com/@lepotentielrdc6366"
        rel="noopener noreferrer"
        target={"_blank"}
      >
        <Iconify
          icon="logos:youtube-icon"
          className="text-primary text-xl font-semibold"
        />
      </a>
    </div>
  );
}

export default Headericons;
