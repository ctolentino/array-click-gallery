var titles = ["A Movie about Posters", "Sonic the Hedgehog", "Lilo & Stitch"];

var images = ["https://cdn-images-1.medium.com/max/1200/1*0j2qYqYUbug2cgvmLRgmEA.png", "https://cdn-images-1.medium.com/max/1600/1*cSCGPc3Cg4Pj8o2pl8o2eg.png", "https://cdn-images-1.medium.com/max/1600/1*wk0zpGF-ljh2CnONlV0sRw.png"];

var i = 0;

var titleElement = document.getElementById("title");
var imgElement = document.getElementById("imgPlaceholder");
var pElement = document.getElementById("para");

var btn = document.getElementById("btn");

function changeImg(){
	if(i===3){
		i = 0;
	}
	//innerHTML means the info between the tags
	titleElement.innerHTML = titles[i];
	//change the *source* of the image
	imgElement.src = images[i];
	i++;
}

btn.addEventListener("click", changeImg);
