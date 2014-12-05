/*!
  jQuery #hashtags v0.2.5
	(c) 2013 Simon Nussbaumer - admin@thurnax.com
	updated: 2014-05-12
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
			if(!str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([a-zA-Z0-9]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([\u0600-\u06FF]+)/g) && !str.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([\u0600-\u06FF]+)/g)) {
                		if(!str.match(/#([\u0600-\u06FF]+)#/g)) { //arabic support
					str = str.replace(/#([\u0600-\u06FF]+)/g,'<span class="hashtag">#$1</span>');
				}else{
					str = str.replace(/#([\u0600-\u06FF]+)#([\u0600-\u06FF]+)/g,'<span class="hashtag">#$1</span>');
				}
				if(!str.match(/@([\u0600-\u06FF]+)@/g)) {
					str = str.replace(/@([\u0600-\u06FF]+)/g,'<span class="hashtag">@$1</span>');
				}else{
					str = str.replace(/@([\u0600-\u06FF]+)@([\u0600-\u06FF]+)/g,'<span class="hashtag">@$1</span>');
				}
				if(!str.match(/#([a-zA-Z0-9]+)#/g)) {
					str = str.replace(/#([a-zA-Z0-9]+)/g,'<span class="hashtag">#$1</span>');
				}else{
					str = str.replace(/#([a-zA-Z0-9]+)#([a-zA-Z0-9]+)/g,'<span class="hashtag">#$1</span>');
				}
				if(!str.match(/@([a-zA-Z0-9]+)@/g)) {
					str = str.replace(/@([a-zA-Z0-9]+)/g,'<span class="hashtag">@$1</span>');
				}else{
					str = str.replace(/@([a-zA-Z0-9]+)@([a-zA-Z0-9]+)/g,'<span class="hashtag">@$1</span>');
				}
			}
			$(this).parent().parent().find(".highlighter").html(str);
		});
		$(this).parent().prev().on('click', function() {
			$(this).parent().find(".theSelector").focus();
		});

  	};
})(jQuery);
