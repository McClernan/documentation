# BLOGGER.COM TEMPLATE FAVORITES GADGET #

## REQUIREMENT ##

Allow users to tag individual blog posts as favorites
so they can easily find them later. No login required.

A sample of the Favorites Gadget prototype can be seen at [https://plays2019.blogspot.com](https://plays2019.blogspot.com)

## New Gadget Needed ##

- The NYCPlaywrights web site is built on the blogger.com platform.
- No Blogger gadget was available to address the functionality requested.
- Although Blogger's use of layout data tags and the limited experience of the
available developer were challenges, the functionality was developed for the web
site.
- The solution involves cookies and "plain vanilla" JavaScript in the blog's theme
template.

## Layouts Data Tags ##

As mentioned in the Widget Tags for Layouts article, there are many different tags used
to include specific pieces of data in a blogger template.
They will all be formatted as `<data:name/>` or `<data:name1.name2/>`, where name
is the name of the particular piece of data you want to use. In the name1.name2
example, name2 is a particular item within a set of data called name1, e.g. photo.url.

This is a master list of all such available data. It is divided into sections by page
element, because different types of widgets use different data.
[https://support.google.com/blogger/answer/47270?hl=en](https://support.google.com/blogger/answer/47270?hl=en)

## HTML & JavaScript ##

### ON BLOG LOAD ###

When the blog loads, the function tempfavorites() sends the name of a cookie -
if the cookie exists a loop examines existing blog post IDs and compares them
to the existing cookie values. If there is a match, the check box associated with
the blog post ID is checked.

```
<body expr:class='&quot;loading&quot; +
data:blog.mobileClass'
onload='matchcookie(&quot;tempfavorites&quot;);'>

LOAD EXISTING COOKIE & CHECK MATCHING BOXES IF THEY
MATCH THE EXISTING COOKIE

function matchcookie(cname) {

   var p = document.getElementsByName('postid');
   var x = document.getElementsByName('getme');
   var a = getCookie(cname);

   for(var i = 0; i <x.length; i++){
      if (a.includes(p[i].innerHTML)) {
      x[i].click();
      }
   }
}
```

## CHECKBOX CHANGE ##
A check box input field in the blog theme template has three labels connection. The
label tags surround Googles layout data tags:
- The blog post title: `<data:post.title/>`
- The blog post URL: `<data:post.url/>`
- The blog post id: `<data:post.id/>`
The input field was placed at the top of the blog post so that users could easily find it.

```
<input id='pid' name='getme'
onchange='javascript:arrcookie(&quot;tempfavorites&quot;);'
type='checkbox'/>
<span id='fave'>FAVORITE</span>
<label for='pid' name='ltitle'
style='visibility:hidden'><data:post.title/></label>
<label for='pid' name='lurl'
style='visibility:hidden'><data:post.url/></label>
<label for='pid' name='postid'
style='visibility:hidden'><data:post.id/></label>
```

## ONCHANGE ##
The checkbox tag contains an onchange javascript function called arrcookie() which
takes the name of a cookie. The script adds the data post title, url and id to an array
and the array is inserted, with HTML tag formatting, into the named cookie. The
completed cookie is insert in between `<DIV>` tags and displayed as text.

```
function arrcookie(cname) {

   var arr = [];
   var L1 = document.getElementsByName('lurl');
   var L2 = document.getElementsByName('ltitle');
   var L3 = document.getElementsByName('postid');
   var x = document.getElementsByName('getme');
   
   for(var i = 0; i <x.length; i++){
         if (x[i].checked) {
         arr.push("<li><a href= '" +
         L1[i].innerHTML + "'>" + L2[i].innerHTML
         + "</a><span id='" + L3[i].innerHTML +
         "'></span></li>");
         }
      }
    if(arr.length !=""){
    setCookie(cname,arr,365);
    c = getCookie(cname);
    txt = c.replace(/,/g,"");
      } else {
      setCookie(cname,'',1);
      txt = "<a href='whatis.html'>What is a
      favorite?</a>";
    }
    document.getElementById('thefaves').innerHTML
    = txt;
}
```
## ISSUE ##
The favorite applet depends on checkboxes on the currently displayed page - a script checks a
checkbox if a matching postid is in the cookie.
Unfortunately if a new group of posts is displayed it screws up the system.
One possible option - bypass the template using the API get.

### Full Script ###
```
<script>
function matchcookie(cname) {
   
   var p = document.getElementsByName('postid');
   var x = document.getElementsByName('getme');
   var a = getCookie(cname);
   
   for(var i = 0; i <x.length; i++){
      if (a.includes(p[i].innerHTML)) {
      x[i].click();
      }
   }
}

function setCookie(cname, cvalue, exdays) {
  
   var d = new Date();
   
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" +
   expires + ";path=/";
}

function getCookie(cname) {
   
   var name = cname + "=";
   var decodedCookie =
   
   decodeURIComponent(document.cookie);
   
   var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
         while (c.charAt(0) == ' ') {
         c = c.substring(1);
         }
      if (c.indexOf(name) == 0) {
      return c.substring(name.length,
      c.length);
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
   
   for(var i = 0; i <x.length; i++){
      if (x[i].checked) {
      arr.push("<li><a href= '" + L1[i].innerHTML
      + "'>" + L2[i].innerHTML + "</a><span id='"
      + L3[i].innerHTML + "'></span></li>");
      }
   }
      if(arr.length !=""){
      setCookie(cname,arr,365);
      c = getCookie(cname);
      txt = c.replace(/,/g,"");
      } else {
      setCookie(cname,'',1);
      txt = "<a href='whatis.html'>What is a
      favorite?</a>";
      }
      document.getElementById('thefaves').innerHTML =
      txt;
}
</script>

```
