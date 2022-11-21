const nodemailer = require('nodemailer');
const { emailConfig } = require('./../src/config/config')

module.exports = {
  sendMail: async (email, subject, text, html) => {
    await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: emailConfig.emailAccount,
        pass: emailConfig.emailPass,
      },
    });

    const info = await transporter.sendMail({
      from: emailConfig.emailAccount,
      to: email,
      subject: subject,
      text: text,
      html: html    //'<b>Hello dev</b>'
    });
    return(info);
  },
};
