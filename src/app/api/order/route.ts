import { NextRequest, NextResponse } from "next/server";

interface OrderPayload {
  name?: string;
  phone?: string;
  email?: string;
  occasion?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  let body: OrderPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, occasion, message, email } = body;

  if (!name?.trim() || !phone?.trim() || !occasion?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, occasion and message are required." },
      { status: 400 }
    );
  }

  console.log("New Becca's Luxe order request:", {
    name,
    phone,
    email,
    occasion,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
