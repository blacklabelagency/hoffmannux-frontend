import * as sgMail from '@sendgrid/mail';

export default function ContactForm(){
    return (
        
        <form className="form contact-form">
            <h2>{`Let's talk about what's next`}</h2>
            <fieldset className="fieldset__two-column">
                <span>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text"></input>
                </span>
                <span>
                    <label htmlFor="name">Email</label>
                    <input name="email" type="email"></input>
                </span>
            </fieldset>
            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea name="message"></textarea>
            </fieldset>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path d="M0 4v13h9v-1H1V5h18v7.672l1 1V4H0zm14 2v5h4V6h-4zm1 1h2v3h-2V7zM3 11v1h8v-1H3zm0 2v1h6v-1H3zm12 0 3 3h-7v1h7l-3 3h1.5l3.5-3.5-3.5-3.5H15z" /></svg>
                <span>SEND</span>
            </button>
        </form>
    )
}