import { EmailTemplate } from "@/components/email-template";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Website Jeremias Arriondo <onboarding@resend.dev>",
      to: ["jeremiasarriondo98@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      react: EmailTemplate({ name, email, message }) as ReactNode,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
