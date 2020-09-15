/**
 * common.js
 * 사이트 전역에 사용되는 스크립트
 *
 */






// go to top
$(document).on('click', '.top_btn', function(event){
	$('html, body').animate( { scrollTop : 0 }, 500 );
});





// nav
$(document).ready(function(){
	$('.navi_btn').off('click').on('click', function(event) {

		if($(this).children('i').hasClass('xi-angle-left-min')) {

			$(this).children('i').removeClass('xi-angle-left-min');
			$(this).children('i').addClass('xi-angle-right-min');

			$('.navi_box span').stop().show();

		} else {

			$(this).children('i').removeClass('xi-angle-right-min');
			$(this).children('i').addClass('xi-angle-left-min');

			$('.navi_box span').stop().hide();
		}
	});
});




// all menu
$(document).ready(function(){

	// 열기
	$('.all_menu').click(function() {
		$('.all_menu_pop_box').fadeIn();
		$('.all_menu_pop').fadeIn();
		$('.pop_bg').fadeIn();
		$('.all_menu_pop').focus();

		if($(window).width() < 752) {

			$('.site_map > ul > li > ul > li > a').each(function(index) {
				if($(this).siblings("ul").length){
					$(this).append("<i class='xi-angle-up-min'></i>");
				}
			});

			var menu_box_height = $('.all_menu_box').height();

			if(menu_box_height < $(window).height()){
				$('.all_menu_box').css({'min-height':$(window).height()+'px'});
			}

			var activeMenu = '';

			$('.mobile_tab > ul > li').each(function(index) {
				if($(this).hasClass('motab_active')){
					activeMenu = $(this).data("show");
				}
			});

			$(".mobile_tab > ul > li").removeClass("motab_active");
			$('.'+activeMenu+'_motab').parent('li').addClass("motab_active");
			$('.site_map.'+activeMenu).show();
		}
	});

	// 닫기
	$('.pop_btn').click(function() {
		$('.all_menu_pop_box').fadeOut();
		$('.all_menu_pop').fadeOut();
		$('.pop_bg').fadeOut();
		$('.all_menu').focus();
	});


	// 모바일 클릭이벤트
	$('.all_menu_pop .site_map > ul > li > h5').click(function() {

		if($(window).width() < 752) {
			$('.all_menu_pop .site_map > ul > li > ul').stop().slideUp();
			$(this).siblings('ul').stop().slideDown();

			$('.all_menu_pop .site_map > ul > li > h5').removeClass('site_active');
			$(this).addClass('site_active');

			var menu_box_height = $('.all_menu_box').height();

		}
	});

	$('.all_menu_pop .site_map > ul > li > ul > li > a').click(function(e) {

		if($(window).width() < 752) {

			if($(this).siblings('ul').length){
				e.preventDefault();

				$('.all_menu_pop .site_map > ul > li > ul > li > ul').stop().slideUp();
				$(this).siblings('ul').stop().slideDown();

				$('.all_menu_pop .site_map > ul > li > ul > li').removeClass('site_active2');
				$('.all_menu_pop .site_map > ul > li > ul > li > a > i').removeClass('xi-flip-vertical');

				$(this).children('i').addClass('xi-flip-vertical');
				$(this).parent('li').addClass('site_active2');
			}
		}
	});


	$('.mobile_tab > ul > li').click(function() {

		if($(window).width() < 752) {
			var activeMenu_click = '';

			activeMenu_click = $(this).data("show");

			$(".mobile_tab > ul > li").removeClass("motab_active");
			$('.'+activeMenu_click+'_motab').parent('li').addClass("motab_active");

			$('.all_menu_pop .site_map').hide();
			$('.site_map.'+activeMenu_click).show();
		}
	});




	// menu 이외 클릭시
	$('.pop_bg').click(function() {
		$('.all_menu_pop_box').fadeOut();
		$('.all_menu_pop').fadeOut();
		$('.pop_bg').fadeOut();
	});




});




