import React from "react";

import classes from "./PageContent.module.css";
import HomePageBody from "./PageBody/HomePageBody";
import AboutPageBody from "./PageBody/AboutPageBody";
import ProjectsPageBody from "./PageBody/ProjectsPageBody";
import ContactPageBody from "./PageBody/ContactPageBody";

// This is a component to render each page content.
// Must receive a pageType props, to select which component it will render.
// Inside PageBody folder, we have one component for each kind of page. This will be the component which stores the html content that will show after the PageTitle
const PageContent = props => {
    let pageBody = null;

    switch (props.pageType) {
        case "about":
            pageBody = <AboutPageBody />;
            break;
        case "projects":
            pageBody = <ProjectsPageBody />;
            break;
        case "contact":
            pageBody = <ContactPageBody />;
            break;
        default:
            pageBody = props.children;
    }

    return <section className={classes.PageContent}>{pageBody}</section>;
};

export default PageContent;
