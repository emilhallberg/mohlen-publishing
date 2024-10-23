import { NextRequest, NextResponse } from "next/server";
import mail from "nodemailer";

const transport = mail.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  logger: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const POST = async (request: NextRequest) => {
  console.info("Placing event");

  const formData = await request.formData();

  const event = formData.get("event") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const comment = formData.get("comment") as string;

  if (!name || !email) {
    return NextResponse.json({ message: "Invalid event" }, { status: 500 });
  }

  const eventId = Date.now();

  const subject = `EVENT [${eventId}] - ${event}`;

  const text = `
    En förbokning på har lagts på ${event}.
    
    Kontaktuppgifter till köpare:
    Namn: ${name}
    Email: ${email}
    Telefon: ${phone}
    
    Övriga önskemål: ${comment}
  `;

  const result = await transport.sendMail({
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject,
    text,
  });

  if (result.rejected.length) {
    console.info("Event not placed");
    return NextResponse.json({ message: "Mail not sent" }, { status: 500 });
  }

  console.info("Event placed");
  return NextResponse.json({ message: "Mail sent" }, { status: 200 });
};
