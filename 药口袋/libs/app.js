window.onload=function(){
//	var myIScroll=new IScroll('.zjc-nav',{
//		scrollX:true,
//		mouseWheel: true,
//  	scrollbars: false
//})
	var mySwiper = new Swiper ('#a', {
			direction: 'horizontal',
//		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
//		    observeParents:true,//修改swiper的父元素时，自动初始化swiper
		    
		    pagination : '.swiper-pagination',
//			uniqueNavElements :false,
			paginationClickable :true
		 })
	
	
	var spans=$(".zjc-navs").find("span")
	var shuzu=['感冒排行','男性排行','女性排行','肝胆排行','口耳鼻喉', '心脑血管','皮肤排行', '胃肠排行','神经系统','肿瘤用药']
	for(var i=0;i<spans.length;i++){
		spans[i].innerHTML=shuzu[i]	
	}
	document.addEventListener('touchend',function(){
		var ss=$(".zjc-navs").find("span");
		for(var q=4;q<ss.length;q++){
			if(ss[q].className=="swiper-pagination-bullet swiper-pagination-bullet-active"){
				$('.zjc-nav').scrollLeft((25*q*-3))
			}
		}
	}, false);





function ss(k){
			$.getJSON("../json/chart"+(k+1)+".json",function(data){
				var str="";
				for(var i=0;i<data.length;i++){	
					str+='<li><a href="../html/details.html">'+
						'<div class="div1"><span>'+data[i].num+'</span></div>'+
						'<div class="div2"><img src='+data[i].img+'></div>'+
						'<div class="div3"><p>'+data[i].cont+'</p></div>'+
						'<div class="zjc-ul1-box1">'+
							'<i class="iconfont">&#xe6ce;</i>'+
							'<b>'+data[i].volume+'笔交易</b>'+
						'</div>'+
					'</a></li>'
				}	
				$("#a .zjc-ul1").eq(k).append(str);
				if(++k==10){
					return;
				}
				ss(k)
			})
		}
		ss(0)
}
	
				