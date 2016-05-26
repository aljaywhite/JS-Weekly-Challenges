//$(".cost span").append("$6500");
$("h2 span").text(' $6500');
$("h2 span").hide();
$("h2").append("<button>Reveal Answer!</button>");
$("button").click(function() {
	$("h2 span").show();
	$(this).remove();
});