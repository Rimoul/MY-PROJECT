//sunPath.getTotalLength()
//sunPath.getPointAtLength(1)
var sun = document.getElementById('sunEl');
var sunPath = document.getElementById('sunPath');
var time = document.getElementById('time');
var sunPathL = sunPath.getTotalLength();
var sunrise = new Date(2017, 4, 1);
var curTime = new Date(2017, 4, 1, 2);
var sunset = new Date(2017, 4, 2);
var hour = 0,
    direction = 0;
getPointAtTime(sunrise);
// curTime / (sunset - sunrise)
function getPointAtTime(curTime) {
    var dif = (curTime - sunrise) / (sunset - sunrise);
    var sunPosOnPath = sunPathL * dif;
    return sunPath.getPointAtLength(sunPosOnPath);
}

function formatDate(date) {
  var monthNames = [
      "Jan", "Feb", "Mar", "Apr", 
      "May", "Jun", "Jul", "Aug", 
      "Sep", "Oct", "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return monthNames[monthIndex] + ' ' + day + ', ' + year + '\n' +
  //     date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
}


setInterval(function(){
    hour = 1+hour % 23;
    var thisTime = new Date(2017, 4, 1, hour);
    var point = getPointAtTime(thisTime);
    if(point) {
        sun.style='transform: translate(' + point.x + 'px,' + point.y + 'px)';
    }
    time.textContent = formatDate(thisTime);
}, 1000);