const sgMail = require('sendgrid')(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'wlodzimierz_110@interia.pl',
        subject: 'Thanks for joining in',
        text: `Hello ${name}`
    })
}

const cancelationEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'wlodzimierz_110@interia.pl',
        subject: 'Why You leave us...',
        text: `Goodbye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelationEmail
}
