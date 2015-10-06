var current = Date.parse(new Date());
var future = current+toMills(30);
setInterval(myTimer, 1000);

function toMins(mills){
  return mills/1000/60;
}

function toMills(mins){
  return mins*60*1000;
}

function myTimer(){
  current = Date.parse(new Date());
  if(future-current>=0){
  	var time = (future-current)/1000;
  	var minutes = Math.floor(time/60);
  	var seconds = Math.floor(time%60);
  	minutes=minutes.toString();
  	if (seconds<10){
  		seconds = "0" + seconds.toString();
  	} else {
  		seconds = seconds.toString();
  	}
  	time = minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
  } else {
  	alert("stand up");
  	current=Date.parse(new Date());
  	future=current+toMills(30);
  }
}