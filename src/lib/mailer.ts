import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return transporter;
}

export async function sendMail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const client = getTransporter();

  if (!client) {
    console.warn("EMAIL_USER / EMAIL_PASSWORD not set — skipping email notification.");
    return;
  }

  const from = process.env.EMAIL_USER as string;

  try {
    await client.sendMail({
      from: `"Becca's Luxe Website" <${from}>`,
      to: from,
      replyTo,
      subject,
      text,
    });
  } catch (err) {
    console.error("Failed to send email notification:", err);
  }
}
