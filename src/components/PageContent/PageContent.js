import React from "react";

import classes from "./PageContent.module.css";
import AboutPageBody from "./PageBody/AboutPageBody";

const PageContent = props => {
    let pageBody = null;

    switch (props.pageType) {
        case "about":
            pageBody = <AboutPageBody />;
            break;
        default:
            pageBody = props.children;
    }

    return <section className={classes.PageContent}>{pageBody}</section>;
};

export default PageContent;
