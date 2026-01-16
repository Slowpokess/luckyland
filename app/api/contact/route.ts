import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Log the contact form submission (for development/testing)
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company || "N/A",
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending logic
    // Here are two common approaches:

    // Option 1: Using Resend (recommended for production)
    // Uncomment this when you have set up Resend
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Lucky Link LLC <noreply@luckylink.com>',
      to: [process.env.CONTACT_EMAIL || 'business@luckylink.com'],
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    // Option 2: Using SendGrid
    // Uncomment this when you have set up SendGrid
    /*
    import sgMail from '@sendgrid/mail';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    await sgMail.send({
      to: process.env.CONTACT_EMAIL || 'business@luckylink.com',
      from: 'noreply@luckylink.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Company: ${validatedData.company || 'N/A'}
        Message: ${validatedData.message}
      `,
    });
    */

    // For now, just log and return success
    // In production, you should implement one of the email options above

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 1-2 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
