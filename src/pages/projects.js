import React from "react";
import { Link } from "gatsby";

import Layout from "../components/UI/Layout/layout";
import SEO from "../components/SEO/seo";

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export default ProjectsPage;
