import React, { Component } from "react";

import classes from "./NavigationBar.module.css";
import HorizontalNavigationBar from "./HorizontalNavigationBar/HorizontalNavigationBar";
import VerticalNavigationBar from "./VerticalNavigationBar/VerticalNavigationBar";
import NavigationItem from "./NavigationItem/NavigationItem";

// This Component Creates the top Navigation Bar, with Navigation Items which are links to each of the pages.
class NavigationBar extends Component {
    render() {
        return (
            <nav className={classes.NavBar}>
                <HorizontalNavigationBar />
                <VerticalNavigationBar />
            </nav>
        );
    }
}

export default NavigationBar;
