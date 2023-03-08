import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
// import { HeartRateSensor } from 'heart-rate';
// import * as fs from 'fs';

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
// const heartRateLabel = document.getElementByID("heartRateLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}
// if (HeartRateSensor) {
//   console.log("This device has a HeartRateSensor!");
//   const hrm = new HeartRateSensor();
//     hrm.addEventListener("reading", () => {
//       console.log(`Current heart rate: ${hrm.heartRate}`);
//       heartRateLabel.text = `${hrm.heartRate}`;
//     });
  
//   hrm.start();
// } else {
//   console.log("This device does NOT have a HeartRateSensor!")
// } 

