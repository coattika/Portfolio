var index  = 1;

function plusIndex(n){
	index = parseInt(index) + parseInt(n);
	showImage(index);
	console.log(n,index);
}

showImage(2);

function showImage(n){
	var i;
	var x = document.getElementsByClassName("portada");
	if(n > x.length){ index = 1};
	//if(n > 1){ index = x.length};
		for(i=0;i<x.length;i++)
			{
				x[i].style.display = "none";
				console.log('bbbbbbbbb');
			}
	console.log('aaaaaaa', index);
		x[index-1].style.display = "block";
}