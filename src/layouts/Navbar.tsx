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
  <nav
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
 
    }}
  >
    <ul
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        padding: "10rem 5rem 0rem 0rem",
        gap: "1.5rem",
        alignItems: "flex-end",
        margin: 0,
        
      }}
    >
      {menuItems.map((item, idx) => (
        <li key={idx} style={{ margin: "0.5rem 0" }}>
          <Link
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "1.5rem",
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;