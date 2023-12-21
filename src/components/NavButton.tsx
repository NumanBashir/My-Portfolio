import React, { useState } from "react";

interface NavButtonProps {
  title: string;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <div>
      <button className="text-sky-400">{props.title}</button>
    </div>
  );
};

export default NavButton;
