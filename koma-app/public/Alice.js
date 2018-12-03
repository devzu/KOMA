$(function() {
  $("body").click(function(e) {
    if (e.target.id == "menydiv" || $(e.target).parents("#menydiv").length) {
      $(document).ready(function(){
			$('#menydiv').css("height", "520px");
			$('#hem').fadeIn(500);
			$('#bok').delay(100).fadeIn(500);
			$('#profil').delay(200).fadeIn(500);
			$('#kalender').delay(300).fadeIn(500);
			

			
		});
    } else {
      $(document).ready(function(){
		$('#menydiv').css("height", "90px");
		$('#kalender').fadeOut(300);
		$('#profil').delay(50).fadeOut(300);
		$('#bok').delay(150).fadeOut(300);
		$('#hem').delay(250).fadeOut(300);
	
		
		
	});
    }
  });
});

$(document).mouseup(function(e)
{
	var container = $('#menydiv');

	if(container.is(e.target))
	{
		display("hej");
	}
});

