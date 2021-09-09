interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

interface IMailTo {
  to: string;
  from: string;
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface ISendEmail {
  sendEmail({ to, message }: IMessageDTO): void;
}

class EmailService implements ISendEmail {
  sendEmail({ to, message }: IMessageDTO): void {
    console.log("email sent to: " + to.to);
  }
}

export default EmailService;
