import React from "react";

interface NavButtonProps {
  title: string;
  link: any;
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  return (
    <div>
      <a href={props.link} className="text-sky-400 p-4">
        {props.title}
      </a>
    </div>
  );
};

export default NavButton;
