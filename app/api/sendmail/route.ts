import * as sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';


  type ResponseData = {
    message: string
  }

export async function POST(req: NextRequest, res: NextResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const data = await req.json();
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
    };
    //sgMail.send(msg);

    try {
    sgMail.send(msg).then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
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