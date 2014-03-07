var d = new Date();
var h = d.getHours();
//BACKGROUNDS
if(h==0){
wallpaper(background0);
}else if(h==1){
wallpaper(background1);
}else if(h==2){
wallpaper(background2);
}else if(h==3){
wallpaper(background3);
}else if(h==4){
wallpaper(background4);
}else if(h==5){
wallpaper(background5);
}else if(h==6){
wallpaper(background6);
}else if(h==7){
wallpaper(background7);
}else if(h==8){
wallpaper(background8);
}else if(h==9){
wallpaper(background9);
}else if(h==10){
wallpaper(background10);
}else if(h==11){
wallpaper(background11);
}else if(h==12){
wallpaper(background12);
}else if(h==13){
wallpaper(background13);
}else if(h==14){
wallpaper(background14);
}else if(h==15){
wallpaper(background15);
}else if(h==16){
wallpaper(background16);
}else if(h==17){
wallpaper(background17);
}else if(h==18){
wallpaper(background18);
}else if(h==19){
wallpaper(background19);
}else if(h==20){
wallpaper(background20);
}else if(h==21){
wallpaper(background21);
}else if(h==22){
wallpaper(background22);
}else{
wallpaper(background23);
}
//SET BACKGROUND
function wallpaper(link){
document.getElementById("background").style.background = "url('"+link+"')";}

