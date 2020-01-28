<script>

function matchcookie(cname) {

var p = document.getElementsByName('postid');
var x = document.getElementsByName('getme');
var a = getCookie(cname);

for(var i = 0; i <x.length; i++)
{
 if (a.includes(p[i].innerHTML)) {
x[i].click();
}
}

}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {

      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function arrcookie(cname) {
var arr = [];
var L1 = document.getElementsByName('lurl');
var L2 = document.getElementsByName('ltitle');
var L3 = document.getElementsByName('postid');
var x = document.getElementsByName('getme');

for(var i = 0; i <x.length; i++)
{
 if (x[i].checked) {
arr.push("<li><a href= '" + L1[i].innerHTML + "'>" + L2[i].innerHTML +  "</a><span id='" + L3[i].innerHTML + "'></span></li>");
}
}

if(arr.length !=""){
setCookie(cname,arr,365);
c = getCookie(cname);
txt = c.replace(/,/g,"");
} else {
setCookie(cname,'',1);
txt = "<a href='whatis.html'>What is a favorite?</a>";
}

document.getElementById('talkee').innerHTML = txt;


}

function outcookie(cname){
c = getCookie(cname);
if(c){
txt = c.replace(/,/g,"");
} else {
setCookie(cname,'',1);
txt = "no outcookie";
}

document.getElementById('outcookie').innerHTML = txt;
}



</script>
<div id="outcookie"></div>
<div id="talkee"><a href="whatis.html">What is a favorite?</a></div>
