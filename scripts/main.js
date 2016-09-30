var myHeading = document.querySelector('h1');
var myHelloButton = document.getElementById("helloButton");
myHelloButton.addEventListener("click", function(){changeHeader()}, false);
function changeHeader(buttonX){
	if(myHeading.innerHTML==="Harry Kontopoulos")
		myHeading.innerHTML = 'Hello world!';
	else
		myHeading.innerHTML = "Harry Kontopoulos";
		
	return this;
}
