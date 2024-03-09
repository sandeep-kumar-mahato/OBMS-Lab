import { useState, useEffect } from "react";
import title from "../images/title.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Team", url: "/Team" },
  { label: "Publications", url: "/Publications" },
  { label: "Research", url: "/Research" },
  { label: "Courses", url: "/Courses" },
  { label: "Lab Facilities", url: "/LabFacilities" },
  { label: "Gallery", url: "/Gallery" },
  { label: "Services", url: "/Services" },
  { label: "Fundings", url: "/Fundings" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const iconSize = isScrolled ? "30px" : "30px";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`sticky top-0 ${isScrolled ? "bg-gray-800" : ""} z-50`}>
      <div
        className={`bg-slate-100 shadow-2xl shadow-slate-600 md:shadow-xl p-4 md:p-2 flex justify-between items-center duration-1000 ${
          isScrolled ? "md:px-80" : " md:px-20"
        }`}
      >
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <img
            className={`duration-1000 m-auto ${isScrolled ? "w-1/2" : "w-3/4"}`}
            src={title}
            alt=""
          />
        </Link>
        <h1
          className={`font-sans text-lg font-semibold hidden md:block duration-1000 ${
            isScrolled ? "text-sm" : "text-md"
          }`}
        >
          National Institute of Technology
          <br /> Rourkela, Odisha
        </h1>
        <div className={`icons hidden md:block justify-center`}>
          <SocialIcon
            className={`mx-1 ${isScrolled ? "p-0" : "p-4"}`}
            url="https://twitter.com"
            style={{ width: iconSize, height: iconSize }}
          />
          <SocialIcon
            className={`mx-1 ${isScrolled ? "p-0" : "p-4"}`}
            url="https://instagram.com"
            style={{ width: iconSize, height: iconSize }}
          />
          <SocialIcon
            className={`mx-1 ${isScrolled ? "p-0" : "p-4"}`}
            url="https://facebook.com"
            style={{ width: iconSize, height: iconSize }}
          />
          <SocialIcon
            className={`mx-1 ${isScrolled ? "p-0" : "p-4"}`}
            url="https://linkedin.com"
            style={{ width: iconSize, height: iconSize }}
          />
          <SocialIcon
            className={`mx-1 ${isScrolled ? "p-0" : "p-4"}`}
            url="https://youtube.com"
            style={{ width: iconSize, height: iconSize }}
          />
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            style={{ color: "#000000", fontSize: "24px" }}
            onClick={toggleMenu}
          />
        </div>
      </div>

      <nav
        className={`bg-gray-800 flex justify-center items-center md:h-auto text-center ${
          menuOpen ? "pb-8" : ""
        }`}
      >
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <ul className="w-screen m-auto text-center p-8">
            {menuItems.map((item, index) => (
              <li key={index} className="py-4">
                <Link
                  to={item.url}
                  className="text-white mx-4"
                  onClick={() => {
                    closeMenu();
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-center md:block">
          <ul className="md:flex justify-center">
            {menuItems.map((item, index) => (
              <li key={index} className="py-4">
                <Link
                  to={item.url}
                  className="text-white mx-4"
                  onClick={scrollToTop}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
