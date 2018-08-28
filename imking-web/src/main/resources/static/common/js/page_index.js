var $lvSpan = $('.header>.lv_span>span');
var $wordSpan = $('.header>.word_span>span');
var $cap = $('.header>#cap');
var $liHover = $('.tab>li');
var $aHover = $('.navul a');
var $aLi = $('.navul li');
var $aLi2 = $('.tab li');

$aLi.each(function(index) {
	$(this).css('left',($aLi.first().position().left + index * 322) + 'px');
});
$aLi2.each(function(index) {
	$(this).css('left',($aLi2.first().position().left + index * 400) + 'px');
});

$wordSpan.each(function(index) {
	$(this).css({
		'left':
			($wordSpan.first().position().left + index * 322) + 'px',
		'top':
			($wordSpan.first().position().top - index * 36) + 'px'
	});
});

$lvSpan.each(function(index) {
	$(this).css('left', ($lvSpan.first().position().left + index * 323) + 'px');
});
$cap.css({
	'left': ($wordSpan.last().position().left + $wordSpan.last().index() - 20) + 'px',
	'top': ($wordSpan.last().position().top + 130) + 'px'
});

var currIndex1 = 0,
	currIndex2 = 0;

$aHover.each(function() {
	$(this).hover(function() {
			$aHover.eq(currIndex1).removeClass('a_hover1');
			$aHover.eq(currIndex1).removeClass('a_hover2');
			$(this).addClass('a_hover1');
		},
		function() {
			$(this).removeClass('a_hover1');
			$aHover.eq(currIndex1).addClass('a_hover1');
		});
});

$aHover.each(function(index) {
	$(this).click(function() {
		if(index != currIndex1) {
			$aHover.eq(currIndex1).removeClass('a_hover2');
			$(this).addClass('a_hover2');
		}
		currIndex1 = index;
	});
});

$liHover.each(function() {
	$(this).hover(function() {
			$liHover.eq(currIndex2).removeClass('li_hover1');
			$liHover.eq(currIndex2).removeClass('li_hover2');
			$(this).addClass('li_hover1');
		},
		function() {
			$(this).removeClass('li_hover1');
			$liHover.eq(currIndex2).addClass('li_hover1');
		});
})

function tabClick(obj, div) {
	var $navs = $(obj).children('li');
	var $box = $(div).children('div');
	$navs.each(function(index) {
		$(this).click(function() {
			if(index != currIndex2) {
				$navs.eq(currIndex2).removeClass('li_hover2');
				$(this).addClass('li_hover2');
			}
			$box[currIndex2].style.display = "none";
			$box[index].style.display = "block";
			currIndex2 = index;
		});
	});
}

tabClick(".tab-wrap1", ".container1");