import nodemailer from 'nodemailer'


export async function POST(req, res) {

  if (req.method === "POST") {
    const body = await req.json();
    try {
    

      const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'gmail' or another email service
        auth: {
          user: process.env.CONTACT_EMAIL, // my email address
          pass: process.env.CONTACT_EMAIL_PASSWORD // my email app password(email account -> app password -> your app password-> create new or (contactform))
        },
      });
      // Define the email options
      const mailOptions = {
        from: process.env.CONTACT_EMAIL,
        to: process.env.CONTACT_EMAIL, // my mail or a different recipient if needed
        subject: 'Message from Best Packers and Movers',
        html: `
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Field</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Details</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Mobile</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.phone}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Mobile</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.subject}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Message</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.message}</td>
          </tr>
        </table>
      `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ status: 200, message: 'Message sent successfully!' }), {
        status: 200,
        // headers: { 'Content-Type': 'application/json' },
      });
    }
    catch (error) {
      console.log('Error sending email:', error);
      // Respond with an error message
      return new Response(JSON.stringify({ status: 500, error: 'Failed to send email' }), {
        status: 500,
        // headers: { 'Content-Type': 'application/json' },
      });

    }

  }

}