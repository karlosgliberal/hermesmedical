
$(document).ready(function(){
    var offset2 = $(document).height();
   var lineHF = offset2 - $("#bottommark").position().top;
    $(window).scroll(function(){
        var offset1 = $(document).height();
        var offset = $(window).scrollTop();
        var lineH = offset1 - $("#bottommark").position().top - offset;
        var lineHpart = lineHF/5;
        
        $("span").html(lineH);
            if (lineH > lineHpart*4) {
               $("#animation").attr("src", "images/vap2.png");
            }
            if ((lineH < lineHpart*4) && (lineH > lineHpart*3)) {
                $("#animation").attr("src", "images/vap1.png");
            }
            if ((lineH < lineHpart*3) && (lineH > lineHpart*2)) {
               $("#animation").attr("src", "images/vap3.png");
            }
            if (lineH < lineHpart*2 && lineH > lineHpart*1) {
                $("#animation").attr("src", "images/vap2.png");
            }
            if (lineH < lineHpart) {
                $("#animation").attr("src", "images/vap1.png");
            }
        });
    });

