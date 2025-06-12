import { EmailTemplate } from "@/shared/enums/email-template";

export interface IEmailTemplateBuilder {
  build(template: EmailTemplate, data: any): Promise<string>;
}

export const IEmailTemplateBuilder = Symbol("IEmailTemplateBuilder");
