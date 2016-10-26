$(function(){

	/*依照放入的圖片數量彈性伸縮展示區的最大寬度*/
	var $pic_amount=$('.big_pic img').length;
	var _index=0;
	var $big_pic=$('.big_pic');
	var i=0;
	var cc='';
	var img_h = $('.big_pic img').eq(0).css('height');
	var img_w =  $('.big_pic img').eq(0).css('width');
	
	$big_pic.css({'width':640*$pic_amount})
	$('.slider').css({width:img_w,height:img_h})

	// /*長出控制小圓點*/
	// function a_amount(){
	// 	for(i=0;i<$pic_amount;i++){
	// 		cc=cc+'<a href="#">'+(i+1)+'</a>'
	// 		// console.log(cc);
	// 	}
	// }
	// a_amount();
	$('.control').html(cc);

	/*左鍵設定*/
	$('.left').click(function(){
		if(_index==0){
			_index=$pic_amount;
		}
		_index--;
		$big_pic.css({left:640*_index*-1})
		
		$('.slider').animate({width:img_w,height:img_h})

		$controler.eq(_index).css({'background-color':'#222',color:'#ddd'}).siblings().css({'background-color':'#ddd',color:'#222'})
		if(_index==3||_index==4){
			$('.left').css({'color':'rgba(255,255,255,0.5)'})
			$('.right').css({'color':'rgba(255,255,255,0.5)'})
		}else{
			$('.left').css({'color':'rgba(0,0,0,0.5)'})
			$('.right').css({'color':'rgba(0,0,0,0.5)'})
		}
	})
	/*右鍵設定*/
	$('.right').click(function(){
		if(_index==$pic_amount-1){
			_index=-1;
		}
		_index++;
		$big_pic.css({left:640*_index*-1})
		css();
	})

	function set_width_height(){
		img_h = $('.big_pic img').eq(_index).css('height')
		img_w = $('.big_pic img').eq(_index).css('width')
	}
	/*顯示或隱藏左右箭頭*/
	$('.left').hover(
		function(){
			$('.left').css({'opacity': 1})
		},
		function(){
			$('.left').css({'opacity': 0})
		})
	$('.right').hover(
		function(){
			$('.right').css({'opacity': 1})
		},
		function(){
			$('.right').css({'opacity': 0})
		})

	/*自動撥放的設定*/
	var si=setInterval(st,5000);
	function st(){
		_index++;
		$big_pic.css({left:640*_index*-1})
		if(_index==$pic_amount-1){
			_index=-1;
		}
		css();
	}
	$(window).mousemove(function(){
		clearInterval(si);
		si = setInterval(st,5000);
	})

	/*懶人function*/
	function css(){
		$controler.eq(_index).css({'background-color':'#222',color:'#ddd'}).siblings().css({'background-color':'#ddd',color:'#222'})
		if(_index==3||_index==4){
			$('.left').css({'color':'rgba(255,255,255,0.5)'})
			$('.right').css({'color':'rgba(255,255,255,0.5)'})
		}else{
			$('.left').css({'color':'rgba(0,0,0,0.5)'})
			$('.right').css({'color':'rgba(0,0,0,0.5)'})
		}
	}
})
