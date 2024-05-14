import { NextRequest, NextResponse } from "next/server";
import mail from "nodemailer";

const transport = mail.createTransport({
  service: "gmail",
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
  const quantity = formData.get("quantity") as string;

  if (!name || !email || !quantity) {
    return NextResponse.json({ message: "Invalid order" }, { status: 500 });
  }

  const orderId = Date.now();

  const subject = `ORDER [${orderId}] - Phillipe & Charlotte - ${quantity}`;

  const text = `
    En beställning på ${quantity} exemplar har lagts på Phillipe & Charlotte.
    
    Kontaktuppgifter till köpare:
    Namn: ${name}
    Email: ${email}
    Telefon: ${phone}
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
