/*
function change(){
	document.getElementById("meny").style.display = "inline-block";


};*/

/*function(){
if ($("meny").style.display = "inline-block"){
	$(window).click(function() {
		document.getElementById("meny").style.display = "none";
	});
}
}	*/

$(document).ready(function(){
	$('#menydiv').click(function(){
		alert("hej");
		$('#menydiv').css({
			'width: 400px'
		});
		//$('#meny').slideDown(500);
	});
});

$(document).mouseup(function(e)
{
	var container = $('#meny');

	if(!container.is(e.target) && container.has(e.target).lenght == 0)
	{
		container.slideUp();
	}
})
