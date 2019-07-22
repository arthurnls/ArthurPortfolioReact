import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import classes from "./HomePageBody.module.css";
import Image from "../../UI/Image/image";

const HomePageBody = () => {
    return (
        <>
            {/* From here onward is DONE */}
            <div className={classes.containerImage}>
                <Image
                    originPage="homeBackground"
                    fileName="landingPageBackground3.jpg"
                    alt="Background Image"
                />
            </div>
            <div className={classes.Blur}></div>
            <div className={classes.containerText}>
                <Image
                    originPage="home"
                    fileName="profilePhoto2.png"
                    alt="Profile Photo"
                />
                <h1>Arthur Saraiva</h1>
                <p>Web Developer, always studying and improving.</p>
                <p>
                    Attending Business Information Technology at Red River
                    College, Winnipeg, MB.
                </p>
                <p>
                    <a
                        className={classes.button}
                        href="https://www.linkedin.com/in/arthur-saraiva-a8b8b6a3/"
                    >
                        <span className={classes.socialMediaIcon}>
                            <FaLinkedin />
                        </span>
                        Linkedin
                    </a>
                    <a
                        className={classes.button}
                        href="https://github.com/arthurnls"
                    >
                        <span className={classes.socialMediaIcon}>
                            <FaGithubSquare />
                        </span>
                        Github
                    </a>
                </p>
            </div>
        </>
    );
};

export default HomePageBody;
