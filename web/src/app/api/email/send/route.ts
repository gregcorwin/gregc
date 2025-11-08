import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { WelcomeEmail } from "@/emails/WelcomeEmail";

export const runtime = "nodejs";

type SendBody = {
  to: string;
  subject?: string;
  previewText?: string;
  name?: string;
  replyTo?: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
  }

  const body = (await req.json()) as SendBody;
  if (!body?.to) {
    return NextResponse.json({ error: "Missing 'to'" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = body.subject ?? "Hello from QuickRoute";

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "noreply@mail.gregc.io",
      to: [body.to],
      subject,
      headers: {
        ...(body.replyTo ? { "Reply-To": body.replyTo } : {}),
        "List-Unsubscribe": "<mailto:unsubscribe@" + (process.env.RESEND_FROM?.split("@")[1] || "mail.gregc.io") + ">, <https://email.gregc.io/unsubscribe>",
      },
      react: WelcomeEmail({ name: body.name ?? "there", previewText: body.previewText }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}


