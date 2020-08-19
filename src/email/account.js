const sgMail = require('@sendgrid/mail')
const { text } = require('express')

sgMail.setApiKey(process.env.SENDG_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'firosdev@gmail.com',
        subject: 'Welcome to task app',
        text: `Welcome to task app ${name} , Let start to use!`
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'firosdev@gmail.com',
        subject: `Hi ${name},`,
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}