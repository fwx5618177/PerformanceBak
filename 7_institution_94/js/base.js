
function stop(){ 
		return false; 
	} 
	document.oncontextmenu=stop; 

$(function(){
	$(".banner .button").hover(function(){
		$(this).find("span").stop(true,true).animate({left:0})
	},function(){
		$(this).find("span").stop(true,true).animate({left:-220})
	})
})


$(function(){
//首页四个图片
	$(".sed_nav li").hover(function(){
		$(this).find("span.con").fadeOut();
		$(this).find("span.con").children("span").stop(true,true).animate({right:"90%"})
		$(this).find("span.con").children("img").stop(true,true).animate({right:"0%"})
	},function(){
		$(this).find("span.con").fadeIn();
		$(this).find("span.con").children("span").stop(true,true).animate({right:"43%"})
		$(this).find("span.con").children("img").stop(true,true).animate({right:"35%"})
	})
//	首页字切换
    var num=0;
	$(".lunbo .item div").eq(0).show()
	$(".lunbo h2").animate({'margin':0,'opacity':1},800);
	$(".lunbo p").animate({'margin':0,'opacity':1},800);
	$(".next").click(function(){
		if(!$(".lunbo .item div").eq(num).find("p").is(":animated")){
			$(".lunbo h2").css({'margin-right':'300px',"opacity":0});
			$(".lunbo p").css({'margin-left':'300px',"opacity":0});
			num++;
			if(num>2){
				num=0;
			}
			$(".lunbo .item div").eq(num).show().siblings().hide();
			$(".lunbo h2").animate({'margin':0,'opacity':1},800);
			$(".lunbo p").animate({'margin':0,'opacity':1},800);
		}
	})
	$(".prev").click(function(){
		if(!$(".lunbo .item div").eq(num).find("p").is(":animated")){
			$(".lunbo h2").css({'margin-right':'300px',"opacity":0});
			$(".lunbo p").css({'margin-left':'300px',"opacity":0});
			num--;
			if(num<0){
				num=2;
			}
			$(".lunbo .item div").eq(num).show().siblings().hide();
			$(".lunbo h2").animate({'margin':0,'opacity':1},800);
			$(".lunbo p").animate({'margin':0,'opacity':1},800);
		}
	})
	function zidong(){
		$(".next").trigger("click");
	}
	var se = setInterval(zidong,5000);
	$(".lunbo h2,.lunbo p").hover(function(){
		clearInterval(se);
	},function(){
		se = setInterval(zidong,5000);
	})

	//导航下划线
	/*$(".ml-link li").hover(function(){
		var liw=$(this).width()
		$(this).find("div").stop(true,true).animate({"width":liw},300);
	},function(){
		$(this).find("div").animate({"width":0},300)
	})*/


	//	首页向下圆圈
	setInterval(function(){
		$(".arrow").animate({bottom:'20px',opacity:'1'},400).animate({bottom:'30px',opacity:'.6'},400)
	},400);
//内页导航
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.ml-nav').addClass("curr")
			$('.ml-nav').find(".ml-logo img").attr("src","images/log.png");
			$('.ml-nav').find(" li div").css("background","#333333")
		}
		else {
			$('.ml-nav').removeClass("curr");
			$('.ml-nav').find(".ml-logo img").attr("src","images/log.png");
			$('.ml-nav').find(" li div").css("background","#1f87fa")
		}
	})
	
	//内页导航
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.ml-nav1').addClass("curr")
			$('.ml-nav1').find(".ml-logo img").attr("src","images/log.png");
			$('.ml-nav1').find(" li div").css("background","#333333")
		}
		else {
			$('.ml-nav1').removeClass("curr");
			$('.ml-nav1').find(".ml-logo img").attr("src","images/log.png");
			$('.ml-nav1').find(" li div").css("background","#000")
		}
	})

//内页轮播内页banner位置大小
	function lunbo(){
	var sw=$(window).width();
	$(".other_banner").css("height",sw/1920*800+"px")
		var sh=$(".other_banner").height();
		var lh=$(".lunbo").height();
		if(sh>400){
			$(".other_banner .lunbo").css("margin-top",(sh-lh)/1.8+"px")
		}
	}
	lunbo()
	$(window).resize(function(){
			lunbo()
	})
	//按钮样式
	$(".button_box").hover(function(){
		$(this).find("span").stop(true,true).animate({left:0},400)
		$(this).find("a").stop(true,true).animate({"line-height":"120px"},400)
	},function(){
		$(this).find("span").stop(true,true).animate({left:-220},400)
		$(this).find("a").stop(true,true).animate({"line-height":"48px"},400)
	})
//	内页脚下拉
	$("a.xiala").click(function(){
		$(this).parents(".parter").toggleClass("auto_height")
	})
