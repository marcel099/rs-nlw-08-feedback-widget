import nodemailer, { Transporter } from 'nodemailer';
import process from 'process';

import { IEmailAdapter, SendEmailDTO } from "../IEmailAdapter";

export class GmailEmailAdapter implements IEmailAdapter {
  constructor() {
    this.transport = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  private transport: Transporter;

  private from = `Equipe Feedget <${process.env.EMAIL_ADRESS}>`;
  private to = process.env.CUSTOMER_EMAIL_ADRESS;

  async sendEmail({ body, subject }: SendEmailDTO) {
    await this.transport.sendMail({
      from: this.from,
      to: this.to,
      subject,
      html: body,
    });
  };
}
