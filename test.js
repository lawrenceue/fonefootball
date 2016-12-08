//twilio

const a = 10;
console.log(a);

// Twilio Credentials
 const creds = require('./credentials.js');
 const auth = creds['authToken'];
 const sid  = creds['accountSid'];
 const fromnum = creds['from'];
 const tonum   = creds['to'];

//require the Twilio module and create a REST client
 var client = require('twilio')(sid, auth);
 client.messages.create({
   to: tonum,
     from: fromnum,
       body: "it's still almost thursday the 8th",
         }, function(err, message) {
           console.log(message.sid);
           });
