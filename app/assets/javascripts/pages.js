// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function(){

  // $('#about').hover(function(){
  //   $('.listy.box-it#about').fadeToggle();
  // });


  $('li').on('mouseenter', function(){
    var $this = $(this);
    var target = $this.data('hover'); // 'about'
    var group_id = $this.data('content_nav') // 'interests'
    var children = $('[data-content_group='+ group_id + ']');
    // children.each(function(){
    //   console.log(this);
    //   $(this).hide();
    // });
    children.hide();
    $('#' + target).show();

    // $('[content_group]').hide();
    // $($this).show(); // with id of $this_id

  });
});

