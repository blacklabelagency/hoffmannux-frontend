'use client'
import { useState } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";

export default function ContactForm(){

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [mailSent, setMailSent] = useState<boolean>(false);
    const [sendLoading, setSendLoading] = useState<boolean>(false);
    const [captchaError, setCaptchaError] = useState<boolean>(false);
    const { executeRecaptcha } = useReCaptcha();


    const handleFormInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name,value} = e.target;
        setFormState(prev=>({
            ...prev,
            [name]:value
        }));

        if(name in errors){
            setErrors(prev=>({
                ...prev,
                [name]: ''
            }))
        }
        
    }

    // Validate form
    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message:'' };
    
        // Validate all fields at once
        if (!formState.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
    
        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        // Set all errors at once
        setErrors(newErrors);
        return isValid;
    };
    

    const handleFormSubmit = async(e:any) => {
        e.preventDefault();
        const token = await executeRecaptcha("form_submit");
        if(validateForm()){
            sendEmail(formState.email, formState.name, formState.message, token);
        }
    }

    const sendEmail = async(from:string, name:string, text: string, token:string) => {
        setSendLoading(true);
        const emailData = {
            from: from,
            name: name,
            text: text,
            token: token
        };
        //const res = await Sendmail(emailData);
        const res = await fetch(`/api/sendmail`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
        });
        const emailResponse = await res.json();
        const status = res.status;
        setSendLoading(false);
        
        if(res.status == 200){
            setMailSent(true);
            setCaptchaError(false);
        }
        if(res.status == 400){
            setCaptchaError(true);
        }
        
        
    }

    return (
        mailSent===false ? (
        <form onSubmit={handleFormSubmit} className="form contact-form">
            
            <h2>{`Let's talk about what's next`}</h2>
            <fieldset className="fieldset__two-column">
                <span>
                    <span className="flex justify-between items-center block">
                        <label htmlFor="name"><span>*</span>Name</label>
                        {errors.name && <span className="form-error-message w-[50%] block text-right">required field</span>}
                    </span>
                    <input onChange={handleFormInputChange} name="name" type="text"></input>
                </span>
                <span>
                    <span className="flex justify-between items-center block">
                        <label htmlFor="name"><span>*</span>Email</label>
                        {errors.email && <span className="form-error-message w-[50%] block text-right">required field</span> }
                    </span>
                    <input onChange={handleFormInputChange} name="email" type="email"></input>
                </span>
            </fieldset>
            <fieldset>
                <span className="flex justify-between items-center block">
                <label htmlFor="message"><span>*</span>Message</label>
                    {errors.message && <span className="form-error-message w-[50%] block text-right">required field</span> }
                </span>
                <textarea onChange={handleFormInputChange} name="message"></textarea>
            </fieldset>
            <div className="flex items-center justify-end">
                {sendLoading && <span className="text-gray-500 text-xs py-2 px-4 mr-4">Sending...</span>}
                {captchaError && <span className="bg-red-600 text-white text-xs py-2 px-4 mr-4">INVALID CAPTCHA</span>}
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path d="M0 4v13h9v-1H1V5h18v7.672l1 1V4H0zm14 2v5h4V6h-4zm1 1h2v3h-2V7zM3 11v1h8v-1H3zm0 2v1h6v-1H3zm12 0 3 3h-7v1h7l-3 3h1.5l3.5-3.5-3.5-3.5H15z" /></svg>
                    <span>SEND</span>
                </button>
            </div>           
        </form>
        ) : (
            <div className="w-full px-6 py-6 mt-20 border border-blue border-2 contact-form__sent text-center">
                <h2>THANK YOU FOR REACHING OUT!</h2>
                <em>We will be in touch soon.</em>
            </div>
        )
    )
}