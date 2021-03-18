"use strict";

$(document).ready(function(){
$(".hamburger").click(function(){
    $(".hide_menu").toggle();
});

$(".fa-times").click(function(){
    $("hide_menu").hide();
});
});