// search btn
$(document).ready(function(){
	$('.search_btn').click(function() {
		$('.search_wrap').slideToggle("slow");

		var img_cha = '';

		if($(".search_btn").hasClass("search_show")){
			$('.search_btn').removeClass('search_show');
			$('.search_btn span').html('검색');
			img_cha = $('.search_btn img').attr("src").split("close").join("search");
			$('.search_btn img').attr("src",img_cha);
		} else {
			$('#uniSearchBtn').addClass('search_show');
			$('#uniSearchBtn span').html('닫기');
			img_cha = $('#uniSearchBtn img').attr("src").split("search").join("close");
			$('#uniSearchBtn img').attr("src",img_cha);
		}
	});
});


// 다보기
function windowOpen(url){
	var popupX = (window.screen.width / 2) - (1000 / 2);
	var popupY= (window.screen.height /2) - (900 / 2);
	var popupH = 900;
	var popupW = 1000;
	if( window.screen.height <= popupH ){
		popupH = (window.screen.height - 120);
	}
	if( window.screen.width < 1920 && window.screen.width > 1000 ) {
		popupW = 1250;
	} else if ( window.screen.width < 1000 ){
		popupW = 1000;
	}

	window.open(url, '_blank', 'scrollbars=yes,resizable=no,status=no,width=' + popupW + ',height='+ popupH +',top=' + popupY + ',left='+popupX+',screenX='+popupX+',screenY='+popupY);
	return false;
}

function windowOpen2(url){
	window.open(url, "pop", "width=800,height=500, scrollbars=yes, resizable=yes");
		return false;
}


var gnbHeight = 0;
// gnb
$(document).ready(function(){
	var heights = $("#gnb > ul > li > ul").map(function(){
		return $(this).height();
	}).get(),
	gnbHeight = Math.max.apply(null, heights);
	$("#gnb > ul > li > ul").css("height",gnbHeight+60);
	$(".gnb_bg").css("height",gnbHeight+100);

	 $("#gnb > ul, .gnb_bg").bind("mouseenter focusin", function() {
		$("#gnb > ul > li > ul").stop().slideDown();
		$(".gnb_bg").stop().slideDown();
		$(".slick-prev").hide();
		$(".slick-next").hide();
	 });
	$("#gnb > ul, .gnb_bg").bind("mouseleave focusout", function() {
		$("#gnb > ul > li > ul").stop().slideUp();
		$(".gnb_bg").stop().slideUp();
		$(".slick-prev").show();
		$(".slick-next").show();
	 });

});


// bnr rolling
$(document).ready(function(){
	var popzone_box = $('.bnr_box').bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: false,
		autoControlsCombine: true,
		controls: true,
		speed: 400,
		pagerType: 'short',
		nextSelector: '.next_btns',
		nextText: '<span class="blind">다음</span><i class="xi-angle-right-thin"></i>',
		prevSelector: '.prev_btns',
		prevText: '<span class="blind">이전</span><i class="xi-angle-left-thin"></i>',
		autoControlsSelector: '.pre_contr',
		touchEnabled : false
	});
});




$(document).ready(function(){

	// 백년대학
	if($(".univ").length) {

		var slick_cnt_news = 0;
		var slick_cnt_ques = 0;

		$(".latest_wrap > ul > li a.show_tab").click(function(e) {
			e.preventDefault();
			$(".latest_wrap > ul > li > p").removeClass("active");
			$(this).parent('p').addClass("active");
			$(".latest_wrap > ul > li > ul").hide();

			if($( window ).width() < 464) {
				$('.more_btn').hide();
				$(this).next('.more_btn').show();
			}else{
				$(".more_btn").show();
			}

			var activeTab = $(this).data("show");

			$("#"+activeTab).fadeIn();

			if(activeTab == 'news'){
				if(slick_cnt_news == 0) {
					$("#news").slick({
						slidesToShow: 4,
						slidesToScroll: 1,
						dots: false,
						autoplay: true,
						autoplaySpeed: 3500,
						centerPadding: 0,
						arrow: false,
						responsive: [
							{
								breakpoint: 1620,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							},

							{
								breakpoint: 650,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
								}
							}
						]
					});
				}
				slick_cnt_news++;
			}

			if(activeTab == 'question'){
				if(slick_cnt_ques == 0) {
					$("#question").slick({
						slidesToShow: 4,
						slidesToScroll: 1,
						dots: false,
						autoplay: true,
						autoplaySpeed: 3500,
						centerPadding: 0,
						arrow: false,
						responsive: [
							{
								breakpoint: 1620,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							},

							{
								breakpoint: 650,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
								}
							}
						]
					});
				}
				slick_cnt_ques++;

			}

		   return false;
		});
	}

	// 평생교육
	$(".gall_title > ul > li > a").click(function(e) {
		if($(".menu_pys").parent('li').hasClass("active")){
			e.preventDefault();
			$(".gall_title > ul > li").removeClass("active");
			$(this).parent('li').addClass("active");
			$(".gall_wrap .gall_list").hide();

			var activeTab = $(this).data("show");

			$("#"+activeTab).fadeIn();

			var img_chagne_oth = $(this).find("img").attr("src").split("plus").join("actv");
			$(".gall_title > ul > li > a").find("img").attr("src",img_chagne_oth);
			var img_chagnes = $(this).find("img").attr("src").split("actv").join("plus");
			$(this).find("img").attr("src",img_chagnes);

			return false;
		}
	});
});




