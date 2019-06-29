import React from "react";

import Layout from "../components/UI/Layout/layout";
import SEO from "../components/SEO/seo";
import PageTitle from "../components/PageTitle/PageTitle";
import PageContent from "../components/PageContent/PageContent";

const AboutPage = () => {
    const textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis consequatur provident ea odit quisquam eaque dolorum assumenda omnis dolore velit quas quaerat laboriosam rerum illum natus animi sit voluptate, harum fugit accusantium ipsa repudiandae cumque asperiores! Hic, nihil nemo.";
    return (
        <Layout>
            <SEO title="About" />
            <PageTitle title="About Me" />
            <PageContent pageType="about">{textContent}</PageContent>
        </Layout>
    );
};

export default AboutPage;
