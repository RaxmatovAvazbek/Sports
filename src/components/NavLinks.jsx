import { Link } from "react-router-dom";

const navlinks = [
  {
    path: "/",
    text: "Bosh sahifa",
  },
  {
    path: "/sportchilar",
    text: "Sportchilar",
  },
  {
    path: "/profil",
    text: "Sport turlari",
  },
  
];

function NavLinks() {
  return (
    <>
      {navlinks.map((item) => {
        return (
          <li key={item.path}>
            <Link to={item.path} >{item.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
