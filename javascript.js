document.getElementById("myBtn").addEventListener("click", myFunction);
var x;
x=document.getElementById("mytText").value;

function myFunction(){
    var x = document.getElementById("myText").value;
    console.log(x)
    var api="https://api.giphy.com/v1/gifs/search?";  
    var apikey="api_key=FZOlZQ5SRrv6EDrAd4TUSBe0fyYxsqUR";
    var val="&q="+`${x}`;
    console.log(val)
    var search="&limit=5&offset=5&rating=g&lang=en";
   var url=api.concat(apikey,val,search)

var request=new XMLHttpRequest();
request.open('GET',url);
request.send();
request.onload=function(){
    var giphy=JSON.parse(this.response);
    var url=[];
   for(let i=0;i<giphy.data.length;i++)
   {
        url.push(giphy.data[i].images.original.url)
   }
   console.log(url)
   for(let i=0;i<url.length;i++)
   {
  var x=document.createElement("img");
   x.setAttribute("src",`${url[i]}`)
   x.setAttribute("width","100");
   x.setAttribute("height","100")
   document.body.appendChild(x)
   }
   
}
}