//内页二维码
	$(".weixin").click(function(){
		$(".qr_code").fadeToggle(600);
	})
//web_video左
	$(".serBox").hover(
  		function () {
	 		$(this).children().stop(false,true);
	 		$(this).children(".serBoxOn").fadeIn();
     		$(this).children(".pic1").animate({right: -90},800);
     		$(this).children(".pic2").animate({left: 76},800);
     		$(this).children(".txt1").animate({left: -320},800);
     		$(this).children(".txt2").animate({right: 55},800);
	 	},
  		function () {
			$(this).children().stop(false,true);
	 		$(this).children(".serBoxOn").fadeOut();
	 		$(this).children(".pic1").animate({right:66},800);
     		$(this).children(".pic2").animate({left: -110},800);
     		$(this).children(".txt1").animate({left: 60},800);
     		$(this).children(".txt2").animate({right: -180},800);
  		}
	);
//比较
	$(".compare_info .img_box").hover(function(){
		$(this).find(".left").stop(true,false).animate({left:'120px'},400);
		$(this).find(".right").stop(true,false).animate({right:'100px'},400);
	},function(){
		$(this).find(".left").stop(true,false).animate({left:'0'},400);
		$(this).find(".right").stop(true,false).animate({right:'0'},400);
	})
//四大服务
	function set(){
		$(".wedo_box .item0").hover(function(){
			$(this).addClass("on").siblings().removeClass("on")
	        var i=$(this).index();
	        if($(window).width()>1320){
		        if(i==0)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"480px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"760px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
		        }
		        else if(i==1)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"760px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
			    }
			    else if(i==2){
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"560px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"1040px"},600)
			    }
			    else{
		            $(".item0").eq(1).stop(true,false).animate({left:"280px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"560px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"840px"},600)
			    }
			}
	        else{
	        	if(i==0)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"600px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
		        }
		        else if(i==1)
		        {
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"600px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
			    }
			    else if(i==2){
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"800px"},600)
			    }
			    else{
		            $(".item0").eq(1).stop(true,false).animate({left:"200px"},600)
		            $(".item0").eq(2).stop(true,false).animate({left:"400px"},600)
		            $(".item0").eq(3).stop(true,false).animate({left:"600px"},600)
			    }
	        }
		})
	}
set();
$(window).resize(function(){
	set();
})
//	btn
	$(".buy .btn").hover(function(){
		$(this).find("span").stop(true,false).animate({'margin-top':0},400)
	},function(){
		$(this).find("span").stop(true,false).animate({'margin-top':'-50px'},400)
	})

//	-----------------------------------------------------------------------
//四大优势
	$(".app_goods li").mouseleave(function(){
		$(this).removeClass("on");
	})
	$(".info .tab").find("div").eq(0).show()
	$(".app_goods li").mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".info .tab").find("div").eq(index).show().siblings().hide()
	})
	//app_set
	$(".app_set li").hover(function(){
		$(this).stop(true,false).animate({top:'-8px'},600)
	},function(){
		$(this).stop(true,false).animate({top:'0'},600)
	})
	if($(".app_set li").length>6){
		$(".app_set li:eq(6)").hide();
		$(".app_set li:eq(7)").hide();
	}
	$(".app_set .add").click(function(){
		$("li").show(600);
		$(this).hide(600)
	})
})


$(document).ready(function() {
		timer = setInterval (function(){
			$(".videobox").addClass("current");
		},2000);
		$(".closex").click(function(){
			$(".videobox").fadeOut();
			clearInterval(timer);
		})
});


	$(document).ready(function() {
		tim = setInterval (function(){
			$(".popup").addClass("current");
		},100000);
		$(".cancel").click(function(){
			$(".popup").removeClass("current");
			clearInterval(tim);
			tim = setInterval (function(){
			$(".popup").addClass("current");
			},200000);
		})
		
	});

$(function(){
			$('.cont').click(function(){
				$(this).animate({bottom:'308px'},320).addClass("current");
				$('.togclose').animate({bottom:'308px'},320);
				$('.tog').addClass('current');
				$('.togclose').addClass('current');
				$('.tog_contact').slideDown(320);
			})
			$('.togclose').click(function(){
				$('.cont').animate({bottom:'0'},320).removeClass("current");
				$(this).animate({bottom:'0'},320);
				$('.tog_contact').slideUp(320);
				$('.tog').removeClass('current');
				$('.togclose').removeClass('current');
			});
	$(".menu_l_list li:last").css({"background":"none"}); 
	$(".crumbNav em:last").css({"color":"#B10000","padding":"0"}); 
	$(".brea_tab th:last").css({"border-right":"none"}); 
	$(".serice_content .serice_list:last").css({"border-bottom":"none"}); 
})
