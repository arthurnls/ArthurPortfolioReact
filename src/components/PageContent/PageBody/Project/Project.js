import React from "react";

import Image from "../../../UI/Image/image";
import classes from "./Project.module.css";

const Project = props => {
    let config = null;
    let BurgerBuilderText = (
        <>
            <h2>Burger Builder</h2>
            <p>
                Burger Builder is a web application I developed and deployed for
                practicing React. Developed using React, Redux, React Router.
                Features statefull and stateless components and containers,
                state management with Redux. Has user authentication and
                resource blocking for non-authorized users, forms and form
                validation. Handling http requests using axios.
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
                Yelp Camp is a web application I developed and deployed for
                practicing. Developed using HTML, CSS, JavaScript, Bootstrap 4,
                Git, MongoDB, Express and NodeJS. This project was initially
                developed during the Udemy course, and after finishing that, I
                started refactoring and adding new functionalities, such as
                using google maps API and searching.
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
                Color Game was a very simple application that I created to test
                and practice my skills on basic HTML, CSS and JavaScript. The
                game generates 6 random colors, shows you one of those chosen
                randomly on RGB format, and the player tries to guess which of
                those colors is the right one.
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
                The current portfolio page was built using React and Gatsby.
                Before this one, I have build the old page using HTML CSS and
                Javascript only, with the help of Bootstrap for styling.
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
                fileName: "profilePhoto.jpg",
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
