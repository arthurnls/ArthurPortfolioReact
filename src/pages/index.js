import React from "react";

import Layout from "../components/UI/Layout/layout";
import SEO from "../components/SEO/seo";

// This is the Landing Page
// Uses Layout to add the header with navigation bars and a main tag as html5 semantic element
// Inside, starts with SEO component
// Then ....
const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>This is the HOME Page</h1>
        <p>Still working on this page</p>
    </Layout>
);

export default IndexPage;
