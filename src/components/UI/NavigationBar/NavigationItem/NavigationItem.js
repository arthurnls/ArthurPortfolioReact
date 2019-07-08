import React from "react";
import { Link } from "gatsby";
import { FaCode } from "react-icons/fa";

import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
    let navItem = <span>{props.itemType}</span>;
    let url = "/" + props.itemType;

    if (props.itemType === "brand") {
        navItem = (
            <span className={classes.NavItemBrand} href="#">
                <FaCode /> Arthur Saraiva
            </span>
        );
        url = "/";
    } else if (props.itemType === "home") {
        url = "/";
    }
    return (
        <>
            <li className={classes.NavItem}>
                <Link
                    to={url}
                    className={classes.NavItemLink}
                    activeClassName={classes.NavItemLinkActive}
                >
                    {navItem}
                </Link>
            </li>
        </>
    );
};

export default NavigationItem;
