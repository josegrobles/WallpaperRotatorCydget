var d = new Date();
var hour = d.getHours();
var minutes = d.getMinutes();
var dayNumber = d.getDate();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var day = weekday[d.getDay()];
var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";
var monthToday = month[d.getMonth()];
var minutesLength = minutes.toString().length;
if(minutesLength==1){
	var minutes = '0' + minutes;
}
else{}
document.write('<p style="width:100%;margin-top:28px;text-align:center;color:white;font-family:HelveticaNeue-UltraLight;font-size:85px;">' + hour + ':' + minutes + '</p>');
document.write('<p style="width:100%;margin-top:-90px;text-align:center;color:white;font-family:HelveticaNeue-Light;font-size:18px;">' + day + ' ' + dayNumber + ' ' + monthToday + '</p>');