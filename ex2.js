const d = new Date();
const formatterr = new Intl.DateTimeFormat('en-US', { month: "2-digit", day: "2-digit", year: "numeric" });
const formattedDay = formatterr.format(d);
console.log(formattedDay);