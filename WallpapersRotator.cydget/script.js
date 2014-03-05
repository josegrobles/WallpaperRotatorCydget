var d = new Date();
var h = d.getHours();
//BACKGROUNDS
if(h==0){
wallpaper('img/wallpaper0.jpg');
}else if(h==1){
wallpaper('img/wallpaper1.jpg');
}else if(h==2){
wallpaper('img/wallpaper2.jpg');
}else if(h==3){
wallpaper('img/wallpaper3.jpg');
}else if(h==4){
wallpaper('img/wallpaper4.jpg');
}else if(h==5){
wallpaper('img/wallpaper5.jpg');
}else if(h==6){
wallpaper('img/wallpaper6.jpg');
}else if(h==7){
wallpaper('img/wallpaper7.jpg');
}else if(h==8){
wallpaper('img/wallpaper8.jpg');
}else if(h==9){
wallpaper('img/wallpaper9.jpg');
}else if(h==10){
wallpaper('img/wallpaper10.jpg');
}else if(h==11){
wallpaper('img/wallpaper11.jpg');
}else if(h==12){
wallpaper('img/wallpaper12.jpg');
}else if(h==13){
wallpaper('img/wallpaper13.jpg');
}else if(h==14){
wallpaper('img/wallpaper14.jpg');
}else if(h==15){
wallpaper('img/wallpaper15.jpg');
}else if(h==16){
wallpaper('img/wallpaper16.jpg');
}else if(h==17){
wallpaper('img/wallpaper17.jpg');
}else if(h==18){
wallpaper('img/wallpaper18.jpg');
}else if(h==19){
wallpaper('img/wallpaper19.jpg');
}else if(h==20){
wallpaper('img/wallpaper20.jpg');
}else if(h==21){
wallpaper('img/wallpaper21.jpg');
}else if(h==22){
wallpaper('img/wallpaper23.jpg');
}else{
wallpaper('img/wallpaper23.jpg');
}
//SET BACKGROUND
function wallpaper(link){
document.getElementById("body").style.backgroundImage = "url('"+link+"')";}

