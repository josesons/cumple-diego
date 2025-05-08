// http://hilios.github.io/jQuery.countdown/examples.html

$('#clock').countdown('2025/05/18 14:00:00')
.on('update.countdown', function(event) {
  var format = '%H:%M:%S';
  if(event.offset.totalDays > 0) {
    format = '%-d Día%!d, ' + format;
  }
  if(event.offset.weeks > 0) {
    format = '%-w Semana%!w, ' + format;
  }
  $(this).html(event.strftime(format));
})
.on('finish.countdown', function(event) {
  $(this).html('¡El tiempo se ha llegado!')
    .parent().addClass('disabled');

});