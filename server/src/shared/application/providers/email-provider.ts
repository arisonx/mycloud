export interface IEmailSenderService {
  send(to: string, subject: string, body: string, context?: Record<string, any>): Promise<void>;
}

export const IEmailSenderService = Symbol("IEmailSenderService");
