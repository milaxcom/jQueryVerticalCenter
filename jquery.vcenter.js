/**
 * Реализация jq метода для позиционирования элемента по вертикальному центру.
 */
(function($){
	jQuery.fn.verticalCenter = function(options) {

		if (!options) var options = {};
		
		/** Настройки модуля по-умолчанию */
		var defaultOptions = {
			/** Минимальное значение клиентской области */
			minClientHeight : 420,
			/** Погрешность по вертикали (может быть отрицательной) */
			topOffset : 0,
			/** Позиционирование элемента при изменении размеров окна браузера */
			onResize : false
		};

		options = $.extend(true, {}, defaultOptions, options);

	    var make = function() {
			
			/** Высота объекта */
			if (typeof options.height == "undefined")
				options.height = $(this).outerHeight();

			/** Высота рабочей области экрана */
			var cHeight = $("body").height();
			if (cHeight < options.minClientHeight) cHeight = options.minClientHeight;

			/** Вычисление основного top параметра */
			var objTop = (cHeight/2) - (options.height/2) + options.topOffset;
			
			$(this).css({"top" : objTop});
			
			/** Автоматический ивент на ресайз окна */
			if (options.onResize) $(window).on("resize", {element : $(this)}, function (e) {
				e.data.element.verticalCenter();
			});
			
			/** Калбек с переданным аргументом this */
			if (typeof options.callback !== "undefined") options.callback.call(this);

	    };
	 
	    return this.each(make);
	};
})(jQuery);
