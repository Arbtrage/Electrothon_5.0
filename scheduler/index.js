const schedule = require('node-schedule');
const Morning=require('./twillio/morning');
const Afternoon=require('./twillio/afternoon');
const Evening=require('./twillio/evening');
const Night=require('./twillio/night');

// const scheduleData = [
//   { hour: 7, minute: 0 },  // 7am
//   { hour: 12, minute: 0 }, // 12pm
//   { hour: 17, minute: 0 }, // 5pm
//   { hour: 21, minute: 0 }, // 9pm
// ];
const scheduleData = [
    { hour:7, minute: 0 },  // 7am
    { hour: 11, minute: 32 }, // 12pm
    { hour: 17, minute: 0 }, // 5pm
    { hour: 21, minute: 0 }, // 9pm
  ];

scheduleData.forEach((time) => {
  schedule.scheduleJob({ hour: time.hour, minute: time.minute }, async () => {
    try {
        if(time.hour===7){
            Morning.sendNotifications(time);
        }
        else if(time.hour===11&& time.minute==32){
            Afternoon.sendNotifications(time);
        }else if(time.hour===17){
            Evening.sendNotifications(time)
        }else if(time.hour===21){
            Night.sendNotifications(time);
        }
    } catch (err) {
      console.error(`Error sending message at ${time.hour}:${time.minute}:`, err);
    }
  });
});