/*!
  jQuery #hashtags v0.1
	(c) 2013 Simon Nussbaumer - admin@thurnax.com
	updated: 2013-07-19
	license: GNU LESSER GENERAL PUBLIC LICENSE
*/
(function($) {
	$.fn.hashtags = function() {
		$(this).wrap('<div class="jqueryHashtags"><div class="highlighter"></div></div>').unwrap().before('<div class="highlighter"></div>').wrap('<div class="typehead"></div></div>');
		$(this).addClass("theSelector");
		$(this).autosize({append: "\n"});
		$(this).on("keyup", function() {
			var str = $(this).val();
			$(this).parent().parent().find(".highlighter").css("width",$(this).css("width"));
			str = str.replace(/\n/g, '<br>');
			if(!str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g)) {
				if(!str.match(/#([a-zA-Z0-9]+)#/g)) {
					str = str.replace(/#([a-zA-Z0-9]+)/g,'<span class="hashtag">#$1</span>');
				}else{
					str = str.replace(/#([a-zA-Z0-9]+)#([a-zA-Z0-9]+)/g,'<span class="hashtag">#$1</span>');
				}
			}
			$(this).parent().parent().find(".highlighter").html(str);
		});
		$(this).parent().prev().on('click', function() {
			$(this).parent().find(".theSelector").focus();
		});

  	};
})(jQuery);
