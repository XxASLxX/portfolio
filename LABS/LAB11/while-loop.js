var i = 1;       // Set counter to 1
var j = 1;
var msg = '';    // Message

// Store 5 times table in a variable
  while (i<10) {
	j = 1;
	    var d ="d"+i;
	    msg ='';
	while(j<10){
	    msg += i + ' x ' + j + ' = ' + i*j + '<br />';
	    j++;
	  document.getElementById(d).innerHTML = msg;
    }
    i++;
}
