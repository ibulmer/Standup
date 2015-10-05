function start(){
  document.getElementById("clicked").innerHTML = "timer started"; setInterval(remind, 1800000);
}

function remind() {
	document.getElementById("clicked").innerHTML = "timer started";
    alert('Stand Up');
}

