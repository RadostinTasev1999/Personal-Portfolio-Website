import FormData from "form-data"; // form-data v4.0.1
import Mailgun from 'mailgun.js';
import 'dotenv/config';



export async function POST(request){

    

    const {
        name,
        email,
        subject,
        message
    } = await request.json();

    const data = {
        from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
        to: ['Radostin Tasev <radostintasev22@yahoo.com>'],
        subject: 'New message from portfolio contact form',
        text: `
        Hello Radostin Tasev. You have received a new message from a user, regarding your
        Portfolio Project.

            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}

        Best Regards!
        Support Team
        `
    };


    // Instantiate the Mailgun class
         const mailgun = new Mailgun(FormData);
        
    // Create the client instance using the client method
        const mg = mailgun.client({
            username: 'api',
            key: process.env.MAILGUN_API_KEY,
            
    });

   try {

        await mg.messages.create(process.env.MAILGUN_DOMAIN, data);

    return Response.json({message: 'Data sucessfully sent'});


    } catch (error) {


        return Response.json(
            {
                message: 'Error sending data',
                error: error instanceof Error ? error.message : String(error)
            },
            {
                status: 500
            }
        );
   }

}