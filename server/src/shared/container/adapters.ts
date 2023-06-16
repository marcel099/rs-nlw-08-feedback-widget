import { container } from "tsyringe";

import { IEmailAdapter } from "../../adapters/IEmailAdapter";
import { GmailEmailAdapter } from "../../adapters/implementations/GmailEmailAdapter";

container.registerSingleton<IEmailAdapter>(
  "EmailAdapter",
  GmailEmailAdapter
)