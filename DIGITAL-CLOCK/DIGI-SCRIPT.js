const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
function currentTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if(h>=12){

    ampm="PM";
  }
  else{
    ampm="AM";
  }
  if(h<10){
    h= "0" + h;
  }
  if(m<10){
    m= "0" + m;
  }
  if(s<10){
    s= "0" + s;
  }
  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(()=>{
    currentTime();
  }, 1000)
}
currentTime();