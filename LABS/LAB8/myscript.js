var counter = 0;
function start()
{
	counter++;
	if(counter%2==0 ){
		document.getElementById('image').src = "./UOC SEAL G.png"
	}
    else{
		document.getElementById('image').src = "./UOC SEAL B.png"
	};
    setInterval(start,1000)
}
window.addEventListener("load",start,false);
