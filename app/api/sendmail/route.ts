import * as sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
      from: string;
      name: string;
      text: string;
    };
  }
  type ResponseData = {
    message: string
  }

export async function POST(req: ExtendedNextApiRequest, res: NextResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const from = req.body.from;
    const text = req.body.text;
    const name = req.body.name;
    const to = process.env.SENDGRID_TO_EMAIL;
    const subject = `HOFFMANN STUDIO Contact Form Submission from ${from}`;
    
    const msg:sgMail.MailDataRequired = {
        to,
        from,
        subject,
        text,
    };
    //sgMail.send(msg);

  
  try {
    await sgMail.send(msg);
    return NextResponse.json({
        status: 200,
        message: "Email Sent Successfully"
    });
  } catch (error) {
    return NextResponse.json({
        status: 500,
        message: "Email Error",
        error: error
    });
  }
}