import React from "react";

import Layout from "../components/UI/Layout/layout";
import SEO from "../components/SEO/seo";
import HomePageBody from "../components/PageContent/PageBody/HomePageBody";

// This is the Landing Page
// Uses Layout to add the header with navigation bars and a main tag as html5 semantic element
// Inside, starts with SEO component
// Then uses HomePageBody to render the landing page content
const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <HomePageBody />
    </Layout>
);

export default IndexPage;
