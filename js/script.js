$('#reservations').click(function() {
	$('#online-reservation').removeClass('hidden');
	$('#closeReserv').removeClass('hidden');
});

$('#closeReserv').click(function() {
	$('#online-reservation').addClass('hidden');
	$('#closeReserv').addClass('hidden');
});