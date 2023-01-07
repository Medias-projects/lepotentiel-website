import React from "react";
import Iconify from "../../shared/Iconify";

function Headericons() {
  return (
    <div className="icons flex gap-4">
      <Iconify
        icon="logos:apple-app-store"
        className="text-primary text-xl font-semibold"
      />
      <Iconify
        icon="logos:google-play-icon"
        className="text-primary text-xl font-semibold"
      />
      <Iconify
        icon="logos:facebook"
        className="text-primary text-xl font-semibold"
      />
      <Iconify
        icon="logos:twitter"
        className="text-primary text-xl font-semibold"
      />
      <Iconify
        icon="logos:youtube-icon"
        className="text-primary text-xl font-semibold"
      />
    </div>
  );
}

export default Headericons;
