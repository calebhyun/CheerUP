






/*deepai.setApiKey('bc446df1-89bc-4b99-8cac-02b1a4e95a01'); 

function checkSentiment(){

        var strText = $('#myText').val();

        deepai.callStandardApi("sentiment-analysis", {

            text: strText

        }).then(function(r) {
            alert(r.output[0])

            if (r.output[0] =="Negative"){

                $.get( "https://dog.ceo/api/breeds/image/random", function( data ) {

                    $('#divPic').prepend('<img id="theImg" src="' + data.message + '" width="200px" />')

                });

            }

        }, function(err) {

        alert(err); // Error: "It broke"

        });

    }

    $('#btnSubmit').click(function() {

        checkSentiment();
    
    });*/