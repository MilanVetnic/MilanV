function searchToggle(src, evt) {
  let container = $(src).closest('.search-dugme');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  } else if (container.hasClass('active') && $(src).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
  }
}