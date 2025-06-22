import React from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { label: "Galerie", path: "/gallery" },
  { label: "Événements", path: "/events" },
  { label: "Billetterie", path: "/ticketing" },
  { label: "Historique", path: "/history" },
  { label: "Infos", path: "/info" },
];

const Navbar: React.FC = () => (
  <nav>
    <ul className=" w-full flex flex-col list-none p-0 gap-[1.5rem] items-end">
      {menuItems.map((item, idx) => (
        <li key={idx} className="my-2">
          <Link
            to={item.path}
            className="no-underline text-inherit text-[1.5rem]  "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;