// latest rolling
$(window).resize(function() {
	$(".latest_wrap .slick-arrow").empty();
	$(".latest_wrap .slick-prev").append('이전');
	$(".latest_wrap .slick-next").append('다음');
});


$(document).ready(function(){

	$("#noti").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3500,
		centerPadding: 0,
		arrow: false,
		responsive: [
			{
				breakpoint: 1620,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},

			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});
	$(".latest_wrap .slick-arrow").empty();
	$(".latest_wrap .slick-prev").append('이전');
	$(".latest_wrap .slick-next").append('다음');
});






// latest rolling
$(document).ready(function(){
	$(".commu_box").slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		centerPadding: 0,
		arrow: false,
		prevArrow: $('.prev_comu'),
		variableWidth: true,
		nextArrow: $('.next_comu')
	});

	$('.pause_comu').on('click', function() {
		if($(this).hasClass('start')) {
			$('.commu_box').slick('slickPause');
			$('.pause_comu').removeClass('start').addClass('stop');
		} else {
			$('.commu_box').slick('slickPlay');
			$('.pause_comu').removeClass('stop').addClass('start');
		}
	});

});








// latest rolling
$(document).ready(function(){
	$(".main_ic .icon_box").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		centerPadding: 0,
		arrow: false,
		variableWidth: true,
		responsive: [
			{
			  breakpoint: 3000,
			  settings: "unslick"
			},
			{
			  breakpoint: 680,
			  settings: {
				autoplay: true
			  }
			},
			{
			  breakpoint: 580,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true
			  }
			}
		]
	});
});



$(window).on('resize orientationchange', function() {
	$('.main_ic .icon_box').slick('resize');
});





// 백년대학
$(document).ready(function() {
	$(".univ .icon_wrap.main_ic .icon_box li").hover(function(){
		var img_chagne = $(this).find("img").attr("src").split("off").join("univ");
		$(this).find("img").attr("src",img_chagne);
	}, function() {
		var img_chagne = $(this).find("img").attr("src").split("univ").join("off");
		$(this).find("img").attr("src",img_chagne);
	});
});

// 혁신
$(document).ready(function() {
	$(".hyuk .icon_wrap.main_ic .icon_box li").hover(function(){
		var img_chagne = $(this).find("img").attr("src").split("off").join("hyuk");
		$(this).find("img").attr("src",img_chagne);
	}, function() {
		var img_chagne = $(this).find("img").attr("src").split("hyuk").join("off");
		$(this).find("img").attr("src",img_chagne);
	});
});

// 평생
$(document).ready(function() {
	$(".pys .icon_wrap.main_ic .icon_box li").hover(function(){
		var img_chagne = $(this).find("img").attr("src").split("off").join("pys");
		$(this).find("img").attr("src",img_chagne);
	}, function() {
		var img_chagne = $(this).find("img").attr("src").split("pys").join("off");
		$(this).find("img").attr("src",img_chagne);
	});
});


// 전체메뉴
$(document).ready(function() {
	$(".icon_wrap.all_icon .icon_box li").hover(function(){
		var img_chagne = $(this).find("img").attr("src").split("off").join("all");
		$(this).find("img").attr("src",img_chagne);
	}, function() {
		var img_chagne = $(this).find("img").attr("src").split("all").join("off");
		$(this).find("img").attr("src",img_chagne);
	});
});






