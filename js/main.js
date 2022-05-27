$(document).ready(function () {
  const items = $('.faq__item');
  const lowers = $('.faq__item-lower');

  for (let item of items) {
    item = $(item);
    let lower = $(lowers[items.index(item)]);
    item.click(() => {
      if (lower.css('height') === '520px') {
        item.removeClass('hovered');
        let i = 520, interval = setInterval(() => {
          lower.css('height', i -= 20)
          if (lower.css('height') === '1px') {
            clearInterval(interval);
            lower.css('border-top', 'none')
          }
        }, 8)
      }
      
      else {
        item.addClass('hovered');
        lower.css('border-top', '1px solid #c1c1c1')
        let i = 0, interval = setInterval(() => {
          lower.css('height', i += 20)
          if (lower.css('height') === '520px') {
            clearInterval(interval);
          }
        }, 8)
      }
    })
  }
})