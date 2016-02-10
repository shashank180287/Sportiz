$(document).ready(function() {
	$city = $("select[name='city']");
	$sport = $("select[name='sports']");

	var locations = ["Bangalore", "Pune", "NCR"]
	var sports = [ "Cricket", "Football", "Basketball"]

	$.each(locations, function(val, text) {
		$city.append( $('<option></option>').val(val).html(text) )
	}); 

	$city.change(function() {

		if ($(this).val() != "Select City") {
			$sport.empty();
			$.each(sports, function(val, text) {
				$sport.append( $('<option></option>').val(val).html(text) )
			}); 
		}
		
		else {
			$sport.empty();
			$sport.append( $('<option></option>').val("Select Sport").html("Select Sport") )
		}
	});
});
