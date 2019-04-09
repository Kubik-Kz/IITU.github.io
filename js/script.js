$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			 $(".success").toggleClass("show__form");
             $("body").addClass("overflow__none");
             $(".overlay").toggleClass("show__form");
             $(".overlay1").toggleClass("show-block");
             $(".popup1").removeClass("show-block");
		});
		return false;
	});

});