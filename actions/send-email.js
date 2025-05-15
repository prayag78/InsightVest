// "use server";

// import { Resend } from "resend";

// export async function sendEmail({ to, subject, react }) {
//   const resend = new Resend(process.env.RESEND_API_KEY || "");

//   try {
//     const data = await resend.emails.send({
//       from: "Finance App <onboarding@resend.dev>",
//       to,
//       subject,
//       react,
//     });

//     return { success: true, data };
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return { success: false, error };
//   }
// }



// app/lib/sendEmail.ts or similar
"use server";

import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, react }) {
  // Dynamically import ReactDOMServer only when the function runs
  const ReactDOMServer = await import("react-dom/server");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const html = ReactDOMServer.renderToStaticMarkup(react);

    const info = await transporter.sendMail({
      from: `"Finance App" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return { success: true, data: info };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}


