deepai.setApiKey('bc446df1-89bc-4b99-8cac-02b1a4e95a01');

var allp = "";
$("p").each(function() {
    console.log($(this).text());
    allp += $(this).text();
});
//alert(allp);

/*var allimg = "";
$("img").each(function() {
    console.log($(this).text());
    allimg += $(this).text();
});
alert(allimg);

var imgarray = []

var allimg = $(".media__image media__image--responsive").map(function() {
    imgarray.push(this.innerHTML);
})

alert(imgarray)
*/

function checkSentiment(i){
        deepai.callStandardApi("sentiment-analysis", {
            text: allp
        }).then(function(r) {
            alert(r.output[0])

            if (r.output[0] =="Verynegative"){
                var img = document.getElementsByTagName('img'); 
                //or however you get a handle to the IMG
                var width = img[0].clientWidth;
                
                var height = img[0].clientHeight;
                alert(width, height)
                //alert("https://thezebra.org/wp-content/uploads/2020/07/Training-Time-Aug2020-GR-with-ball-1536x832.jpg")
                $('img').attr('src', 'http://placekitten.com/' + width + '/' + height);
            }
        
        }, function(err) {

        alert(err); // Error: "It broke"

        });
    }

checkSentiment()
    


/*
async function checkWebSentiment() {
    //paragraph = document.getElementsByTagName('p').textContent
    for (let i = 0; i < paragraph.length; i++) { 
        alert(paragraph[i])
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: paragraph[i],
    });
    alert(resp)
}}

checkWebSentiment()
*/





/*deepai.setApiKey('bc446df1-89bc-4b99-8cac-02b1a4e95a01');

(async function() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: "HI! This is a positive sentence.",
    });
    console.log(resp);
    alert(resp)
})()*/



// Example posting file picker input text (Browser only):

/*const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('bc446df1-89bc-4b99-8cac-02b1a4e95a01');

(async function() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: document.getElementById('yourFileInputId'),
    });
    console.log(resp);
})()
*/
