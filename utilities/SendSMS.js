const accountSid = 'ACbe288a71f0f9406d359f02c0c3c5e13f';
const authToken = '94c93c7302e1b599fe941112510f3a4d';

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

export default async function sendSMS(body, to) {
  client.messages.create({
      body,
      to,
      from: '+12345678901'
  })
  .then((message) => console.log(message.sid));
}
