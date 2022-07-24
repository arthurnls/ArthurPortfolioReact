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
                    In 2018, I came from Brasil to Winnipeg to attend to the
                    Business Information Technology course at Red River College.
                    Before coming to Canada, I have graduated from a Bachelor
                    Degree in Computer Science, while I was running my own
                    business with my brother in my home country. We have ran the
                    business for about 10 years, then I entered the police force
                    and worked as a Crime Scene Investigator for 4 years. Then I
                    moved to Canada.
                </p>
                <p>
                    I pride myself in being a resourceful Software Developer.
                    Since I started learning to program, I became passionate
                    about it. I am always studying and learning new technologies
                    and techniques, and love to help and discuss about
                    programming.
                </p>
                <p>
                    I am now working at Johnston Group as an Application
                    Developer in .NET team, maintaining current applications and
                    developing new features. I used both modern and legacy
                    technologies and worked mostly with Angular, ASP .NET, C#,
                    .NET Framework, AVR (ASNA Visual RPG).
                </p>
                <p>
                    On my free time, I built side projects while learning
                    NodeJS, React and MongoDB. I also have some experience
                    programming in PHP, Ruby On Rails, Python. On databases, I
                    used SQL, SQLite, MongoDB, Firebase.
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
                    If you want to talk with me, please feel free to send a
                    message through{" "}
                    <a
                        className={classes.textAnchor}
                        href="https://www.linkedin.com/in/arthur-saraiva/"
                    >
                        Linkedin
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default AboutPageBody;
