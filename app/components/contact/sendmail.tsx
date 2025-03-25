import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

  type ResponseData = {
    message: string
  }

export async function Sendmail({email, name, message}:{email:string, name:string, message:string}) {
    
    return NextResponse.json(
        {message: "Email Sent Successfully"},
        {status: 200}
    );

    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    
    const from = process.env.SENDGRID_TO_EMAIL as string;
    const text = message + " email: " + email;
    const sentname = name;
    const to = process.env.SENDGRID_TO_EMAIL;
    const subject = `HOFFMANN STUDIO Contact Form Submission from ${sentname}`;

    const msg:sgMail.MailDataRequired = {
        to,
        from,
        subject,
        text,
    };
    //sgMail.send(msg);
    console.log("XXXXX");
    console.log(process.env.SENDGRID_API_KEY);



    try {
    sgMail.send(msg).then((response) => {
        return NextResponse.json(
            {message: "Email Sent Successfully"},
            {status: 200}
        );
      })
      .catch((error) => {
        console.error(error);
        return NextResponse.json(
            {message: "Email Error",error: error},
            {status: 500}
        );
      });
    } catch(error){
        return NextResponse.json(
            {message: "Error",error: error},
            {status: 500}
        );
    }
}