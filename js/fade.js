$(window).on('load', function(){
  if ( !window.loading || !window.wrapper ) return;
  wrapper.style.visibility = 'visible';
  $('#loading').fadeOut(2000, function(){
    $(this).remove();
  });
});