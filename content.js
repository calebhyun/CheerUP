/*var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("embeddedpopup.htm");

iFrame.style.cssText = 'position:absolute;width:300px;height:200px;opacity:1;';

document.body.appendChild(iFrame);*/

var popupdiv = document.createElement('div');

$('popupdiv').load("embeddedpopup.htm body");

popupdiv.style.cssText = 'position:absolute;width:300px;height:200px;opacity:1;top:0px;left:0px; background-color:red;';

document.body.appendChild(popupdiv)



/*function appendText() {
    var txt3 = document.createElement("iframe");  // Create with DOM
    txt3.innerHTML = "<p>Text.</p>";
    $("img").after(txt3);
  }

$('body').mouseleave(function() {
    //alert("Fill out a bias report!")
    appendText()
})*/