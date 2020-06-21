function makeTimer() {

			var endTime = new Date("21 June 2020 22:30:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");	
			
			if(days < 0 ){
				$('.contenedor_central').css('display', 'none');
			} else {
				$('.pastel').css({'display': 'none'});
				$('.contenedor_central').css('display', 'table-cell');
			}

	}

	setInterval(function() { makeTimer(); }, 1000);
setTimeout(function() { $('.loader').fadeOut() }, 1000)
$('.vela').click(() => {
	$('.pastel').css({'display': 'none'});
	$('.felicitaciones').css({'display': 'table-cell'});
})
