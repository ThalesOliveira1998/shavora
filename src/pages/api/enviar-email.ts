import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
    const { nome, email, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shavoraadm@gmail.com",
        pass: "uury qtqw vqai zxjx",
      },
    });

    const mailOptions = {
      from: email,
      to: "shavoraadm@gmail.com",
      subject: `Nova mensagem de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ message: "Erro ao enviar e-mail" });
  }
}
