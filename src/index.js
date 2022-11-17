$("#encryptDiv").mouseenter(function () { 
    $("#decryptDiv").css("opacity", "0.5");
    $("#decryptDiv").css("transition", "300ms");
    // alert("log")
});
$("#encryptDiv").mouseleave(function () { 
    $("#decryptDiv").css("opacity", "1");
    // alert("log")
});

$("#decryptDiv").mouseenter(function () { 
    $("#encryptDiv").css("opacity", "0.5");
    $("#encryptDiv").css("transition", "300ms");
    // alert("log")
});
$("#decryptDiv").mouseleave(function () { 
    $("#encryptDiv").css("opacity", "1");
    // alert("log")
});