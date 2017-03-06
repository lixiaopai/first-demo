$(function(){
	$('#f4').click(function(){		
		$('.tfenx').css('display','block')	
	})
	
	$('article').click(function(){	
		$('.tfenx').css('display','none')	
	})



		//页面加载时获取各个选项卡
		var product1 = [];
		var productCount1 = 27;
		$.get('../json/display.json',function(res){
			//console.log(res);
			var res1=eval('('+res+')')
//			alert(res1[0].imgSrc) 
			product1 = res1;
			pageCount1 = Math.ceil(product1.length/productCount1);
			addData1(1);
			
			
			
		});
		function addData1(page){
			var iNum1 = (page - 1)*27;
			var str1 = '';
			for(var i=0;i<productCount1;i++){
				if(!product1[i+iNum1]){
					break;
				}
				str1 += '<li><a href="gmyy.html">'+
							'<img src="'+product1[i+iNum1].imgSrc+'" alt=""/></a><p class="zys-t1">'+product1[i+iNum1].nav_name+'</p></li>'
			}
			$('.zys-list-set1 ul').html(str1)
		}



	//分类菜单的功能
	var i=0,j=0,k=0,m=0;	
		$.getJSON('../json/fenlei_menu.json',function(res){	
			
			//一加载就有第一个列表
			for(var i=0;i<res.length;i++){
				var option=new Option();
				option.innerHTML=res[i].name;
				option.value=res[i].name;
				$('select').eq(0).append(option);
				var _val=$('select').eq(0).val();
				//console.log($('select option:eq(0)').value)
				if($('select option:eq(0)').value==res[i].type[0].name){
					for(var k=0;k<res[i].type[0].typeName.length;k++){
						if(_val==res[i].type[0].keyword1){
							var option2=$('<option value='+res[i].type[0].typeName[k].typeName1+'>'+res[i].type[0].typeName[k].typeName1+'</option>')
							$('select').eq(1).append(option2);
							var _val2=$('select').eq(1).val()
							//添加加载同时出现图片
							for(var m=0;m<res[j].type[0].typeName[k].list1.length;m++){
							if(res[j].type[0].typeName[k].list1[m].keyword2==_val2){
								//创建li标签
								var $li=$('<li>'+
									'<img class="zys-sanji-pic1" src="'+res[j].type[0].typeName[k].list1[m].src+'"/>'+
									'<p class="zys-sanji-tit">'+res[j].type[0].typeName[k].list1[m].title+'</p>'+
									'<p class="zys-sanji-price">'+res[j].type[0].typeName[k].list1[m].price+'</p>'+
									'<p class="zys-sanji-explain">'+res[j].type[0].typeName[k].list1[m].explain+'</p>'+
									'<p class="zys-sanji-sheng">'+res[j].type[0].typeName[k].list1[m].sheng+'</p>'+
									'<span class="zys-sanji-gz"><i class="iconfont icon-like"></i>'+res[j].type[0].typeName[k].list1[m].gz+'</span>'+
								'</li>')
								$('.zml-fenlei-lists ul').append($li)
							}
							
						}
						}
						
					}
					
				}
			}
			
			//第二个列表里的内容是根据第一个得到的
			$('select').eq(0).change(function(){
				//清空div中 内容
				$('.zml-fenlei-lists ul').html('');
				//清空第二个菜单栏
				$('select:eq(1) option').remove();
				var  _val=$(this).val();
				for(var j=0;j<res.length;j++){
					if(_val==res[j].type[0].keyword1){
						for(var k=0;k<res[j].type[0].typeName.length;k++){
							var option2=new Option();
							//console.log(res[j].type[0].typeName[k].typeName1)
							option2.innerHTML=res[j].type[0].typeName[k].typeName1;
							option2.value=res[j].type[0].typeName[k].typeName1;
							$('select').eq(1).append(option2);
							var _val2=$('select').eq(1).val();
						for(var m=0;m<res[j].type[0].typeName[k].list1.length;m++){
							if(res[j].type[0].typeName[k].list1[m].keyword2==_val2){
								//创建li标签
								var $li=$('<li>'+
									'<img class="zys-sanji-pic1" src="'+res[j].type[0].typeName[k].list1[m].src+'"/>'+
									'<p class="zys-sanji-tit">'+res[j].type[0].typeName[k].list1[m].title+'</p>'+
									'<p class="zys-sanji-price">'+res[j].type[0].typeName[k].list1[m].price+'</p>'+
									'<p class="zys-sanji-explain">'+res[j].type[0].typeName[k].list1[m].explain+'</p>'+
									'<p class="zys-sanji-sheng">'+res[j].type[0].typeName[k].list1[m].sheng+'</p>'+
									'<span class="zys-sanji-gz"><i class="iconfont icon-like"></i>'+res[j].type[0].typeName[k].list1[m].gz+'</span>'+
								'</li>')
								$('.zml-fenlei-lists ul').append($li)
							}
							
						}
						}
					}
					
				}
			})
			
			//第二个change
			//第二个菜单change事件
			$('select').eq(1).change(function(){
				$('.zml-fenlei-lists ul').html('');
				var _val2=$(this).val();
				for(var j=0;j<res.length;j++){
					for(var k=0;k<res[j].type[0].typeName.length;k++){
							
						for(var m=0;m<res[j].type[0].typeName[k].list1.length;m++){
							if(res[j].type[0].typeName[k].list1[m].keyword2==_val2){
								//创建li标签
								var $li=$('<li>'+
									'<img class="zys-sanji-pic1" src="'+res[j].type[0].typeName[k].list1[m].src+'"/>'+
									'<p class="zys-sanji-tit">'+res[j].type[0].typeName[k].list1[m].title+'</p>'+
									'<p class="zys-sanji-price">'+res[j].type[0].typeName[k].list1[m].price+'</p>'+
									'<p class="zys-sanji-explain">'+res[j].type[0].typeName[k].list1[m].explain+'</p>'+
									'<p class="zys-sanji-sheng">'+res[j].type[0].typeName[k].list1[m].sheng+'</p>'+
									'<span class="zys-sanji-gz"><i class="iconfont icon-like"></i>'+res[j].type[0].typeName[k].list1[m].gz+'</span>'+
								'</li>')
								$('.zml-fenlei-lists ul').append($li)
							}
							
						}
					}
				}	
														
			})
		
		})



	
	if(localStorage.getItem('zhanghao')!=undefined){
		
		$('#lpj-yhm').text(localStorage.getItem('zhanghao'))
		$('#lpj-yhm').parent().click(function(){
			return false;
		})
		
	}else if(localStorage.getItem('zhanghao')==undefined){
		$('#lpj-yhm').text('登录/注册')
	
		$('#lpj-mynews').click(function(){
				alert('请登录')
				return false;
		})
		$('#lpj-mydingyue').click(function(){
				alert('请登录')
				return false;
		})
		$('#lpj-myshoucang').click(function(){
				alert('请登录')
				return false;
		})
		$('#lpj-talk').click(function(){
			alert('请登录')
			return false;
		})
		$('#lpj-mycart').click(function(){
			alert('请登录')
			return false;
		})
		$('#lpj-zhanghu').click(function(){
			alert('请登录')
			return false;
		})
		$('#lpj-guanli').click(function(){
			alert('请登录')
			return false;
		})
	}
	
	
	
	//返回历史记录上个页面。
	var product = [];
	var productCount = 7;
		$.get('../json/display.json',function(res){
			product =eval('('+res+')');
			pageCount = Math.ceil(product.length/productCount);
			addData(1);
			
		})
		function addData(page){
				var iNum = (page - 1)*7;
				var str = ''
				for(var i=0;i<productCount;i++){
					if(!product[i+iNum]){
						break;
					}
					str += ('<li>'+
							'<a href="fenlei-menu.html">'+
								'<img src="'+product[i+iNum].imgSrc+'" alt=""/>'+
							'</a>'+
							'<p class="zys-t1">'+product[i+iNum].nav_name+'</p>'+
						'</li>')
				}
		//		console.log(str)
				$('.zys-list-set2 ul').html(str)
		}
	//打开搜索页面
	var $btn = $('.zys-go')
	$btn.click(function(){
		window.open('../html/search.html')
	})
		
	
	
})



