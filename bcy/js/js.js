// JavaScript Document

	/*
	;(function(){
	$(function(){
	$('.main').css({top: -300*num+'%'});
	
	var num=0;
	var timer=null;
	$('.screen1').removeClass('out');

	//gps导航控制;
	$('.gps li').click(function(e) {
		var index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
		$('.main').stop().animate({top: -100*index+'%'},1000);
		
		 num=index;
		 $('.main>div').eq(num).removeClass('out').siblings().addClass('out');
    });
	
	//鼠标滚轮事件；
	$(document).mousewheel(function(e,d){
        if($('.first').attr('style')=='display:none'){
			clearTimeout(timer);
		timer=setTimeout(function(){
			num-=d;
			if(num>4){num=4};
			if(num<0){num=0};
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass();
			$('.main').stop().animate({top: -100*num+'%'},800);
			$('.main>div').eq(num).removeClass('out').siblings().addClass('out');

		},300);
			}
		
	});
		
})

	
	
	})();*/
;(function(){
	var wow = new WOW(
	  {
		boxClass:     'wow',             //动画元素的CSS类 (默认类名 wow)
		animateClass: 'animated',        //动画CSS类 (默认类名 animated)
		offset:       0,                 //距离可视区域多少开始执行动画(默认值 0)
		mobile:       true,              //是否在移动设备上执行动画(默认值 true)
	  }
	);
	wow.init();
	
	
	})();
/*;(function(){
	$(function(){
			$('.first h2').click(function(e) {*/
	    
/*		$('.first').css({'display':'none'});
*/		/*$('.first').fadeOut(2000);*/
/*        $('.first').slideUp(500)
		$('.screen1').css('display','block');
        $('.screen1 .p').css('display','block')
		
    });

		
		})
	
	})();*/
;(function(){
	$(function(){
		$('.first h2').click(function(e) {
			$('.bg').fadeIn(2000);
			$('audio').get(0).play();
			$('.first').slideUp(500);
			$('.screen1').css('display','block');
			$('.screen1 .p').css('display','block')
				var num=0;
				var timer=null;
				$('.screen1').removeClass('out');
			
				//gps导航控制;
				$('.gps li').click(function(e) {
					var index=$(this).index();
					$(this).addClass('current').siblings().removeClass('current');
					$('.main').stop().animate({top: -100*index+'%'},1000);
					
					 num=index;
					 $('.main>div').eq(num).removeClass('out').siblings().addClass('out');
				});
				
				//鼠标滚轮事件；
				$(document).mousewheel(function(e,d){
					//if($('.first').attr('style')=='display:none'){}
						clearTimeout(timer);
					timer=setTimeout(function(){
						num-=d;
						if(num>6){num=6};
						if(num<0){num=0};
						
						$('.gps li').eq(num).addClass('current').siblings().removeClass();
						$('.main').stop().animate({top: -100*num+'%'},800);
						$('.main>div').eq(num).removeClass('out').siblings().addClass('out');
			
					},300);
						
					
				});

    	});
	})
})();


$(function(){	
/*app旋转*/
	;(function(){
		$('.app ul li').each(function(index, element) {
			var index=index*45
			$(element).css({ transform:'rotateY('+index+'deg) translateZ(350px)' })
		});
	})();
})
;(function(){
  $(function(){
	   var timer=null;
	   var num=0;
	   function go(){
		   timer=setInterval(function(){
		   num+=3
		   if(num>1200){
			   num=0
			   }
			   $('.box01 ul').css({left:-num})
		   },30)
		   }
	   go();
		   
	  })

	
	})();
;(function(){
			$(function(){
				if(!flux.browser.supportsTransitions)
					
					
				window.f = new flux.slider('#slider', {
					pagination: false,
					controls: false,
					transitions: ['explode', 'tiles3d', 'bars3d', 'cube', 'turn'],
					autoplay: false
				});
				
				$('.transitions').click(function(event){
					event.preventDefault();
					window.f.next($(event.target).data('transition'), $(event.target).data('params'));
				});
			});

	
	
	})();







