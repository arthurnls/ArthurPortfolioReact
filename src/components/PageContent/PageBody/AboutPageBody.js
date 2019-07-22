import React from "react";
import { Link } from "gatsby";

import Image from "../../UI/Image/image";
import classes from "./AboutPageBody.module.css";

const AboutPageBody = () => {
    return (
        <div className={classes.container}>
            <div className={classes.containerImage}>
                <Image
                    originPage="about"
                    fileName="profilePhoto2.png"
                    alt="Profile Photo"
                />
            </div>
            <div className={classes.containerText}>
                <p>
                    I came from Brasil to Winnipeg to attend to the Business
                    Information Technology course at Red River College. I have
                    graduated from a Bachelor Degree in Computer Science, while
                    I was running my own business with my brother in my home
                    country. We've ran the business for about 10 years, then I
                    entered the police and started working as a Crime Scene
                    Investigator for 4 years, before coming to Canada.
                </p>
                <p>
                    I have great interest and some experience in working with
                    web development, and have worked on my skills in the field,
                    learning new tools and technologies.
                </p>
                <p>
                    My experience working at the Police improved my creative
                    thinking, attention to details, accepting my
                    responsibilities and keeping always learning new skills. I
                    use this knowledge daily while facing new challenges.
                    Running my own business has also gave my solid skills in
                    working on teams, project management and execution, dealing
                    and negotiating with clients.
                </p>
                <p>
                    If you want to talk with me, please feel free to{" "}
                    <Link className={classes.textAnchor} to="/contact">
                        contact me
                    </Link>{" "}
                    throught the page or{" "}
                    <Link className={classes.textAnchor} to="/">
                        social media
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default AboutPageBody;
