// import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailAccount = process.env.EMAIL_ACCOUNT || "";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { subject } = body;

      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [emailAccount],
        subject: subject,
        react: EmailTemplate(body),
        text: "",
      });
      if (error) {
        return NextResponse.json(
          { error: "Error al enviar el correo" },
          { status: 400 }
        );
      }
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }
  }
}
