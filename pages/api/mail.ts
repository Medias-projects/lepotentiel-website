import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "mechacktambwe@gmail.com",
    subject: `${subject}`,
    text: message,
    html: `<div> 
        <h3>Message de  ${name}</h3>
        <p>Email : ${email}</p>
        <p>${message}</p>
      </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
