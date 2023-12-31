const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
	if (req?.body) {
		const { name, email, message } = req.body

		function newLine(str) {
			return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
		}

		const emailBody = `<strong>${name}</strong> sent you this message:
		<br /><br />
		${newLine(message)}
		<br /><br />
		--- <br />
		Get back to them at <a href="mailto:${email}">${email}</a>`

		const msg = {
			from: 'web@sargam.online',
			to: 'sargamkapoor03@gmail.com',
			subject: `${name} sent you a message.`,
			text: emailBody,
			html: emailBody
		}

		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent')
				return res.send({ body: req.body, message: 'Success', error: false })
			})
			.catch((error) => {
				console.error(error)
				return res.send({ body: req.body, message: error, error: true })
			})
	} else {
		return res.send({ message: 'Only POST stuff here.' })
	}
}
