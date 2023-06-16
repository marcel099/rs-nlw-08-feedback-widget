import { container } from "tsyringe";

import { IEmailAdapter } from "../../adapters/IEmailAdapter";
import { MailtrapEmailAdapter } from "../../adapters/implementations/MailtrapEmailAdapter";
import { GmailEmailAdapter } from "../../adapters/implementations/GmailEmailAdapter";

const EmailAdapter = {
  mailtrap: container.resolve(MailtrapEmailAdapter),
  gmail: container.resolve(GmailEmailAdapter),
};

const chosenEmailAdapter =
  process.env.EMAIL_PROVIDER as 'mailtrap' | 'gmail';

container.registerInstance<IEmailAdapter>(
  "EmailAdapter",
  EmailAdapter[chosenEmailAdapter],
)