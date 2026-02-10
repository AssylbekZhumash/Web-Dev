function getWeekDay(date) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert( getWeekDay(date) );