import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message, captchaToken } = await request.json();

     // ✅ Verify reCAPTCHA v3
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    }
  );

  const verifyData = await verifyRes.json();

  console.log("reCAPTCHA result:", verifyData);

  // ✅ v3 Score Check (IMPORTANT)
  if (!verifyData.success || verifyData.score < 0.5) {
    return NextResponse.json({
      success: false,
      message: "Spam detected",
    });
  }


  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Send email to Dr. Roger Härtl's office
    await transporter.sendMail({
     from: '"Website Contact Form hartlspine@med.cornell.edu" <hartlspine@med.cornell.edu>',
      to: 'hartlspine@med.cornell.edu', // Dr. Härtl's email or assistant's email
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send a confirmation email back to the user
    await transporter.sendMail({
      from: '"Dr. Roger Härtl’s Office hartlspine@med.cornell.edu" <hartlspine@med.cornell.edu>',
      to: email,   // Dr. Härtl's office email
      replyTo: 'hartlspine@med.cornell.edu',
      subject: 'Thank you for contacting Dr. Roger Härtl',
      text: `Dear ${name},\n\nThank you for reaching out to the office of Dr. Roger Härtl. Your message has been received, and a member of our team will review your inquiry and respond as soon as possible.\n\nIf this is an urgent matter, please contact our office directly at (212) 746-2152.\n\nBest regards,\nDr. Roger Härtl’s Office\nOch Spine at NewYork-Presbyterian\nWeill Cornell Medicine Center for Comprehensive Spine Care`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to the office of <strong>Dr. Roger Härtl</strong>. Your message has been received, and a member of our team will review your inquiry and respond as soon as possible.</p>
        <p>If this is an urgent matter, please contact our office directly at <strong>(212) 746-2152</strong>.</p>
        <p>Best regards,<br />
        Dr. Roger Härtl’s Office<br />
        Och Spine at NewYork-Presbyterian<br />
        Weill Cornell Medicine Center for Comprehensive Spine Care</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your message has been sent. You will receive a confirmation shortly.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'There was an error processing your request. Please try again later.' });
  }
}
