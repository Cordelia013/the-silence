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

interface NavbarProps {
  fontSize?: string;
  gap?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  fontSize = "1.5rem", 
  gap = "1.5rem" 
}) => (
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
        padding: "4rem 5rem 0rem 0rem",
        gap: gap, // MODIFIABLE: Espacement entre les éléments de navigation
        alignItems: "flex-end",
        margin: 0,
      }}
    >
      {menuItems.map((item, idx) => (
        <li key={idx} style={{ margin: "0" }}>
          <Link
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: fontSize, // MODIFIABLE: Taille de la police des liens
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