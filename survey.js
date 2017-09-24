// listen for form submission
document.getElementById('surveyForm').addEventListener('submit', submitForm);

// 
function submitForm(e) {
	e.preventDefault();

	console.log(123);
}

$(document).ready(function(){
	$(function() {
		$('input[name="newToGame"]').on('click',function() {
			if ($(this).val() == 'yes') {
				$('#mentorSection').show();
			} else {
				$('#mentorSection').hide();
			}
		});
	});
});

