import nodemailer from 'nodemailer';
import { Event } from '@prisma/client';

class EmailUtils {
    private static async sendEmail(listTo: string[], subject: string, text: string, html = '') {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `${process.env.MAIL_APP} <${process.env.MAIL_USERNAME}>`,
            to: listTo.join(', '),
            subject: subject,
            text: text,
            html: html
        });
    }

    public static async sendActivationEmail(listTo: string | string[], token: string) {
        EmailUtils.sendEmail(
            Array.isArray(listTo) ? listTo : [listTo],
            `[${process.env.MAIL_APP}] Member account activation`,
            `This email was sent in order to activate your member account, 
            please use the following link to activate your account http://localhost:5173/activate?token=${token}`
        )
    }

    public static async sendForgotPasswordEmail(listTo: string | string[], token: string) {
        EmailUtils.sendEmail(
            Array.isArray(listTo) ? listTo : [listTo],
            `[${process.env.MAIL_APP}] Member account password reset`,
            `This email was sent in order to reset your password, 
            please use the following link to reset your password http://localhost:5173/reset-password?token=${token}`
        )
    }

    // public static async sendEventReminder(listTo: string | string[], event: Event) {
    //     EmailUtils.sendEmail(
    //         Array.isArray(listTo) ? listTo : [listTo],
    //         `[${process.env.MAIL_APP}] Event reminder`,
    //         `This email was sent in order to remind you about the upcoming within next hour event: ${event.title}`
    //     )
    // }
}

export default EmailUtils;