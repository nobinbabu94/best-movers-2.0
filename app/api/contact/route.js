import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();

  const senderEmail = process.env.CONTACT_EMAIL;
  const senderPassword = process.env.CONTACT_EMAIL_PASSWORD;

  if (!senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({ status: 500, error: 'Email transport not configured. Set CONTACT_EMAIL and CONTACT_EMAIL_PASSWORD.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: senderEmail,
      to: senderEmail,
      replyTo: body?.email,
      subject: 'Message from Best Packers and Movers',
      text: `Name: ${body?.name}\nEmail: ${body?.email}\nPhone: ${body?.phone}\nSubject: ${body?.subject}\nMessage: ${body?.message}`,
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
            <td style="border: 1px solid #ddd; padding: 8px;">Subject</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.subject}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Message</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${body?.message}</td>
          </tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ status: 200, message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error sending email:', error);
    const message = error?.message || 'Failed to send email';
    return new Response(JSON.stringify({ status: 500, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
