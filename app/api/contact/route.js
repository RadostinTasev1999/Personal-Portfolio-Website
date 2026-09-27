import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun-js";

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY,
        url: process.env.MAILGUN_DOMAIN
    });

export async function POST(request){

    /*
        {
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message
        }
    */
   try {
    
    const body = await request.json();

    const {
        name,
        email,
        subject,
        message
    } = body;

    // Validate data
    if (!name || !email || !subject || !message) {
        
        return Response.json(
            {
                error: 'All fields are required' ,
            },
            {
                status: 400 
            }
            
        );
    }

    await mg.messages.create("sandbox5e079c73cfd24065ab4e22de44e9ebb1.mailgun.org", {
      from: "Mailgun Sandbox <postmaster@sandbox5e079c73cfd24065ab4e22de44e9ebb1.mailgun.org>",
      to: ["Radostin Tasev <radostin.tasev22@gmail.com>"],
      subject: "Hello Radostin Tasev",
      text: "Congratulations Radostin Tasev, you just sent an email with Mailgun! You are truly awesome!",
    });

    return Response.json(
        {
            message: 'Email successfully sent'
        },
        {
            status: 200,
        }
);


    } catch (error) {

        return Response.json(
            {
                error: 'Unable to send message.'
            },
            {
                status: 500
            }
    );

   }

}



/*
     try {
        const data = await mg.messages.create(process.env.MAILGUN_DOMAIN,{
            from: `Mailgun Sandbox postmaster@${process.env.MAILGUN_DOMAIN}`,
            to: ["Radostin Tasev <radostin.tasev22@gmail.com>"],
            subject: 'Hello Radostin Tasev',
            text: "Congratulations Radostin Tasev, you just sent an email with Mailgun! You are truly awesome!"
        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
*/