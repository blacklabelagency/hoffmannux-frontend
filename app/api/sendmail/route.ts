import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';


  type ResponseData = {
    message: string
  }

export async function POST(req: Request) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const data = await req.json();
    const token = data.token;
    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }
    const userIP = headers().get('x-forwarded-for')?.split(',')[0] || 'unknown';

    //post token to here
    //https://www.google.com/recaptcha/api/siteverify
    // secret
    // response: (user token)
    // remoteip: ip address (optional);
    let captchaData = {
      secret: process.env.GOOGLE_RECAPTCHA,
      response: token,
      remoteip: userIP
    }

    const captchaSend = await fetch(`https://www.google.com/recaptcha/api/siteverify`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY as string, response: token }),
    });

    const captchaResponse = await captchaSend.json();
    
    if(captchaResponse.success == false){
      return NextResponse.json(
        {message: "CAPTCHA FAILED"},
        {status: 400}
      );
    }

    const from = process.env.SENDGRID_TO_EMAIL as string;
    const text = data.text + " email: " + data.from;
    const name = data.name;
    const to = process.env.SENDGRID_TO_EMAIL;
    const subject = `HOFFMANN STUDIO Contact Form Submission from ${name}`;

    const msg:sgMail.MailDataRequired = {
        to,
        from,
        subject,
        text,
        replyTo: data.from
    };


    try {
      await sgMail.send(msg);
      return NextResponse.json(
        {message: "Email Sent Successfully"},
        {status: 200}
      );
    } catch(error){
        return NextResponse.json(
            {message: "Error",error: error},
            {status: 500}
        );
    }
}