			$(function(){
				var width = $(window).width();
				// console.log(width);
				$('.wrap').css('width',width);
				$('.content').css('width',width);
				$('.content .main').css('width',width);
				// $('content .main .img').css('width',width);
				// $('.content .main .two').css('width',width);
				
				
				// $(document).mousewheel(function(e){
					var o_ot = $('.two').offset().top;
					var t_ot = $('.img').offset().top;
					var p_ot = $('.three').offset().top;
					var i_ot = $('.img2').offset().top;
					var j_ot = $('.four').offset().top;
					var k_ot = $('.img3').offset().top;
					console.log(t_ot);
					$(window).scroll(function(){
						var o_st = $(window).scrollTop();
						console.log(o_st);					
						if(o_st>o_ot){
							$('.main .img').animate({marginLeft:'0px'},1200);
							
						}
						if(o_st>t_ot){
							$('.main .three').animate({marginLeft:'0px'},1200);
							
						}
						if(o_st>p_ot){
							$('.main .img2').animate({marginLeft:'0px'},1200);
							
						}
						if(o_st>i_ot){
							
							$('.main .four').animate({marginLeft:'0px'},1200);
						}
						if(o_st>j_ot){
							
							$('.main .img3').animate({marginLeft:'0px'},1200);
						}
						if(o_st>k_ot){
							
							$('.main .five').animate({marginLeft:'0px'},1200);
						}
					})
					
					
					
					// var o_ot = $('.header').offset().top;
					// console.log(o_ot);
					// $(window).scroll(function(){
					// 	var o_st = $(window).scrollTop();
					// 	console.log(o_st);					
					// 	if(o_st>=o_ot){
					// 		$('.one>.left').animate({left:'0px'},1000)
					// 		$('.one>.center').animate({right:'0px'},1000)
					// 		$('.one>.right').animate({right:'0px'},1500)
					// 	}
					// })
					
					
					// $('.main .img').animate({marginLeft:'0px'},1400);
					// $('.main .two').animate({marginLeft:'0px'},1400);
					// $('.main .three').animate({marginLeft:'0px'},1400);
				// })
				
				
			})
			// 获取<ul>
			var nav = document.getElementById('nav');
			var scrollTop;
			var t = nav.offsetTop;
			var img = document.getElementsByClassName('img')[0];
			// console.log(nav.offsetTop)
			
			var num = document.getElementsByClassName('num')[0].getElementsByTagName('li');
			
			window.onscroll = function(){
				scrollTop = document.documentElement.scrollTop;
				if(scrollTop>=t){
					nav.style.position = 'fixed';
					nav.style.zIndex = 2;
					nav.style.marginTop = -t + 'px';
					nav.style.background = '#E3E3E3';
				}else{
					nav.style.position = '';
					nav.style.marginTop = 0 + 'px';
					nav.style.background = 'white';
				}
			}
			
			
			
			
			
			// 每次移动的距离
			var i = 0;
			
			// 定义变量  代表当前显示第几张
			var index = 0;
			
			// 定义定时器
			var timer1;
			var timer2;
			
			// 让图片动起来
			function run(){
				i-=5;		
				// 判断是否到最后一张
				if(i<-7680){
					i=0;
					run();
				}
				if(i%1920 == 0){
					// 清除定时器   让其停止滑动
					clearInterval(timer1);
					// console.log(i);
					
					// 小圆点样式
					index++;
					if(index>3){
						index = 0;
					}
					
					for(var j=0;j<num.length;j++){
						num[j].removeAttribute('class');
					}
					num[index].setAttribute('class','active');
					
					// 一次性定时器  过几秒种之后继续滑动
					timer2 = setTimeout(function(){
						timer1 = setInterval(run,2);
					},1500);
				}
				img.style.left = i+'px';
			}

			timer1 = setInterval(run,2);
			
			// 鼠标移入移出
			for(var j=0;j<num.length;j++){
				num[j].onmouseenter = function(){
					clearInterval(timer1);
					clearTimeout(timer2);
					index = this.value;
					
					// 设置小圆点样式
					for(var j=0;j<num.length;j++){
						num[j].removeAttribute('class');
					}
					num[index].setAttribute('class','active');
					
					if(i>index*-1920){
						timer1 = setInterval(function(){
							i-=5;
							if(i == (index*-1920)){
								clearInterval(timer1)
							}
							img.style.left = i+'px';
						},2);
						
					}else{
						timer1 = setInterval(function(){
							i+=5;
							if(i == (index*-1920)){
								clearInterval(timer1)
							}
							img.style.left = i+'px';
						},2);
					}
				}
				// num[j].onmouseleave = function(){
				// 	run();
				// 	clearInterval(timer1);
				// 	clearTimeout(timer2);
				// 	index = this.value;
				// 	timer2 = setTimeout(function(){
				// 		timer1 = setInterval(run,2);
				// 	},1500);
				// }
				
			}
			
			
// 获取图片
			var img1 = document.getElementsByClassName('img1')[0].getElementsByTagName('li');
			var num1 = document.getElementsByClassName('num1')[0].getElementsByTagName('li');
			
			// 获取按键
			var prev = document.getElementById('prev');
			var next = document.getElementById('next');
			console.log(img1);
			// 定义图片的下标
			var index1 = 0;
			
			// 添加循环定时器  每一秒切换一次图片
			function run1(){		
				// 将所有的图片全部隐藏
				for(var i=0;i<img1.length;i++){
					img1[i].removeAttribute('class');
				}
				
				// 让当前图片显示
				index1++;
				// 判断图片是否到最后一张
				if(index1>3){
					index1 = 0;
				}
				
				// 显示指定下标的图片
				img1[index1].setAttribute('class','active');
			}
			
			//添加循环定时器 每秒切换一次图片
			 // var timer = setInterval(run1,2500);
			
			
			// 移入鼠标
			prev.onmouseover = function(){
				// 清除定时器
				// clearInterval(timer);
			}
			
			// // 移出鼠标
			prev.onmouseout = function(){
				// timer = setInterval(run1,2500);
			}
			// 
			// 上一个
			prev.onclick = function(){
				//清除定时器
				// clearInterval(timer);
				if(index1<1){
					index1 = 4;
				}
				index1 = index1 - 2;
				run1();
				// timer = setInterval(run1,2500);
			}
			
			
			//下一个
			 next.onclick = function(){
				 run1();
			 }
			 
			 // 移入鼠标
			next.onmouseover = function(){
			// 	// 清除定时器
				// clearInterval(timer);
			}
			//  
			//  // 移出鼠标
			 next.onmouseout = function(){
				 // timer = setInterval(run1,2500);
			 }