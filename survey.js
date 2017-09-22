// listen for form submission
document.getElementById('surveyForm').addEventListener('submit', submitForm);

// 
function submitForm(e) {
	e.preventDefault();

	console.log(123);
}



$(document).ready(function () {
	toggleFields();
	$('#newToGame').change(function () {
		toggleFields();
	});
});

// create function to toggle if the user needs a mentor.

function toggleFields() {
	if ($('#newToGame').val() === 'yes')
		$('#needMentor').show();
	else
		$('#needMentor').hide();
}