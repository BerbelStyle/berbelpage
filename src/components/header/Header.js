import React from "react";
import {HeaderContainer, LinkContainer, HeaderNavLink} from "./HeaderStyles.js";

export default function Header({ children, ...restProps }) {
    return <HeaderContainer {...restProps}>{children}</HeaderContainer>;
}

Header.LinkBox = function LinkBox({ children, ...restProps }) {
    return(
        <LinkContainer {...restProps}>
            {children}
        </LinkContainer>
    )
}
Header.NavLink = function NavLink({ children, ...restProps }) {
    return(
        <HeaderNavLink {...restProps}>
            {children}
        </HeaderNavLink>
    )
}
