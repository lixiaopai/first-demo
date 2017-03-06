$(function(){
	$.getJSON("json/zc_nanren.json", function(data1){
		var str1 = "";
		for(var j=0;j<data1.length;j++){
			str1 += '<li class="contt">'+
					'<div class="zml-img-wrap">'+
						'<img src="' + data1[j].Src + '"/>' +
					"</div>"+
					'<div class="zc_right">'+
						'<p class="zml-p1">'+data1[j].mes+'</p>'+
						'<p class="zml-p2">'+data1[j].Info+"</p>"+
						"<div>"+
							'<p class="zml-p3"><span class="zml-span1">'+data1[j].price1+'</span><i>'+data1[j].price2+"</i></p>"+
							'<p class="zml-p4"><i class="iconfont icon-writefill"></i><span>包邮</span>非促销</p>'+
							'<p class="zml-p5"><i class="iconfont icon-selection"></i>'+data1[j].jy+'</p>'+
						"</div>"+
						'<div class="zc_sq">'+data1[j].Sheng+'</div>'+
					"</div>"+	
				"</li>"
		}
		$(".zc_cont").append(str1)
	})
})

$(function(){
    var mySwiper = new Swiper ('#lh_lunbo', {
        direction: 'horizontal',
        loop: true,
        autoplay:3000,
        initialSlide:0,
        speed:200,
        autoplayDisableOnInteraction:false,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        },
        freeModeSticky:true,
    });
    var mySwiper2 = new Swiper ('#lh_box', {
        direction: 'horizontal',
        loop: true,
    });

})