// sub nav
$(document).ready(function() {

	$(this).on("click", ".lnb_wrap > li > a", function(e) {
		e.preventDefault();
		$(this).siblings('ul').css("visibility", "visible");

		$('.lnb_wrap > li > a').removeClass('nav_active');
		$(this).addClass('nav_active');

		$('.lnb_wrap > li > ul').stop().slideUp();
		$(this).siblings('ul').stop().slideDown();
	});

	$(document).click(function(e){
		var container = $(".lnb_wrap");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			$(".lnb_wrap > li > ul").slideUp(300);
			$('.lnb_wrap > li > a').removeClass('nav_active');
		}
	});

	$('.lnb_wrap > li').mouseleave(function(){
		$('.lnb_wrap > li > ul').stop().slideUp();
		$('.lnb_wrap > li > a').removeClass('nav_active');
	});

});







// board comment
$(document).ready(function() {

	if($('.add_cmt').length){
		$('.add_cmt').on('click', function() {
			$(this).parents('li').children('.add_cmt_wrap').slideDown();
		});
		$('.add_cmt_close').on('click', function() {
			$(this).parents('.add_cmt_wrap').slideUp();
		});
	}

});




/* popup */
function popOpen(open) {


	var top = 0;
	var pop_height = 0;
	var $layerPopupObj = $('#'+open);
	var left = ( $(window).scrollLeft() + ($(window).width() - $layerPopupObj.width()) / 2 );

	//if($(window).height() < ($layerPopupObj.height()+80) || $(window).height() < 1500){
	if($(window).height() < ($layerPopupObj.height()+80)){
		top = 10;
		pop_height = $(window).height() - 80;
		$layerPopupObj.children('.map_content').css({'height':pop_height, 'overflow-y':'scroll'});

	}else{
		top = (($(window).height() - $layerPopupObj.height()) / 2 );
	}

	$layerPopupObj.css({'left':left,'top':top});
	$(".map_bg").fadeIn();
	$layerPopupObj.fadeIn();
}


function resize_pop(open) {

	var top2 = 0;
	var pop_height2 = 0;
	var $layerPopupRes = $('#'+open);
	var left2 = ( $(window).scrollLeft() + ($(window).width() - $layerPopupRes.width()) / 2 );

	$layerPopupRes.children('.map_content').css({'height':'auto'});

	if($(window).height() < ($layerPopupRes.height()+80)){
		top2 = 10;
		pop_height2 = $(window).height() - 80;
		$layerPopupRes.children('.map_content').children('.map_box').css({'height':pop_height2, 'overflow-y':'scroll'});

	}else{
		top2 = (($(window).height() - $layerPopupRes.height()) / 2 );
	}

	$layerPopupRes.css({'left':left2,'top':top2});
}

/* 레이어 팝업 동적 리사이징 */
var $mb_select = $('#sub_content .mb_select');
var $map_wrap = $('.map_wrap');
$mb_select.on('click', '.bo_search_btn', function() {
	$mb_select.each(function() {
		if ( $(this).css('display') == 'block' ) {
			if ( $(this).find('.view_content .tbl_center').prop('clientHeight') > 105 ) {
				var targetId = '' + $(this).prop('id');
				resize_pop(targetId);
			}
		}
	});
});

/* 레이어 팝업 동적 리사이징 */
$mb_select.on('keyup paste', function (event) {
	if (event.keyCode == 13) {
		if ($(this).css('display') == 'block') {
			if ($(this).find('.view_content .tbl_center').prop('clientHeight') > 105) {
				var targetId = '' + $(this).prop('id');
				resize_pop(targetId);
			}
		}
	}
});

/* 레이어 팝업 ESC 닫기 */
$(document).on('keydown', function (event) {
	if (event.keyCode == 27) {
		var targetId;
		if ($mb_select.css('display') == 'block') {
			targetId = '' + $mb_select.prop('id');
			popClose(targetId);
		} else if ($map_wrap.css('display') == 'block') {
			targetId = '' + $map_wrap.prop('id');
			popClose(targetId);
		}
	}
});

function popClose(close) {
	$(".map_bg").fadeOut();
	$('#'+close).fadeOut();
}









