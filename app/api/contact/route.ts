import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type InquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interestedIn?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const { name, phone, email, interestedIn, budget, message } = body;

    if (!name || !phone || !email || !interestedIn) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO || "aditigoyalprg21@gmail.com",
      subject: "New Property Inquiry from HBP Website",
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Interested In: ${interestedIn}
Budget: ${budget ?? "Not provided"}
Message: ${message ?? "Not provided"}
      `.trim(),
      html: `
        <h2>New Property Inquiry from HBP Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send email" },
      { status: 500 }
    );
  }
}
