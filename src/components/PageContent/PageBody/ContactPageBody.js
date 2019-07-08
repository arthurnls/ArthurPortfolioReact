import React from "react";

import classes from "./ContactPageBody.module.css";

const ContactPageBody = () => {
    return (
        <div className={classes.container}>
            {/* The data-netlify field is to use netlify form handling, and honeypot is to secure without using captcha */}
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* This hidden input is needed for netlify forms to work */}
                <input type="hidden" name="form-name" value="contact" />
                <p className={classes.openingMessage}>
                    Please, send your message bellow
                </p>

                {/* TESTING STUFF */}
                <div className={classes.inputArea}>
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        autoFocus
                        required
                    />
                </div>

                <div className={classes.inputArea}>
                    <label htmlFor="email">Email address *</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@gmail.com"
                        required
                    />
                </div>

                <div className={classes.messageArea}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="10"
                        placeholder="Write the message here"
                        required
                    ></textarea>
                </div>

                <div className={classes.buttonArea}>
                    <button type="submit">Submit</button>
                </div>

                {/* END TESTING STUFF */}
            </form>
        </div>
    );
};

export default ContactPageBody;
