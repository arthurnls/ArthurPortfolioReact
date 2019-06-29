import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = props => {
    return <header className={classes.PageTitle}>{props.title}</header>;
};

export default PageTitle;
