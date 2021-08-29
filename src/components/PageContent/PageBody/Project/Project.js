import React from "react";

import Image from "../../../UI/Image/image";
import classes from "./Project.module.css";

const Project = props => {
    let config = null;
    let ExpensesManagerText = (
        <>
            <h2>My Expenses Manager</h2>
            <p>
                <strong>2020-12: </strong>
                Expenses Manager is a personal project I built to use for
                my family expenses tracking routine, to replace the excel
                spreadsheet system we used. It is a fullstack web application
                developed using the MERN Stack (Mongo Express React Node).
            </p>
            <p>
                The Frontend was built in <strong>React</strong> using
                functional components and hooks, including custom hooks and user
                authentication. It has password reset capabilities, and
                graphical reports done using chartjs.
            </p>
            <p>
                Similarly to MemeShare, the Backend was built using
                <strong> NodeJS and Express</strong>, with the database being
                <strong> MongoDB</strong> managed through MongoDB Atlas service.
            </p>
            <p>
                I deployed the frontend using Netlify service, and the backend
                was deployed using Digital Ocean.
            </p>
            
            <p>
                <em>
                    You can use "<strong>tester@gmail.com</strong>" as username
                    and "<strong>asdasd</strong>" as password, or create your
                    own user, for testing the application.
                </em>
            </p>
            <span>
                <a href="https://myexpensesmanager.com/" target="_blank">
                    View My Expenses Manager
                </a>
            </span>
        </>
    );
    let PyCoinText = (
        <>
            <h2>PyCoin Blockchain</h2>
            <p>
                <strong>2020-09: </strong>
                This project was built during a Python Udemy course, that I took
                in parallel to Red River College's last term. I wanted to
                improve my understandings of basic and advanced concepts of
                <strong> Python</strong> programming language.
            </p>
            <p>
                It also allowed me to study and understand the concepts behind a
                blockchain. Implemented a basic network distributed blockchain
                application.
            </p>
            <span>
                <a href="https://github.com/arthurnls/pycoin" target="_blank">
                    View PyCoin Repo
                </a>
            </span>
        </>
    );
    let MemeShareText = (
        <>
            <h2>Meme Share</h2>
            <p>
                <strong>2020-04: </strong>
                Meme Share is a fullstack web application developed using and
                practicing the MERN Stack. The Frontend was built in
                <strong> React</strong> using functional components and hooks,
                including custom hooks, user authentication and file uploads.
                Deployed to Netlify.
            </p>
            <p>
                The Backend was built using <strong>NodeJS and Express</strong>,
                with the database being <strong>MongoDB</strong> managed through
                MongoDB Atlas service. The backend was deployed on Heroku. The
                images file upload is currently done by saving it manually on
                the server, which causes the images to break after a while
                because of how Heroku deals with its servers.
            </p>
            <p>
                I still have to update this project to fix the image upload
                issue, either deploying in AWS or just converting it to use AWS
                S3 for file upload.
            </p>
            <p>
                <em>
                    You can use "<strong>tester@gmail.com</strong>" as username
                    and "<strong>asdasd</strong>" as password, or create your
                    own user, for testing the application.
                </em>
            </p>
            <span>
                <a href="https://memesshare.netlify.app/" target="_blank">
                    Open Meme Share
                </a>
            </span>
        </>
    );
    let BurgerBuilderText = (
        <>
            <h2>Burger Builder</h2>
            <p>
                <strong>2019-08: </strong>
                Burger Builder is a web application I developed and deployed for
                practicing React. Focusing on the Frontend, it was developed
                using <strong>React, Redux, React Router</strong>. Features
                statefull and stateless components and containers, state
                management with Redux. Has user authentication and resource
                blocking for non-authorized users, forms and form validation.
                Handling http requests using axios.
            </p>
            <p>
                <em>
                    You can use "<strong>teste@teste.br</strong>" as username
                    and "<strong>testes</strong>" as password, or create your
                    own user, for testing the application.
                </em>
            </p>
            <span>
                <a
                    href="https://burger-builder-saraiva.web.app/"
                    target="_blank"
                >
                    Open Burger Builder
                </a>
            </span>
        </>
    );
    let YelpCampText = (
        <>
            <h2>Yelp Camp</h2>
            <p>
                <strong>2019-04: </strong>
                Yelp Camp is the first full stack web application I developed
                and deployed for practicing. Developed using{" "}
                <strong>
                    HTML, CSS, JavaScript, Bootstrap 4, Git, MongoDB, Express
                    and NodeJS
                </strong>
                . This project was initially developed during the Udemy course,
                and after finishing it, I started refactoring and adding new
                functionalities, such as using google maps API and searching.
            </p>
            <p>
                <em>
                    You can use "<strong>test</strong>" as username and password
                    for testing the application.
                </em>
            </p>
            <span>
                <a href="https://yelpcamp-arthur.herokuapp.com" target="_blank">
                    Open Yelp Camp
                </a>
            </span>
        </>
    );
    let ColorGameText = (
        <>
            <h2>Color Game</h2>
            <p>
                <strong>2019-02: </strong>
                Color Game was a very simple application that I created when I
                started learning, to test and practice my skills on basic{" "}
                <strong>HTML, CSS and JavaScript</strong>. The game generates 6
                random colors, shows you one of those chosen randomly on RGB
                format, and the player tries to guess which of those colors is
                the right one.
            </p>
            <p>
                This application helped me understand better the interaction of
                HTML, CSS and JavaScript. Using JavaScript to work with HTML
                elements and styling them, getting input from the user and
                changing the page.
            </p>
            <span>
                <a
                    href="https://kind-hoover-91cc27.netlify.com/"
                    target="_blank"
                >
                    Try Color Game
                </a>
            </span>
        </>
    );
    let PortfolioPageText = (
        <>
            <h2>Portfolio Page</h2>
            <p>
                <strong>2019-08: </strong>
                The current portfolio page was built using{" "}
                <strong>React and Gatsby</strong> for the Frontend. Before this
                one, I have build the{" "}
                <strong>old page using HTML CSS and Javascript only</strong>,
                with the help of Bootstrap for styling.
            </p>
            <p>
                Even though it worked well, by recreating this page using React
                and Gatsby the page got a much better user experience. The
                internal links work much faster, and feels much better as you do
                not see new reloads while navigating through them.
            </p>
            <span>
                <a href="https://arthurportfolio.netlify.com" target="_blank">
                    Test the old page
                </a>
            </span>
        </>
    );

    switch (props.projectTitle) {
        case "ExpensesManager":
            config = {
                fileName: "expensesManager2.PNG",
                alt: "Expenses Manager Screenshot",
                projectText: ExpensesManagerText,
            };
            break;
        case "PyCoin":
            config = {
                fileName: "pyCoin1.JPG",
                alt: "PyCoin Screenshot",
                projectText: PyCoinText,
            };
            break;
        case "MemeShare":
            config = {
                fileName: "MemeShare1.PNG",
                alt: "Meme Share Screenshot",
                projectText: MemeShareText,
            };
            break;
        case "BurgerBuilder":
            config = {
                fileName: "burgerBuilder1.PNG",
                alt: "Burger Builder Screenshot",
                projectText: BurgerBuilderText,
            };
            break;
        case "YelpCamp":
            config = {
                fileName: "yelpCamp2.PNG",
                alt: "Yelp Camp Screenshot",
                projectText: YelpCampText,
            };
            break;
        case "ColorGame":
            config = {
                fileName: "colorGame1.PNG",
                alt: "Color Game Screenshot",
                projectText: ColorGameText,
            };
            break;
        case "PortfolioPage":
            config = {
                fileName: "portfolioHTML1.PNG",
                alt: "Portfolio Page HTML version Screenshot",
                projectText: PortfolioPageText,
            };
            break;
        default:
            config = {
                fileName: "profilePhoto2.png",
                alt: "Profile Photo",
                projectText: "Error!",
            };
    }
    return (
        <div className={classes.ProjectSection}>
            <div className={classes.ProjectImage}>
                <Image
                    originPage="project"
                    fileName={config.fileName}
                    alt={config.alt}
                />
            </div>
            <div className={classes.ProjectText}>{config.projectText}</div>
        </div>
    );
};

export default Project;
