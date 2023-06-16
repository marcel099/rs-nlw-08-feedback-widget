import nodemailer, { Transporter } from 'nodemailer';
import process from 'process';

import { IEmailAdapter, SendEmailDTO } from "../IEmailAdapter";

export class MailtrapEmailAdapter implements IEmailAdapter {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASSWORD,
      }
    });
  }

  private transport: Transporter;

  private to = `Desconhecido <${process.env.CUSTOMER_EMAIL_ADRESS}>`

  async sendEmail({ body, subject }: SendEmailDTO) {
    await this.transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: this.to,
      subject,
      html: body,
    });
  };
}
