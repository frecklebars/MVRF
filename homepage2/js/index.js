
$(document).ready(function(){
    $(".botbar").html(botbarHTML);

    $(".folder").click(function(){
        console.log("ok");
        var folder = $(this).attr("folder");
        $("[infolder=" + folder + "]").toggle();
    });

});



    
var botbarHTML = `
    <a href="/about">/about</a>
    <a href="/files">/files</a>
    <a href="/logs">/logs</a>
    <a href="/contact">/contact</a>
    <a href="/home">/home</a>
`;

