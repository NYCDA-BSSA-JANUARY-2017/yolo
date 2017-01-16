var start = function (){
	console.log('jquery started');
	$('.btn').click(function (eventObject){
		console.log("YOU CLICKED ON A BUTTTOOON!!");
		$('body').append('<img src="https://i.ytimg.com/vi/OxgKvRvNd5o/maxresdefault.jpg">');
	});
}

$(document).ready(start);