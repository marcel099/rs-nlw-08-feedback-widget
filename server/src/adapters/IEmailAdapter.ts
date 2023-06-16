export interface SendEmailDTO {
  subject: string;
  body: string;
}

export interface IEmailAdapter {
  sendEmail: (data: SendEmailDTO) => Promise<void>;
}