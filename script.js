$(".apple-q2").hide();
$(".cherry-q2").hide();
$(".no-color").hide();
$(".red-apple").hide();
$(".pink-apple").hide();
$(".yellow-apple").hide();
$(".blue-apple").hide();
$(".pink").hide();
$(".yellow").hide();
$(".blue").hide();
$(".red-cherry").hide();
$(".pink-cherry").hide();
$(".yellow-cherry").hide();
$(".blue-cherry").hide();


$(".one").click(function() {
    let userInput = $(".fruit-name").val();
    $(".red-apple-name").text(`${userInput}`);
    $(".pink-apple-name").text(`${userInput}`);
    $(".yellow-apple-name").text(`${userInput}`);
    $(".blue-apple-name").text(`${userInput}`);
    $(".red-cherry-name").text(`${userInput}`);
    $(".yellow-cherry-name").text(`${userInput}`);
    $(".pink-cherry-name").text(`${userInput}`);
    $(".blue-cherry-name").text(`${userInput}`);
});





$(".name").hide();


$(".d1").mouseenter(function() {
    $(".d1").css("font-weight", "bold");
});
$(".d1").mouseleave(function() {
    $(".d1").css("font-weight", "normal");
});

$(".d2").mouseenter(function() {
    $(".d2").css("font-weight", "bold");
});
$(".d2").mouseleave(function() {
    $(".d2").css("font-weight", "normal");
});

$(".d1").click(function() {
    $(".q1").hide();
    $(".apple-q2").toggle();
    $("body").css("background-color", "#eaffe0");
});
$(".d2").click(function() {
    $(".q1").hide();
    $(".cherry-q2").toggle();
});


$(".g1").mouseenter(function() {
    $(".g1").css("font-weight", "bold");
});
$(".g1").mouseleave(function() {
    $(".g1").css("font-weight", "normal");

});

$(".g2").mouseenter(function() {
    $(".g2").css("font-weight", "bold");
    $(".g2").css("background-color", "#ffdbd9");
});
$(".g2").mouseleave(function() {
    $(".g2").css("font-weight", "normal");
    $(".g2").css("background-color", "#eaffe0");
});
$(".g3").mouseenter(function() {
    $(".g3").css("font-weight", "bold");
    $(".g3").css("background-color", "#fbff94");
});
$(".g3").mouseleave(function() {
    $(".g3").css("font-weight", "normal");
    $(".g3").css("background-color", "#eaffe0");
});

$(".g4").mouseenter(function() {
    $(".g4").css("font-weight", "bold");
    $(".g4").css("background-color", "#4b51a6");
});
$(".g4").mouseleave(function() {
    $(".g4").css("font-weight", "normal");
    $(".g4").css("background-color", "#eaffe0");
});
$(".g1").click(function() {
    $(".apple-q2").hide();
    $(".no-color").toggle();
    $("body").css("background-color", "#79a86a");
    $(".name").toggle();
    $(".red-apple").toggle();
});
$(".g2").click(function() {
    $(".apple-q2").hide();
    $(".pink").toggle();
    $("body").css("background-color", "#654975");
    $(".pink-apple").css("margin-top", "100px");
    $(".pink-apple").toggle();
    $(".name").toggle();
});
$(".g3").click(function() {
    $(".apple-q2").hide();
    $(".yellow").toggle();
    $("body").css("background-color", "#fffae8");
    $(".yellow-apple").css("margin-top", "100px");
    $(".yellow-apple").toggle();
    $(".name").toggle();
});
$(".g4").click(function() {
    $(".apple-q2").hide();
    $(".blue").toggle();
    $("body").css("background-color", "#7775ff");
    $(".blue-apple").css("margin-top", "100px");
    $(".blue-apple").toggle();
    $(".name").toggle();
});



$(".h1").mouseenter(function() {
    $(".h1").css("font-weight", "bold");
});
$(".h1").mouseleave(function() {
    $(".h1").css("font-weight", "normal");

});

$(".h2").mouseenter(function() {
    $(".h2").css("font-weight", "bold");
    $(".h2").css("background-color", "#ffdbd9");
});
$(".h2").mouseleave(function() {
    $(".h2").css("font-weight", "normal");
    $(".h2").css("background-color", "#ffc2bd");
});
$(".h3").mouseenter(function() {
    $(".h3").css("font-weight", "bold");
    $(".h3").css("background-color", "#fbff94");
});
$(".h3").mouseleave(function() {
    $(".h3").css("font-weight", "normal");
    $(".h3").css("background-color", "#ffc2bd");
});

$(".h4").mouseenter(function() {
    $(".h4").css("font-weight", "bold");
    $(".h4").css("background-color", "#4b51a6");
});
$(".h4").mouseleave(function() {
    $(".h4").css("font-weight", "normal");
    $(".h4").css("background-color", "#ffc2bd");
});
$(".h1").click(function() {
    $(".cherry-q2").hide();
    $(".red-cherry").toggle();
    $(".red-cherry").css("margin-top", "100px");
    $(".name").toggle();
});
$(".h2").click(function() {
    $(".cherry-q2").hide();
    $(".pink-cherry").toggle();
    $(".pink-cherry").css("margin-top", "100px");
    $(".name").toggle();
});
$(".h3").click(function() {
    $(".cherry-q2").hide();
    $(".yellow-cherry").toggle();
    $(".yellow-cherry").css("margin-top", "100px");
    $(".name").toggle();
});
$(".h4").click(function() {
    $(".cherry-q2").hide();
    $(".blue-cherry").toggle();
    $(".blue-cherry").css("margin-top", "100px");
    $(".name").toggle();
});