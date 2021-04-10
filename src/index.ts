import { liga } from "./liga";
import { ekipa } from "./ekipa";


var ekipe:ekipa[];
var e1=new ekipa("Los Angeles Lakers", 18);
var e2=new ekipa("Miami Heat",3);
var e3=new ekipa("San Antonio Spurs",5);
var e4=new ekipa("Boston Celtics",17);
var e5=new ekipa("Chicago Bulls",6);
var NBA=new liga(ekipe);
NBA.addEkipa(e1);
NBA.addEkipa(e2);
NBA.addEkipa(e3);
NBA.addEkipa(e4);
NBA.addEkipa(e5);
var btnShow=document.getElementById("show");
btnShow.addEventListener("click", (e:Event) => {
    return liga.showLigu(document.getElementById("ekipa"));
});

var btnSort=document.getElementById("sort");
btnSort.addEventListener("click",(e:Event) => {
    return liga.sortTeamsByBrTitula(document.getElementById("ekipa"));
});