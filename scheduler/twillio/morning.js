const twilio = require('twilio');
require('dotenv').config();

// Twilio credentials
const accountSid = process.env.ACCOUNT_SSID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);


const sendNotifications=async(time)=>{
    try {
        // Twilio function call to send notification
        const message = await client.messages.create({
            body: 'Good Morning, It is time for your morning medicines',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919368875433'
        });
        console.log(`Message sent at ${time.hour}:${time.minute}`);
      } catch (err) {
        console.error(`Error sending message at ${time.hour}:${time.minute}:`, err);
      }
}
module.exports={
    sendNotifications,
}