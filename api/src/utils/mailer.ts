import nodemailer from "nodemailer";
import aws from "aws-sdk";
require("dotenv").config();

export default () => {
  return new Promise((resolve, reject) => {
    aws.config.update({
      accessKeyId: process.env.SES_ACCESS_KEY,
      secretAccessKey: process.env.SES_SECRET_KEY,
      region: process.env.SES_REGION,
    });

    const transporter = nodemailer.createTransport({
      SES: new aws.SES(),
    });

    transporter.sendMail(
      {
        from: "kalaakki@gmail.com",
        to: "kalaakki@gmail.com",
        subject: "Test",
        html: "<h1>Test</h1>",
      },
      (err, info) => {
        if (err) reject(err);
        else resolve(info);
      }
    );
  });
};
