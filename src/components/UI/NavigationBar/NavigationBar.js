import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationBar.module.css";

// This Component Creates the top Navigation Bar, with Navigation Items which are links to each of the pages.
const NavigationBar = () => {
    return (
        <nav className={classes.NavBar}>
            <ul>
                <NavigationItem itemType="brand" />
                <NavigationItem itemType="home" />
                <NavigationItem itemType="about" />
                <NavigationItem itemType="projects" />
                <NavigationItem itemType="contact" />
            </ul>
        </nav>
    );
};

export default NavigationBar;
