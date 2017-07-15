function iterate(){
	var imgNum = document.getElementById("imageNum");

	var i = 0;

	function iterateNum(){
		i++;
		imageNum.innerHTML = i;
		btnNum.innerHTML = i;
		console.log("iterateNum works");
	}

	btn.addEventListener("click", iterateNum);

	console.log("iterate works");
}


function imageChange(){

	var image = document.getElementById("img1");

	function changeImage(){
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
   	}

	btn.addEventListener("click", changeImage)

	console.log("imageChange works");
}

iterate();
imageChange();
