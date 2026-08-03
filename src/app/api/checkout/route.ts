import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";
import { sendMail } from "@/lib/mailer";
import { formatPrice } from "@/lib/currency";

interface CheckoutItem {
  id: string;
  quantity: number;
}

interface CheckoutPayload {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  items?: CheckoutItem[];
}

export async function POST(req: NextRequest) {
  let body: CheckoutPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, address, items, email, notes } = body;

  if (!name?.trim() || !phone?.trim() || !address?.trim()) {
    return NextResponse.json(
      { error: "Name, phone and delivery address are required." },
      { status: 400 }
    );
  }

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const orderItems = items
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product || item.quantity <= 0) return null;
      return {
        id: product.id,
        name: product.name,
        quantity: item.quantity,
        price: product.price,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (orderItems.length === 0) {
    return NextResponse.json({ error: "No valid items in cart." }, { status: 400 });
  }

  const total = orderItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const orderId = `BL-${Date.now()}`;

  console.log("New Becca's Luxe storefront checkout:", {
    name,
    phone,
    email,
    address,
    notes,
    items: orderItems,
    total,
    receivedAt: new Date().toISOString(),
  });

  await sendMail({
    subject: `New Checkout Order ${orderId}`,
    text: [
      `Order ID: ${orderId}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Delivery Address: ${address}`,
      notes ? `Notes: ${notes}` : null,
      "",
      "Items:",
      ...orderItems.map(
        (item) => `- ${item.name} x${item.quantity} — ${formatPrice(item.lineTotal)}`
      ),
      "",
      `Total: ${formatPrice(total)}`,
    ]
      .filter(Boolean)
      .join("\n"),
    replyTo: email,
  });

  return NextResponse.json({ success: true, orderId, total });
}
