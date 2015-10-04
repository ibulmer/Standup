function start(){
  document.getElementById("clicked").innerHTML = "timer started"; setInterval(remind, 600000);
}

function remind() {
	document.getElementById("clicked").innerHTML = "timer started";
    alert('Stand Up');
}