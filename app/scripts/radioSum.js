var ssqScore = 0;
function calcscore(){
    $(".ssq.active").each(function(){
        ssqScore+=parseInt($(this).find("input").val());
    });
}

$('#calc').click(function() {
    calcscore();
    var suicidevalid = $('input:radio[name="suicidevalid"]:checked').val();
    console.log(ssqScore);
    if (ssqScore > 120) {
        $('#calc').attr('href','./overtwelve.html');
        console.log(">120");
    }
    else if (ssqScore < 80) {
        $('#calc').attr('href','./undereight.html');
        console.log("<80");
    }
    else {
        if (suicidevalid === "10") {
            $('#calc').attr('href','./overtwelve.html');
        }
        else {
            $('#calc').attr('href','./baseline1.html');
        }
    }
});
