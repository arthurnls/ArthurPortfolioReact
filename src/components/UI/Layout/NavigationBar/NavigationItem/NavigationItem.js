import React from "react";
import { Link } from "gatsby";
import { FaCode } from "react-icons/fa";

import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
    let navItem = <span>{props.itemType}</span>;
    let url = "/" + props.itemType;
    let liClassName = classes.NavItem;

    if (props.itemType === "brand") {
        navItem = (
            <span className={classes.NavItemBrand} onClick={props.clicked}>
                <FaCode /> Arthur Saraiva
            </span>
        );
        url = "/";
        liClassName = classes.NavItemShowOnMobile;
    } else if (props.itemType === "home") {
        url = "/";
    }

    let returnJSX = (
        <li className={liClassName}>
            <Link
                to={url}
                className={classes.NavItemLink}
                activeClassName={classes.NavItemLinkActive}
            >
                {navItem}
            </Link>
        </li>
    );
    if (props.itemType === "burgerIcon") {
        returnJSX = (
            <div className={classes.burgerIcon} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }

    return returnJSX;
};

export default NavigationItem;
