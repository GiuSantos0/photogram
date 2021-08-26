import React, { ReactChild } from "react";
import { useSelector } from "react-redux";
import { User, ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";

import ImageLogo from "../assets/logo.png";
import {Header, Logo, ListOptionsHeader} from "./styles";
import { IconButtonWithBadge } from "../components/Buttons";
import { IState } from "../store";

interface IAuxProps {
  children: ReactChild[];
}

const UserLayout = ({ children }: IAuxProps) => {
  const productsInCarLength = useSelector<IState>((state) => state.cart.items.length);

  return (
    <>
      <Header id="user-header">
          <Link to="/">
            <Logo src={ImageLogo} alt="Photogram logo" />
          </Link>

        <nav>
          <ListOptionsHeader className="user options">
            <li id="user-option" className="header-option">
              <User />
            </li>
            <li className="header-option">
              <IconButtonWithBadge to="/cart" data-badge={productsInCarLength}>
                <ShoppingCart />
              </IconButtonWithBadge>
            </li>
          </ListOptionsHeader>
          </nav>
      </Header>
      {children}
    </>
  );
};

export default UserLayout;
