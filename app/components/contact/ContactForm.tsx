import * as sgMail from '@sendgrid/mail';
import { useState } from 'react';

export default function ContactForm(){

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleFormInputChange = (e:any) =>{
        const value = e.target.value;
        setFormState({
            ...formState,
            [e.target.name]:value
        })
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const handleFormSubmit = (e:any) => {
        e.preventDefault();
        sendEmail(formState.email, formState.name, formState.message)
    }

    const sendEmail = (from:string, name:string, text: string) => {
        const to = process.env.SENDGRID_TO_EMAIL;
        const subject = `HOFFMANN STUDIO Contact Form Submission from ${from}`;
        const msg:sgMail.MailDataRequired = {
            to,
            from,
            subject,
            text,
        };
        sgMail.send(msg);
    }

    return (
        
        <form onSubmit={handleFormSubmit} className="form contact-form">
            <h2>{`Let's talk about what's next`}</h2>
            <fieldset className="fieldset__two-column">
                <span>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleFormInputChange} name="name" type="text"></input>
                </span>
                <span>
                    <label htmlFor="name">Email</label>
                    <input onChange={handleFormInputChange} name="email" type="email"></input>
                </span>
            </fieldset>
            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea onChange={handleFormInputChange} name="message"></textarea>
            </fieldset>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path d="M0 4v13h9v-1H1V5h18v7.672l1 1V4H0zm14 2v5h4V6h-4zm1 1h2v3h-2V7zM3 11v1h8v-1H3zm0 2v1h6v-1H3zm12 0 3 3h-7v1h7l-3 3h1.5l3.5-3.5-3.5-3.5H15z" /></svg>
                <span>SEND</span>
            </button>
        </form>
    )
}