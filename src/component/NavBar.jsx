import React, { useState } from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const navItems = ["Stay", "Experiences", "Volunteer", "Book Now"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavBarMainComponent>
      <Logo>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#984216",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={`main-logo.png?w=164&h=164&fit=crop&auto=format`}
            loading="lazy"
            style={{ height: "60px", paddingTop: "3px", paddingRight: "20px" }}
            alt="Logo"
          />
          <span style={{ marginRight: "10px" }}>The Stone Heritage</span>
        </Link>
      </Logo>

      {/* Hamburger Icon (Visible on mobile) */}
      <HamburgerIcon onClick={toggleMenu}>
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </HamburgerIcon>

      <NavItemsContainer open={mobileMenuOpen}>
        {navItems.map((item, i) => (
          <NavItem key={i} onClick={() => setMobileMenuOpen(false)}>
            {item === "Book Now" ? (
              <BookNowButton to={"/" + item}>{item}</BookNowButton>
            ) : (
              <Link
                to={"/" + item}
                style={{ textDecoration: "none", color: "#984216" }}
              >
                {item}
              </Link>
            )}
          </NavItem>
        ))}
      </NavItemsContainer>
    </NavBarMainComponent>
  );
};

export default NavBar;

/* ——— styled components ——— */

const NavBarMainComponent = styled("nav")`
  background-color: #dda15e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10vh;
  width: 100%;
  color: #feae0;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled("div")`
  font-size: 40px;
  font-family: "serif";
  font-weight: bold;
  white-space: nowrap;
`;

const NavItemsContainer = styled("div")`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    position: absolute;
    top: 10vh;
    left: 0;
    background-color: #dda15e;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    align-items: center;
    transition: all 0.3s ease-in-out;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
    gap: 20px;
  }
`;

const NavItem = styled("div")`
  font: 400 20px serif;
  cursor: pointer;
  color: #984216;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const BookNowButton = styled(Link)`
  background-color: #fff;
  color: #984216;
  padding: 6px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const HamburgerIcon = styled("div")`
  display: none;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;
