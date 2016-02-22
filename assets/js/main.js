(function( $ ){

$(function() {

  $('.form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.form__button');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.form__input').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.form__input').each(function(){
        if($(this).val() != ''){
		$(this).removeClass('empty_field');
        } else {
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      var sizeEmpty = form.find('.empty_field').size();
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
		lightEmpty();
        return false
      } else {
        form.submit();
      }
    });
  });
});

})( jQuery );