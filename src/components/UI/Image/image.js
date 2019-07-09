import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import classes from "./image.module.css";

const Image = props => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            sizes(maxWidth: 600) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }
    `);
    const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.fileName);
    });
    if (!image) {
        return null;
    }
    const imageSizes = image.node.childImageSharp.sizes;

    let classname = "";
    switch (props.originPage) {
        case "home":
            classname = classes.homeImage;
            break;
        case "homeBackground":
            classname = classes.homeBackgroundImage;
            break;
        case "about":
            classname = classes.aboutImage;
            break;
        case "project":
            classname = classes.projectImage;
            break;
        default:
            classname = "";
    }
    return <Img alt={props.alt} sizes={imageSizes} className={classname} />;
};

export default Image;