$('footer a').click(function(){
	
	var a=$('#tdiv span').length
	
     $('article').append($('<div id="tdiv"><em></em><span></span></div>'))

     	
     	$('#tdiv span').eq(a).html($('footer input').val())
    
    setTimeout(function(){
    	if($('#tdiv').length==1){
    	
    	 $('article').append($('<div class="tdiv"><em></em><span>对不起客服人员不在线</span></div>'))
    	
    }
    	
    },1000)
    
	
	
	
})

$(function(){
	var zhanghao=localStorage.getItem('zhanghao')
	var mima=localStorage.getItem('mima')
	$('#username').val(zhanghao)
	$('#userpass').val(mima)
	
	$('#logon').click(function(){
		if(username.value==zhanghao&&userpass.value==mima){
			location.href="../html/gerenzhongxin.html"
		}else{
			alert('账号或密码错误')
		}
	})
		
	
})

$(function(){
	$('#zhuxiao').click(function(){
		if(confirm('确定要注销么?')){
			localStorage.removeItem('zhanghao')
			localStorage.removeItem('mima')
			location.href="../html/gerenzhongxin.html"
		}
		
	})
})


$('#verifyx').click(function(){
	
	
	$('#verifyx').html(yzm())
	
	})
$('#verifyx').html(yzm())
function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }


            $('#fab').click(function(){
            	
            fabiao()
            })
            $('#fabpl').click(function(){
            	
            	fabiao()
            })
             
				function fabiao(){
					
					if(!$('#verifyx').html()==$('#verify').val()){
						
						               alert('验证码有误')
						
					                 }else{
					                 	
					                 	
					                 	alert('评论成功待审核')
					                 	
					                 	
					                 	 
					                 }
				
				}
				
          
                   $('.dengj span').click(function(){
                   	
                   
                   	 $ (this).css ('background-color', '#fa6801').siblings ('span').css ('background-color', '');
                   	 $ (this).css ('color', '#fff').siblings ('span').css ('color', '');
                   	
                   })
                   
                   
                   
                   $('.duh textarea').focus(function(){
                   	
                   $('.pingj').css('display','block')
                   	
                   	
                   	
                   })

