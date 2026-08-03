import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  let body: { email?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  console.log("New Becca's Luxe newsletter signup:", {
    email,
    receivedAt: new Date().toISOString(),
  });

  await sendMail({
    subject: "New Newsletter Signup",
    text: `New newsletter signup: ${email}`,
    replyTo: email,
  });

  return NextResponse.json({ success: true });
}
