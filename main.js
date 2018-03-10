

function loadJSON(file,callback){
  var rawFile= new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
    if(rawFile.readyState===4 && rawFile.status=="200"){
       callback(rawFile.responseText);
    }
  }
  rawFile.send();
}

loadJSON("resume.json", function (text) {
  var data =JSON.parse(text);
//  console.log(data);
basic(data.basics);
});


var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');
function basic(basics) {
  // console.log(basics.name);
  var lc1=document.createElement("div");
  lc1.classList.add("child1");
  var image=document.createElement("img");
  image.classList.add("image1");
  image.src=basics.picture;
  var head1=document.createElement("h1");
  head1.textContent=basics.name;
  var head3=document.createElement("h3");
  head3.textContent=basics.label;
  lc1.appendChild(image);
  lc1.appendChild(head1);
  lc1.appendChild(head3);
  left.appendChild(lc1);
  var hr=document.createElement("hr");
  left.appendChild(hr);
  var lc2=document.createElement("div");
  lc2.classList.add("child2");
  var head4=document.createElement("h4");
  head4.textContent=basics.email;
  var head=document.createElement("h4");
  head.textContent=basics.phone;
  lc2.appendChild(head4);
  lc2.appendChild(head);
  left.appendChild(lc2);

}
