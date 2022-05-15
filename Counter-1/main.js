const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
 
  const futureDate = new Date(2022, 5, 24, 10, 27, 0);



  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

 /* let month = futureDate.getMonth();
  month = months[month]
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDate(4)];
  console.log(weekday)
  */
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();

  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

  // future time in ms
  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
    const t = futureTime - today
    console.log(t);

    //1s = 1000ms
    //1m = 60s
    //1hr = 60m
    //1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set value array;
    
    /* const values = [days, hours, minutes, seconds];

    function format(item) {
      if(item < 10){
        return (item `0${item}`);
      }
      return item;
    }
*/ 

const values = [days, hours, minutes, seconds];
function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index])
      
    })
  }
   // count
   let countdown = setInterval(getRemaindingTime, 1000)
  getRemaindingTime();
