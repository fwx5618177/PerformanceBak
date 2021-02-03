/* SPredirect */
$(function(){if(document.referrer.indexOf("sp.fujilogi.co.jp")==-1&&((navigator.userAgent.indexOf("iPhone")>0&&navigator.userAgent.indexOf("iPad")==-1)||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0&&navigator.userAgent.indexOf("Mobile")>0)){if(0==document.location.search.length){location.href="http://sp.fujilogi.co.jp"+location.pathname}}var b=location.search.substring(1);if(b){var e=b.split("&");var c=[];for(var d=0;d<e.length;d++){var a=e[d].split("=");c[a[0]]=a[1]}if(c.id=="pc"){$("a").each(function(g,h){var f=$(this).attr("href");$(this).attr("href",f+document.location.search)})}}});


var core = {};
core.autoAddEvenOdd = $(function () {
	$('table tr:even').addClass('even');
	$('table tr:odd').addClass('odd');
	$('ul li:even').addClass('even');
	$('ul li:odd').addClass('odd');
	$('ol li:even').addClass('even');
	$('ol li:odd').addClass('odd');
});

core.gnavi = {
	naviId: 'navigation_overlay',
	overlayClass: 'header__gnavi__overlay',
	pannelClass: 'header__gnavi__pannel',
	startDelay: 300,
	init: $(function () {
		$('.header__gnavi__list').not('.header__gnavi__list--001, .header__gnavi__list--006').mouseover(function () {
			// make overlay
			//$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
		})
		$('.header__gnavi').mouseleave(core.gnavi._mouseleaveAction);
		$('.header__gnavi__list--001').mouseover(core.gnavi._mouseleaveAction);
		// popup sub navigation
		$('.header__gnavi__list--002').mouseover(function () {
			$('.' + core.gnavi.overlayClass).stop(true, true).fadeOut(100);
			//$('.' + core.gnavi.overlayClass + '--service').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			//$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).show();
			$('.' + core.gnavi.pannelClass).load('/gnav/case.php', function(){
				$('.' + core.gnavi.overlayClass + '--service').stop(true,true).delay(core.gnavi.startDelay).show();
			});
		});
		$('.header__gnavi__list--003').mouseover(function () {
			$('.' + core.gnavi.overlayClass).stop(true, true).fadeOut(100);
			//$('.' + core.gnavi.overlayClass + '--case').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			//$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).show();
			$('.' + core.gnavi.pannelClass).load('/gnav/case.php', function(){
				$('.' + core.gnavi.overlayClass + '--case').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			});
		});
		$('.header__gnavi__list--004').mouseover(function () {
			$('.' + core.gnavi.overlayClass).stop(true, true).fadeOut(100);
			//$('.' + core.gnavi.overlayClass + '--results').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			//$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).show();
			$('.' + core.gnavi.pannelClass).load('/gnav/case.php', function(){
				$('.' + core.gnavi.overlayClass + '--results').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			});
		});
		$('.header__gnavi__list--005').mouseover(function () {
			$('.' + core.gnavi.overlayClass).stop(true, true).fadeOut(100);
			//$('.' + core.gnavi.overlayClass + '--group').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			//$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			$('#' + core.gnavi.naviId).stop(true, true).delay(core.gnavi.startDelay).show();
			$('.' + core.gnavi.pannelClass).load('/gnav/case.php', function(){
				$('.' + core.gnavi.overlayClass + '--group').stop(true, true).delay(core.gnavi.startDelay).fadeIn(200);
			});
		});
		$('.header__gnavi__list--006').mouseover(core.gnavi._mouseleaveAction);
	}),
	_mouseleaveAction: function () {
		// remove overlay and navigation
		if($('#' + core.gnavi.naviId + ', .' + core.gnavi.overlayClass).is(':visible')){
			$('#' + core.gnavi.naviId + ', .' + core.gnavi.overlayClass).stop(true, true).fadeOut(100);			
		}
	}
};

core.footerCatsUnit = $(function () {
	$.getScript('/js/footer_list.js')
			.done(function () {
				// @see http://qiita.com/minodisk/items/94b6287468d0e165f6d9
				var shuffle = function (arr) {
					var i, j, tmp;
					arr = arr.slice();
					i = arr.length;
					if (i === 0) {
						return arr;
					}
					while (--i) {
						j = Math.floor(Math.random() * (i + 1));
						tmp = arr[i];
						arr[i] = arr[j];
						arr[j] = tmp;
					}
					return arr;
				}
				$('.footer__cats__unit').remove();
				var shuffled = shuffle(footerCats.list);
				$.map(shuffled, function (val, key) {
					if (document.URL == footerCats.base + val.url) {
						return;
					}
					if ($('.footer__cats__unit').size() >= 5) {
						return;
					}
					var insert = $('<div><div class="footer__cats__unit"><p><a></a></p><a><img /></a></div></div>');
					insert.find('.footer__cats__unit a').each(function () {
						$(this).attr('href', footerCats.base + val.url);
					});
					insert.find('.footer__cats__unit p a').text(val.name);
					insert.find('.footer__cats__unit img').attr('src', footerCats.base + val.image).attr('alt', val.name);
					$('.footer__cats .wrapper').append(insert.html());
				});
			});
});

core.autoHover = {
	exec: function (objPath) {
		$(objPath).mouseenter(function () {
			if ($(this).attr("src").match("_on.")) {
				$(this).addClass("current");
			}
			;
			if (!$(this).attr("src").match("_on")) {
				$(this).attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"))
			}
			;
		});
		$(objPath).mouseleave(function () {
			if (!$(this).attr("class").match("current")) {
				if ($(this).attr("src").match("_on.")) {
					$(this).attr("src", $(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"))
				}
				;
			}
			;
		});
	},
	init: $(function () {
		core.autoHover.exec(".swap,.group-swap a img");
	})
};

core.autoScroll = $(function () {
	$('a[href^=#]').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop: position}, speed, "swing");
		return false;
	});
});

core.goTop = $(function () {
	var topBtn = $('#page_top');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100)
		{
			topBtn.stop().fadeIn();
		}
		else
		{
			topBtn.stop().fadeOut();
		}
	});
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

core.autoHeight = {
	exec: function (parentClass, targetClass) {
		$(parentClass).each(function () {
			var maxHeight = 0;
			$(this).find(targetClass).each(function () {
				if (maxHeight < $(this).height())
				{
					maxHeight = $(this).height();
				}
			});
			$(this).find(targetClass).height(maxHeight);
		});
	},
	init: $(function () {
		core.autoHeight.exec(".main__listbox__row", ".main__listbox__row__unit");
	})
};

core.newIconDisplay = $(function () {
	var minusDate = 10;
	var d = new Date();
	d.setDate(d.getDate() - minusDate);
	var compInt = parseInt(
			d.getFullYear().toString() +
			new String("0" + (d.getMonth() + 1)).slice(-2) +
			new String("0" + d.getDate()).slice(-2)
			);
	$('.index_news__list__unit__new').each(function () {
		if (compInt > parseInt($(this).prev().text().replace(/\//g, ''))) {
			$(this).css('visibility', 'hidden');
		} else {
			$(this).css('visibility', 'visible');
		}
	});
});
