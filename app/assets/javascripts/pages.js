// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function(){

  $('#about').hover(function(){
    $('.listy.box-it#about').fadeToggle();
  });

  $('#catmathdo').hover(function(){
    $('.listy.box-it#catmathdo').fadeToggle();
  });

  $('#flipface').hover(function(){
    $('.listy.box-it#flipface').fadeToggle();
  });

  $('#afterburners').hover(function(){
    $('.listy.box-it#afterburners').fadeToggle();
  });

  $('#hire-dave').hover(function(){
    $('.listy.box-it#hire-dave').fadeToggle();
  });
});