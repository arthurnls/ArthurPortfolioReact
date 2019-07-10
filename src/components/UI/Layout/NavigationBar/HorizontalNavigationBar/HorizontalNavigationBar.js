import React from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./HorizontalNavigationBar.module.css";

const HorizontalNavigationBar = () => {
    return (
        <>
            <ul className={classes.HorizontalNavBarUl}>
                <NavigationItem itemType="brand" origin="horizontal" />
                <NavigationItem itemType="home" origin="horizontal" />
                <NavigationItem itemType="about" origin="horizontal" />
                <NavigationItem itemType="projects" origin="horizontal" />
                <NavigationItem itemType="contact" origin="horizontal" />
            </ul>
        </>
    );
};

export default HorizontalNavigationBar;
