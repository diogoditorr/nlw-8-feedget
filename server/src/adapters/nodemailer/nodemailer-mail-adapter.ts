import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adpter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a2bea0bfce156c",
        pass: "5c41e64fabd3df",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Diego Oliveira <diogoditorr@hotmail.com',
            subject,
            html: body,
        })
    }
}