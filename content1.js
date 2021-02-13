/*var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("embeddedpopup.htm");

iFrame.style.cssText = 'position:absolute;width:300px;height:200px;opacity:1;';

document.body.appendChild(iFrame);*/

//var popupdiv = document.createElement('div');

$('popupdiv').load("embeddedpopup.htm body");

//popupdiv.style.cssText = 'position:absolute;width:300px;height:200px;opacity:1;top:0px;left:0px; background-color:red;';

//document.body.appendChild(popupdiv)


var divhtml = '<div id="frontpage"><h2>How biased was this article?</h2><div class="range-wrap" style="width: 60%;" tabindex="1">';
divhtml +='<input type="range" id="politicbias" class="range"  min="-3" max="3" step="1"><output class="bubble"></output></div>';
divhtml += '<button type="submit" id="submit">Submit</button>';
divhtml += '<a href="https://www.balancedmedia.org/"><button class="bottomleftbutton">About us</a>';
divhtml += '<button type="submit" id="statbutton" class="bottomrightbutton">See your stats.</button>';
divhtml += '</div>';
divhtml += '<div id="statspage">';
divhtml += '<p>Your general bias: Left leaning</p>';
divhtml += '<p>You rated that article right learning.</p>';
divhtml += '<p>Average bias of that article: neutral</p>';
divhtml += '<button type="button" id="backbutton" class="bottomleftbutton">Submit a bias report</button>';
divhtml += '<button type="button" id="historybutton" class="bottomrightbutton">History</button>';
divhtml += '</div>';

$('body').append('<div id="divTest">hello</div>');
$('#divTest').css({position: 'absolute', top: '0px', left: '0px', height: '200px', width: '300px', backgroundColor: 'white'});   
$('#divTest').html(divhtml);
/*function appendText() {
    var txt3 = document.createElement("iframe");  // Create with DOM
    txt3.innerHTML = "<p>Text.</p>";
    $("img").after(txt3);
  }

$('body').mouseleave(function() {
    //alert("Fill out a bias report!")
    appendText()
})*/

$(window).scroll(function(e){ 
  var $el = $('#divTest'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});

