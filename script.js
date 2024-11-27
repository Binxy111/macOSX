$(document).ready(function(){
	
	// Desktop
	$('.icon.win').on('click', function() {
		var target = $(this).attr('data-target');
		$(target).toggleClass('open');
		$('.all-icons').removeClass('open');
	});
	
	$('.icon.top.bars').on('click', function() {
		$('.startmenu .col.icons').toggleClass('open');
	});	
	
	$('.desktop, .app, .program, .icon.application, .cortana').on('click', function() {
		$('.startmenu, .icons, .icon.win, .all-icons').removeClass('open');
	});	
	
	$('.tray .peek').on('mouseenter', function() {
		$('body').addClass('peek');
	});	
	
	$('.tray .peek').on('mouseleave', function() {
		$('body').removeClass('peek');
	});
	
	$('.tray .more-icons').on('click', function(){
		$('.all-icons').toggleClass('open');
	});
	
	$('.taskbar .icon.application').on('click', function() {
		var target = $(this).attr('data-target');
		$(target).toggleClass('open minimized');
		$(this).toggleClass('open');
	});
	
	
	// App Preview
	$('.icon.edge').on('mouseenter', function() {		
		var $browserWindow = $('.id-edge iframe').clone();
		var $previewWindow = $('.app-preview.preview-edge .content');
		$previewWindow.html('');
		$previewWindow.html($browserWindow);
	});
		
	
	// Apps
	$( ".app" ).draggable({ handle: ".draggable" });
	$( ".app" ).resizable();
	
	
	// Edge Addressbar
	var $addressbar = $('.edge-url');
	$addressbar.keypress(function (e) {
		if (e.which == 13) {
			var address = $addressbar.val();
			$('.edge-browser').attr('src', 'http://' + address);
		}
	});	
	
	$('.id-edge .fa-refresh').on('click', function(){
		var address = $addressbar.val();
		$('.edge-browser').attr('src', 'http://' + address);
	});
	
});


// Setup Clock / Date
var d = new Date(),
		day = d.getDate(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

function format_time() {
  // formats a javascript Date object into a 12h AM/PM time string
	var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
	var seconds = dt.getSeconds();
  var amPM = (hour > 11) ? " PM" : " AM";
  if(hour > 12) {
    hour -= 12;
  } else if(hour == 0) {
    hour = "12";
  }
  if(minute < 10) {
    minute = "0" + minute;
  }
	$('.clock').text(hour + ":" + minute + amPM);
}

function clock() {
	setInterval(format_time, 1000);
}

clock();
$('.date').text(month + '/' + day + '/' + year);
//Clock;
function updateClock() {
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();
		var shortDays = [
				'Sun', //Sunday starts at 0
				'Mon',
				'Tue',
				'Wed',
				'Thu',
				'Fri',
				'Sat'
		];
		var longDays = [
				'Sunday', //Sunday starts at 0
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
		];
		var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		d = new Date(); //This returns Wed Apr 02 2014 17:28:55 GMT+0800 (Malay Peninsula Standard Time)
		m = d.getMonth();
		month = (months[m]);
		date = d.getDate();
		year = d.getFullYear();
		x = d.getDay(); //This returns a number, starting with 0 for Sunday

		var day = (shortDays[x]);
		var longDay = (longDays[x]);

		// Pad the minutes and seconds with leading zeros, if required
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
		currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

		// Choose either "AM" or "PM" as appropriate
		var timeOfDay = (currentHours < 12) ? "AM" : "PM";

		// Convert the hours component to 12-hour format if needed
		currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

		// Convert an hours component of "0" to "12"
		currentHours = (currentHours === 0) ? 12 : currentHours;

		// Compose the string for display
		var currentTimeString = day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
		var longTimeString = longDay + ", " + month + " " + date + ", " + year;
		$("#clock").html(currentTimeString);
		$("#date").html(longTimeString);

}

$(document).ready(function() {
		updateClock();
		setInterval('updateClock()', 1000);
});

//Desktop Item Selection
$("#Desktop span").click(function(e) {
		e.stopPropagation();
		if (e.shiftKey) {
				//Shift-Click
				$(this).addClass("focus");
		} else {
				$(".focus").removeClass("focus");
				$(this).addClass("focus");
		}
});
$("body:not(#Desktop span)").click(function() {
		$("#Desktop span").removeClass("focus");

});

$("#Desktop span").dblclick(function() {
		//$(".window").addClass("open");
});
$("#close").click(function() {
		$(".window").removeClass("open");
});
//$("footer img").click(function(){$(this).animate(margin-bottom: 15px,5000,function(){};)});

//Menu Bar Selection
$("header ul li").click(function(e) {
		e.stopPropagation();
		$(".visible").removeClass("visible");
		$(this).children(" div.submenu").addClass("visible").fadeIn();
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
});
$("body:not(header ul.left li), body:not(header li input#search)").click(function() {
		$(".selected").removeClass("selected");
		$(".visible").removeClass("visible");
});

//Jump

$("footer img").click(function() {
		$(this).removeClass("jump");
		this.offsetWidth = this.offsetWidth;
		$(this).addClass("jump");
});

$("#volume").on("change mousemove", function() {
		if ($(this).val() < 10) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-off");
		}
});
$("#volume").on("change mousemove", function() {
		if ($(this).val() > 10 && $(this).val() < 66) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-down");
		}
});
$("#volume").on("change mousemove", function() {
		if ($(this).val() > 66) {
				$("#volume-icon").removeClass();
				$("#volume-icon").addClass("fa fa-volume-up");
		}
});
