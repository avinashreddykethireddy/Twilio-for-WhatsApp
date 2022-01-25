const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const PORT = process.env.PORT;
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;  // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);
const { MessagingResponse } = require('twilio').twiml;

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

// app.post('/sendMessage', async (req, res) => {
//     // console.log(req.body); 
//     let message = "Hello Avinash !! Received your message";
//     try {
//         await client.messages.create({
//             from: `whatsapp:+14155238886`,
//             to: `whatsapp:+XXXXXXXXXX`, // enter your whatsapp number which is connected with sandbox
//             body: message
//         });
//     } catch (error) {
//         console.log(`error at sendingMessage: ${error}`);
//     }
//     res.send("OK DONE");
// });

app.get('/sendMedia', async (req,res) => {

    try{
        await client.messages.create({
        mediaUrl: ['https://i.pinimg.com/236x/14/fc/03/14fc030a45875ea3021063e18d433ea5--crayon-shin-chan-school-today.jpg'],
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+91XXXXXXXXXX'   // enter your whatsapp number which is connected with sandbox
        })
        .then(message => console.log(message));  
    }
    catch (error) {
        console.log(`error at sendingMedia: ${error}`);
    }
    res.send("OK DONE");
});

app.post('/receiveMedia', async (req, res) => {
    const { body } = req;
    console.log(body);
    let message;
    if (body.NumMedia > 0) {
      message = new MessagingResponse().message("Thanks Received Item !");
    } else {
      message = new MessagingResponse().message('Got an text message!!');
    }
    // console.log(message);

    res.set('Content-Type', 'text/xml');
    res.send(message.toString()).status(200);
});

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});