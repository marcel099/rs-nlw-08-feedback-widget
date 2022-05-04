import express from 'express';
import nodemailer from 'nodemailer';
import process from 'process';

import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASSWORD,
  }
});

app.post('/feedback', async (req, res) => {
  const { comment, screenshot, type } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Marcelo Lupatini <mar.lupatini@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n')
  });

  return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
  console.log('HTTP server running!');
});
