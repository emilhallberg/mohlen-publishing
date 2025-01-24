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
  console.info("Placing order");

  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const topic = formData.get("topic") as string;
  const comment = formData.get("comment") as string;

  if (!name || !email || !topic) {
    return NextResponse.json({ message: "Invalid message" }, { status: 500 });
  }

  const messageId = Date.now();

  const subject = `CONTACT [${messageId}] - ${topic.toUpperCase()}`;

  const text = `
    Kontaktuppgifter:
    Namn: ${name}
    Email: ${email}
    Telefon: ${phone}
    
    Meddelande: ${comment}
  `;

  const result = await transport.sendMail({
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject,
    text,
  });

  if (result.rejected.length) {
    console.info("Order not placed");
    return NextResponse.json({ message: "Mail not sent" }, { status: 500 });
  }

  console.info("Order placed");
  return NextResponse.json({ message: "Mail sent" }, { status: 200 });
};
