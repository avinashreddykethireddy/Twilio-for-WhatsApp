# Twilio WhatsApp API 

# To install the required dependencies
* ```npm install ```

# To start the server
* ```node app.js```
* The server will be listen at http://localhost:3000

---

# [Setup Twilio for WhatsApp](https://www.twilio.com/docs/whatsapp/quickstart/node)

- Setup Twilio account and activate sandbox
- Now in Sandbox configuration 
    - paste the /receiveMedia post request URL 
    - You can't paste localhost URL, so use [ngrok](https://ngrok.com/) for using Public URLs for building webhook integrations. 
    - Once setup you can paste the public URL (from ngrok) in Sandbox configuration (at WHEN A MESSAGE COMES IN Box) for receiving messages

# Test API Endpoints
To Send message, call
```
POST Method /sendMessage or send Hi message to given whatsapp number
```
To send media, call
```
GET Method /sendMedia
```
To receive the message/media, call
```
POST Method /sendMedia or send any message/media file to given whatsapp number
```

This is for only testing purpose.But for production use you have to take request from Whatsapp Business Provider here [twilio](https://www.twilio.com/whatsapp/request-access) and build with your own whatsapp number.
