$('.back').hide();

//.delay(3000)

$('.front', '.flashcard').hover(function() {
    $(this).hide();
    $(this).siblings('.back').addClass( "animated flipInY fast" ).show();
});

$('.back', '.flashcard').mouseleave(function() {
  $(this).hide();
  $(this).siblings('.front').addClass( "animated flipInY fast" ).show();
});

/*
$('.front', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.back').show();
});



$('.back', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.front').show();
});

*/