// popupzone
$(document).ready(function() {

	var top_bnr_fir = getCookie('topBnr');
	if(top_bnr_fir === ''){
		$(".top_pop_wrap").show();
		var popupzone_box = $('.top_pop').bxSlider({
			auto: true,
			pager: true,
			controls : false
		});
	}


	$(".tdy_btn").click(function(e) {
		if($("#tdy_no").is(":checked") == true){
			setCookie('topBnr', 'topOn', 1);
			$(".top_pop_wrap").slideUp('slow');
		}else{
			$(".top_pop_wrap").slideUp('slow');
		}
	});

	if($(window).width() > 768) {
		var top_bnr = getCookie('topBnr');

		if(top_bnr !== ''){
			$(".top_pop_wrap").hide();
			$(".top_pop").addClass('closed');
			$(".pop_close").removeClass('pop_open');
			$(this).html('팝업존 <img src="/images/common/pop_btn.png" alt="팝업 열기" />');
		}
		else{
			$(".top_pop_wrap").show();
		}
	}else {
		$(".top_pop_wrap").hide();
	}

	$(".pop_close").click(function(e) {
		e.preventDefault();
		//팝업열기
		if($(".top_pop").hasClass("closed") === true){
			$(".top_pop_wrap").slideDown('slow');
			$(".top_pop").removeClass('closed');
			$(this).addClass('pop_open');
			$(this).html('팝업존 <img src="/images/common/pop_btn.png" alt="팝업 닫기" />');
		}
		//팝업닫기
		else{
			$(".top_pop_wrap").slideUp('slow');
			$(".top_pop").addClass('closed');
			$(this).removeClass('pop_open');
			$(this).html('팝업존 <img src="/images/common/pop_btn.png" alt="팝업 열기" />');
		}
	});



});



 function setCookie(cName, cValue, cDay){
	  var expire = new Date();
	  expire.setDate(expire.getDate() + cDay);
	  cookies = cName + '=' + escape(cValue) + '; path=/ ';
	  if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
	  document.cookie = cookies;
 }

 function getCookie(cName) {
	  cName = cName + '=';
	  var cookieData = document.cookie;
	  var start = cookieData.indexOf(cName);
	  var cValue = '';
	  if(start != -1){
		   start += cName.length;
		   var end = cookieData.indexOf(';', start);
		   if(end == -1)end = cookieData.length;
		   cValue = cookieData.substring(start, end);
	  }
	  return unescape(cValue);
 }




//통합검색 start
	function fnUniSearch(keyword) {
		var $searchForm = $("#uniSearchForm");
		var srcKeyword = $("#search_txt").val();
		var srcCategory = $("#searchCategory").val()

		if (keyword != "" && keyword != null) {
			srcKeyword = keyword;
		}
		
		if (srcKeyword == "" || srcKeyword == null) {
			$.jqAlert("검색어 입력이 필요합니다.");
			return;
		}
		if (srcKeyword.length <= 1) {
			$.jqAlert("2자 이상의 검색어 입력이 필요합니다.");
			return;
		} else {
			fnUniSearchSetCookie();
			$searchForm.find("input[name='srcKeyword']").val(srcKeyword);
			$searchForm.find("input[name='srcCategory']").val(srcCategory);
			$searchForm.find("input[name='srcMoreSe']").val('N');
			$searchForm.find("input[name='srcViewMoreCnt']").val(10);
			$searchForm.find("input[name='srcNavigation']").val('');
			$.cookie('scroll_loc', null, {expires: 10, domain: 'www.osan.go.kr', secure: true});
			$searchForm.attr("method", "post");
			$searchForm.submit();
		}
	}


	function fnUniSearchSetCookie() {
		var searchKeywordUnified = $("#search_txt").val();
		var cookie_value = $.cookie('searchHistory');

		if (cookie_value == "" && cookie_value == null) {
			cookie_value = searchKeywordUnified;
		} else {
			cookie_value += ("__" + searchKeywordUnified);
		}
	}
	
	function fnMarkSearchKeyword(searchKeyWord) {
		$("#content p:contains('"+search+"')").each(function () {
			 var regex = new RegExp(search,'gi');
	        $(this).html( $(this).text().replace(regex, "<b>"+search+"</b>") );
	        
		});
	}
	
//통합검색 end
	
	
	
	
$(function() {
	$("#guide_m").hide();
	$(".land_cate li").click(function() {
		$("ul.land_cate li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();

		var activeTab = $(this).data("show");

		$("#"+activeTab).fadeIn();
		return false;
	});
});
