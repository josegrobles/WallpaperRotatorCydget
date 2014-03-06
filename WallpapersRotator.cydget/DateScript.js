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
if(hour>=0 && hour<=9){
document.write('<p style="width:100%;margin-top:28px;text-align:center;color:white;font-family:' + font1 + ';font-size:85px;"><a style="letter-spacing:-2px;position:relative">' + hour + '</a><a style="font-family:Flamenco;bottom:14px;position:relative;">:</a>' + minutes + '</p>');
document.write('<p style="width:100%;margin-top:-95px;text-align:center;color:white;font-family:' + font2 + ';font-size:18px;">' + day + ' ' + dayNumber + ' ' + monthToday + '</p>');}
else if(hour>=10 && hour<=19){
document.write('<p style="width:100%;margin-top:28px;text-align:center;color:white;font-family:' + font1 + ';font-size:85px;"><a style="letter-spacing:-5px;position:relative;margin-right:5px;">' + hour + '</a><a style="font-family:Flamenco;bottom:14px;position:relative;">:</a>' + minutes + '</p>');
document.write('<p style="width:100%;margin-top:-95px;text-align:center;color:white;font-family:' + font2 + ';font-size:18px;left:3px;position:relative">' + day + ' ' + dayNumber + ' ' + monthToday + '</p>');}
else{
document.write('<p style="width:100%;margin-top:28px;text-align:center;color:white;font-family:' + font1 + ';font-size:85px;"><a style="letter-spacing:-2px;position:relative">' + hour + '</a><a style="font-family:Flamenco;bottom:14px;position:relative;">:</a>' + minutes + '</p>');
document.write('<p style="width:100%;margin-top:-95px;text-align:center;color:white;font-family:' + font2 + ';font-size:18px;position:relative;right:2px;">' + day + ' ' + dayNumber + ' ' + monthToday + '</p>');} 
