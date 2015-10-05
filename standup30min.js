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
    document.getElementById("clock").innerHTML = future-current;
  } else {
  	alert("stand up");
  	current=Date.parse(new Date());
  	future=current+toMills(30);
  }
}