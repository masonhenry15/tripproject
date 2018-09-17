/**
 * 
 */
$(function(){
	$('#form-register').submit(function(e){
		e.preventDefault();
		
		$(this).find('txt-warning').empty().hide();
	});
});
