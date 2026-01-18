import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      CONTACT_EMAIL,
      TELEGRAM_BOT_TOKEN,
      TELEGRAM_CHAT_ID,
    } = process.env;

    const notificationLines = [
      "From: luckylink.click",
      "New contact form submission",
      `Name: ${validatedData.name}`,
      `Email: ${validatedData.email}`,
      `Phone: ${validatedData.phone}`,
      `Company: ${validatedData.company || "N/A"}`,
      "",
      "Message:",
      validatedData.message,
    ];

    const errors: string[] = [];
    let sent = false;

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: notificationLines.join("\n"),
          }),
        }
      );

      if (!telegramResponse.ok) {
        errors.push("telegram");
      } else {
        sent = true;
      }
    }

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const toEmail = CONTACT_EMAIL || SMTP_USER;
      const fromEmail = SMTP_FROM || `Lucky Link LLC <${SMTP_USER}>`;

      await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: validatedData.email,
        subject: `New Contact Form Submission from ${validatedData.name}`,
        text: notificationLines.join("\n"),
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          ${
            validatedData.company
              ? `<p><strong>Company:</strong> ${validatedData.company}</p>`
              : ""
          }
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
      });

      sent = true;
    }

    if (!sent) {
      return NextResponse.json(
        {
          error:
            "No notification channel configured. Set TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID or SMTP credentials.",
          details: errors,
        },
        { status: 500 }
      );
    }

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