$(function(){
	var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	function _getRandom(_min,_max){
		return parseInt(Math.random()*(_max-_min)+_min)
	}
	function sj(){
		var sjstr=""
		for(var i=0; i<4;i++){
		sjstr+=arr[ _getRandom(0,arr.length)]
		}
		return sjstr
	}
	$('#lpj-sjyz').html(sj())
	/*******以上是验证码的随机数********/
	
	var yhm=document.getElementById('regyhm')
	var mima=document.getElementById('regpass')
	$('#lpj-zhuce').click(function(){
		localStorage.setItem('zhanghao',regyhm.value)
		localStorage.setItem('mima',regpass.value)
		alert('注册成功！')
		location.href="logon.html"
	})
		
	
})


$(function(){
	
	
	//动态加载列表里的商品列表
	$.getJSON('../json/zc.json',function(res){
		var str_vss='';
		var str_yy="";
		var str_qq="";
		var str_mt="";
		var str_by="";
		var str_man="";
		var str_man2='';
		var str_woman='';
		var str_woman2='';
		var str_parent='';
		var str_child='';
		var str_child2='';
		var str_sanGao='';
		//维生素专场页面
		for(var i=0;i<10;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_vss+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'"/>'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-vShengSu ul').html(str_vss)
		//眼药专场页面
		for(var i=10;i<17;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_yy+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-yanYao ul').html(str_yy)
		//情趣专场
		//console.log(res.length)
		for(var i=17;i<22;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_qq+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-qingQu ul').html(str_qq);
		//美瞳专场
		for(var i=22;i<32;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_mt+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-meiTong ul').html(str_mt);
		//包邮
		for(var i=32;i<42;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_by+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-baoYou ul').html(str_by);
		//男人专场
		for(var i=42;i<52;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_man+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-man .ul1').html(str_man);
		//男人专场222
		for(var i=52;i<62;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_man2+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-man .ul2').html(str_man2);
		//女人专场
		for(var i=62;i<72;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_woman+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-woman .ul1').html(str_woman);
		//女人专场222
		for(var i=72;i<82;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_woman2+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-woman .ul2').html(str_woman2);
		//父母专场
		for(var i=82;i<92;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_parent+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-parent ul').html(str_parent);
		//孩子专场
		for(var i=92;i<102;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_child+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-child .ul1').html(str_child);
		//孩子专场2222
		for(var i=102;i<112;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_child2+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-child .ul2').html(str_child2);
		//三高专场
		for(var i=112;i<122;i++){
			str2='';
			if(res[i].Intro!=undefined){
				str2='<div class="zml-conts-intro">'+res[i].Intro+'</div>'
			}
			str_sanGao+='<li><a href="details.html">'+
				'<div class="zml-conts-img">'+
					'<img src="'+res[i].Src+'" alt="'+res[i].Info+'">'+
					'<p>'+res[i].Info+'</p>'+
				'</div>'+
				str2+
				'<div class="zml-conts-sheng">'+res[i].Sheng+'</div>'+
				'<div class="zml-conts-pri">'+
					'<font class="pri1">'+res[i].Pri1+'</font>'+
					'<font class="pri2">'+res[i].Pri2+'</font>'+
					'<p>查看详情</p>'+
				'</div>'+
			'</a></li>'
		}
		$('.zml-main-lists-sanGao ul').html(str_sanGao);
	})
	
	
})

$(function() {
//免费试用
	$.getJSON("../json/zc_second.json", function(data) {
		var str = "";
		for(var i = 0; i < data.length; i++) {
			str += "<li>" +
				'<img src="' + data[i].imgSrc + '"/>' +
				'<div class="zc_second_right">' +
				'<a href="#">' + data[i].infors + '</a>' +
				'<p class="zc_guanzhu">' + data[i].guanzhu + "</p>" +
				'<p class="zc_pic">' + data[i].price + '</p>' +
				'<div class="zc_fen">' +
				'<p class="zc_p1">' + data[i].fen + "</p>" +
				'<p class="zc_p2">立即试用</p>' +
				"</div>" +
				"</div>" +
				"</li>"
		}
		$("#zc_second_cont").append(str)
	})

//头部返回功能
$('.zjc-head span').eq(0).click(function(){
	window.history.go(-1);
})
	
	

})