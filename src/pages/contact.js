import React from "react";

import Layout from "../components/UI/Layout/layout";
import SEO from "../components/SEO/seo";
import PageTitle from "../components/PageTitle/PageTitle";
import PageContent from "../components/PageContent/PageContent";

// This is the Contact Page
// Uses Layout to add the header with navigation bars and a main tag as html5 semantic element
// Inside, starts with SEO component
// Then uses PageTitle component for the top jumbotron-like heading for the content
// Then uses PageContent to render the contact page content
const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Content" />
            <PageTitle title="Contact Me" />
            <PageContent pageType="contact" />
        </Layout>
    );
};

export default ContactPage;
