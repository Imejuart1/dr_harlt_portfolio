import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or you can use another email service like 'smtp.ethereal.email'
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,// Replace with your email password or an app-specific password if using Gmail
      },
    });

    try {
      // Send the email to the recipient (mikwuegbuenyi@gmail.com)
      await transporter.sendMail({
        from: email, // Sender's email address (user's email)
        to: 'mikwuegbuenyi@gmail.com', // Your email address
        subject: `New Message from ${name}`, // Subject of the email
        text: message, // Plain text body
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // HTML body
      });

      // Send a response email back to the user
      await transporter.sendMail({
        from: 'yourgmail@gmail.com', // Your email address
        to: email, // Sender's email address (user's email)
        subject: 'Thank you for contacting Dr. Roger Härtl',
        text: `Hello ${name},\n\nThank you for reaching out. We have received your message and will get back to you shortly.\n\nBest regards,\nDr. Roger Härtl's Office`,
      });

      // Return a success response
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
