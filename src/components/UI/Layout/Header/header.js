import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import NavigationBar from "../../NavigationBar/NavigationBar";

const Header = ({ siteTitle }) => (
    <header>
        <NavigationBar />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
