$('.operator').click(function() {
	$('#display').css({
		backgroundColor: 'lightpink',
		color: "aliceblue"
	});
});

$('.number').click(function() {
	$('#display').css({
		backgroundColor: 'lightblue',
		color: "black"
	});
});


$('.equal').click(function() {
	$('#display').css({
		backgroundColor: 'grey',
		color: "orange"
	});
});

$('#clear').click(function() {
	$('#display').css({
		backgroundColor: 'lightsteelblue',
		color: "black"
	});
});

