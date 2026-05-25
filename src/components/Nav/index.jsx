import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import ScrollDirection from "../../helpers/ScrollDirection";

function Nav() {
  const location = useLocation();
  const getActiveStyle = (path) => {
    return location.pathname === path
      ? "text-cyan-600 dark:text-cyan-400 font-semibold"
      : "text-black dark:text-white";
  };
  const scrollDirection = ScrollDirection();
  const links = [
    { link: "/", label: "About" },
    { link: "/skills", label: "Skill" },
    { link: "/portofolio", label: "Portofolio" },
    { link: "/certification", label: "Certification" },
    { link: "/contact", label: "Contact" },
  ];
  const items = links.map((link) => (
    <NavbarLink
      key={link.label}
      as={Link}
      to={link.link}
      className={`cursor-pointer ${getActiveStyle(link.link)}`}
    >
      {link.label}
    </NavbarLink>
  ));

  return (
    <div className="relative mb-16">
      <Navbar
        fluid
        className={`sticky ${
          scrollDirection == "down" ? "hidden" : "block"
        } top-0 fixed z-10 w-full border-b shadow-none dark:bg-slate-900`}
      >
        <NavbarToggle />
        <NavbarCollapse className="pl-2 lg:pl-80">
          <div className="flex flex-col lg:flex-row gap-x-6 items-start lg:items-center">
            {items}
          </div>
        </NavbarCollapse>
        <NavbarBrand className="lg:pr-80">
          <DarkThemeToggle />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Nav;
