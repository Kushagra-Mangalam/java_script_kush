const timerTextElem = document.getElementById("timer-text");

let timeInSec = 0;

const timerFunc = () => {
  timeInSec++;
  console.log(`Time in seconds: ${timeInSec}`);

  const sec = timeInSec % 60;
  const min = Math.floor(timeInSec / 60) % 60;
  const hour = Math.floor(timeInSec / 3600);

  //   timerTextElem.innerText = `${hour}:${min <10 ? '0' +min:min}:${sec <10 ? '0' + sec : sec}`;
  timerTextElem.innerText = `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};
let intervalid = setInterval(timerFunc ,1000);

// const resetButton = document.getElementById("reset-button");

// resetButton.addEventListener("click",()=>{
//     timeInSec = 0;
//     timerTextElem.innerText = "00:00:00";
//     console.log("Timer reset to 0 seconds");
// });

const resetButton = () => {
  timeInSec = 0;
  timerTextElem.innerText = `00:00:00`;
};

const handlePause = () => {
  clearInterval(intervalid);
};
const handleResume = () => {
    intervalid=setInterval(timerFunc,1000);
};
