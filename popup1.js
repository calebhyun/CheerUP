const allRanges = document.querySelectorAll(".range-wrap");


$('#politicbias').focus();
var taburl = $(location).attr('href'); 


function uuid(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

var userid= ""
chrome.storage.sync.get('userid', function(items) {
    userid = items.userid;
    if (userid) {
        useToken(userid);
        //alert("There already is a uuid")
    } else {
        userid = uuid();
        chrome.storage.sync.set({userid: userid}, function() {
            useToken(userid);
        });
    }
    function useToken(userid) {
        // TODO: Use user id for authentication or whatever you want.
    }
});

allRanges.forEach(wrap => {
const range = wrap.querySelector(".range");
const bubble = wrap.querySelector(".bubble");

range.addEventListener("input", () => {
    setBubble(range, bubble);
});
setBubble(range, bubble);
});

function setBubble(range, bubble) {
const val = range.value;
const min = range.min ? range.min : 0;
const max = range.max ? range.max : 100;
const newVal = Number(((val - min) * 100) / (max - min));

let bubbleElement = document.querySelectorAll(".bubble");

if (val == 3) {
    bubble.innerHTML = 'Very Right Biased'
    bubbleElement[0].style.background = 'linear-gradient(to right, #EA4C46, #DC1C13)'
}
else if (val == 2) {
    bubble.innerHTML = 'Right Biased'
    bubbleElement[0].style.background = 'linear-gradient(to right, #F07470, #EA4C46)'

    //bubbleElement[0].style.background = 'red'

    }
    else if (val == 1) {
        bubble.innerHTML = 'Slightly Right Biased'
        bubbleElement[0].style.background = 'linear-gradient(to right, #F6BDC0, #F07470)'

        //bubbleElement[0].style.background = 'red'

    }
    else if (val == 0) {
        bubble.innerHTML = 'Neutral'

        bubbleElement[0].style.background = 'grey'

    }
    else if (val == -1) {
        bubble.innerHTML = 'Slightly Left Biased'
        bubbleElement[0].style.background = 'linear-gradient(to right, #7879FF, #BFBFFF)'

        //bubbleElement[0].style.background = 'blue'

    }
    else if (val == -2) {
        bubble.innerHTML = 'Left Biased'
        bubbleElement[0].style.background = 'linear-gradient(to right, #4949FF, #7879FF)'

        //bubbleElement[0].style.background = 'blue'

    }
    else if (val == -3) {
        bubble.innerHTML = 'Very Left Biased'
        bubbleElement[0].style.background = 'linear-gradient(to right, #0000FF, #4949FF)'

        //bubbleElement[0].style.background = 'blue'
    }

// Sorta magic numbers based on size of the native UI thumb
bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

const submit = document.getElementById('submit');

const statButton = document.getElementById('statbutton')

const frontPage = document.getElementById('frontpage');
const statsPage = document.getElementById('statspage');

$('#statspage').hide();

function seeStatsPage() { 
    $('#statspage').show();
    $('#frontpage').hide();
}

function seeFrontPage() {
    $('#statspage').hide();
    $('#frontpage').show();
}

function postToDatabase() {
    var response = document.getElementById("politicbias").value

    var ratingdata = "[{rating_category_id:1, rating_value:" + response + "}]"

    $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        type: "POST",
        url: 'https://www.balancedmedia.org/api/RatingSubmission/',
        data: JSON.stringify({ 
            id: null, 
            "submitterId": userid, 
            "articleUrl": taburl, 
            "Rating": ratingdata
        }),
        dataType: "json",
        success: function(result) { //we got the response
            //alert('Successfully called');
        },
        error: function(jqxhr, status, exception) {
            alert('Exception:', exception);
        }
        });
    seeStatsPage()
    
}

$('#submit').click(function() {
    postToDatabase();
});
//submit.addEventListener('click', postToDatabase())
//statButton.addEventListener('click', seeStatsPage())

$('#statbutton').on('click', function(e) {
    seeStatsPage();
});

$('#backbutton').on('click', function(e) {
    seeFrontPage();
});


