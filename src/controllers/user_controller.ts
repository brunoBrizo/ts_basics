import { Request, Response } from "express";
import EmailService from "../services/email_service";
import emailService from "../services/email_service";

export default {
  async index(req: Request, res: Response) {
    return res.send();
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail({
      to: {
        to: "bruno",
        from: "bruno",
      },
      message: {
        subject: "hola",
        body: "hola",
      },
    });
    return res.send();
  },
};
