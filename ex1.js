const d = new Date();
const formatterr = new Intl.DateTimeFormat('en-US', { weekday: "long" });
const formattedDay = formatterr.format(d);
const formatter = new Intl.DateTimeFormat('en-US', { weekday: "long", hour: '2-digit', minute: '2-digit', second: '2-digit' });
const formattedTime = formatter.format(d);
console.log("Today is : " + formattedDay);
console.log("Current time is: " + formattedTime);