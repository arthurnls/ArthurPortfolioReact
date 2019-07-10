import React, { Component } from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./VerticalNavigationBar.module.css";

class VerticalNavigationBar extends Component {
    state = {
        showDropdownMenu: false,
    };

    burgerToggleHandler = () => {
        this.setState(prevState => {
            return { showDropdownMenu: !prevState.showDropdownMenu };
        });
    };

    render() {
        let dropdownMenu = null;

        if (this.state.showDropdownMenu) {
            dropdownMenu = (
                <>
                    <NavigationItem itemType="home" origin="vertical" />
                    <NavigationItem itemType="about" origin="vertical" />
                    <NavigationItem itemType="projects" origin="vertical" />
                    <NavigationItem itemType="contact" origin="vertical" />
                </>
            );
        }

        return (
            <>
                <ul className={classes.VerticalNavBarUl}>
                    <NavigationItem
                        itemType="burgerIcon"
                        origin="vertical"
                        clicked={this.burgerToggleHandler}
                    />
                    <NavigationItem
                        itemType="brand"
                        origin="vertical"
                        clicked={this.burgerToggleHandler}
                    />
                    {dropdownMenu}
                </ul>
            </>
        );
    }
}

export default VerticalNavigationBar;
