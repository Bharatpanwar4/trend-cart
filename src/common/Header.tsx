import React from "react";
import Container from "./Container";
import Logo from "./icon/Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./icon/CartIcon";
import FavouriteButton from "./icon/FavouriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./icon/MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between  ">
        {/* logo */}
        <div className="flex items-center w-auto md:w-1/3 md:gap-0  gap-2.5 justify-start text-lightColor">
          <MobileMenu />
          <Logo />
        </div>
        {/* list */}
        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center  justify-end gap-5">
          <SearchBar />

          <CartIcon />
          <FavouriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
