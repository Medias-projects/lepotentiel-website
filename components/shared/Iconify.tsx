import React from "react";
import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  className?: string;
};

function Iconify({ icon, className }: Props) {
  return <Icon icon={icon} className={`inline ${className}`} />;
}

export default Iconify;
