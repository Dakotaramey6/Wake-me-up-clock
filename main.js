"use strict";
const main = document.querySelector("#main-clock");
const alarmForm = document.querySelector("#alarm-controls");
const alarmInput = document.querySelector("#alarm");
const footer = document.getElementById("clock-controls");
const alarmSound = new Audio("assets/alarm-clock-short-6402.mp3");

const updateTime = function () {
  let timer = new Date();
  main.innerHTML = timer.toLocaleTimeString();
};

const stopAlarmFunc = function () {
  alarmInput.value = "";
  alarmSound.pause();
};

const stopAlarmBtn = function () {
  alarmSound.play();
  let stopbtn = document.createElement("button");
  stopbtn.innerText = "Stop Alarm";
  stopbtn.id = "stop-btn";
  main.appendChild(stopbtn);
  stopbtn.addEventListener("click", stopAlarmFunc);
};

const alarm = function (alarmTime) {
  let dateAlarm = new Date();
  const dateHour = dateAlarm.getHours();
  const dateMin = dateAlarm.getMinutes();
  const dateToString = `${dateHour}:${dateMin < 10 ? "0" : ""}${dateMin}`;
  const p = document.createElement("p");
  p.id = "alarm-set-p";
  main.appendChild(p).innerText = `Alarm set for ${alarmTime}`;
  if (alarmTime === dateToString) {
    stopAlarmBtn();
    snoozeAlarmbtn();
  }
};

const mainFunction = function (e) {
  updateTime();
  if (alarmInput.value) {
    alarm(alarmInput.value);
  }
};

setInterval(mainFunction, 1000);
