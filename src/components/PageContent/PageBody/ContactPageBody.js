import React from "react";

import classes from "./ContactPageBody.module.css";

const ContactPageBody = () => {
    return (
        <div className={classes.container}>
            <p className={classes.openingMessage}>
                If you want to talk with me, please feel free to send a message
                through{" "}
                <a
                    className={classes.textAnchor}
                    href="https://www.linkedin.com/in/arthur-saraiva/"
                >
                    Linkedin
                </a>
                .
            </p>
        </div>
    );
};

export default ContactPageBody;
