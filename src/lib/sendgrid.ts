import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

export async function sendAuthMagicLinkEmail(
  email: string,
  url: string,
  token: string
) {
  const msg = {
    to: email, // Change to your recipient
    from: "admin@supareel.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: `and easy to do anywhere, ${url} with Node.js ${token}`,
    html: `<strong>and easy to do anywhere, ${url} with Node.js ${token}</strong>`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
