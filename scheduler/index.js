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
    { hour:5, minute: 18 },  // 7am
    { hour: 5, minute: 19 }, // 12pm
    { hour: 5, minute: 20 }, // 5pm
    { hour: 5, minute: 21 }, // 9pm
  ];

scheduleData.forEach((time) => {
  schedule.scheduleJob({ hour: time.hour, minute: time.minute }, async () => {
    try {
        if(time.hour===5 && time.minute==18){
            Morning.sendNotifications(time);
        }
        else if(time.hour===5 && time.minute==19){
            Afternoon.sendNotifications(time);
        }else if(time.hour===5 && time.minute==20){
            Evening.sendNotifications(time)
        }else if(time.hour===5 && time.minute==21){
            Night.sendNotifications(time);
        }
    } catch (err) {
      console.error(`Error sending message at ${time.hour}:${time.minute}:`, err);
    }
  });
});