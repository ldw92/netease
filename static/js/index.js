/**
 * Created by ldwpc on 2017/5/11.
 */
/*轮播图*/
//第一个
var show=document.getElementById('show');
var lis=show.children[0].children;
var arrowright=document.getElementById('arrowright');
var arrowleft=document.getElementById('arrowleft');
var circlelist=document.getElementById('circlelist');
var lists=circlelist.children[0].children;
// console.log(lists);
var run;
var index=0;
function autoplay(){
    if(run){
        return;
    }
    run=setInterval(function(){
        lis[index].removeAttribute('class','link');
        lists[index].removeAttribute('class','listactive')
        index++;
        if(index===lis.length){
            index=0;
        }
        lis[index].setAttribute('class','link');
        lists[index].setAttribute('class','listactive');
    },2000);
}
autoplay();
show.onmouseover=function(){
    clearInterval(run);
    run=null;
    arrowright.style.display='block';
    arrowleft.style.display='block';
}

show.onmouseout=function(){
    autoplay();
    arrowright.style.display='none';
    arrowleft.style.display='none';
}
arrowright.onclick=function() {
    lis[index].removeAttribute('class', 'link');
    lists[index].removeAttribute('class', 'listactive');
    index++;
    if (index === lis.length) {
        index = 0;
    }
    lis[index].setAttribute('class', 'link');
    lists[index].setAttribute('class', 'listactive');
}
arrowleft.onclick=function(){
    lis[index].removeAttribute('class','link');
    lists[index].removeAttribute('class','listactive')
    index--;
    if(index<0){
        index=lis.length-1;
    }
    lis[index].setAttribute('class','link');
    lists[index].setAttribute('class','listactive');
 }

 for(var i=0;i<lists.length;i++){
     lists[i] .setAttribute('index-data',i);
     lists[i].onmouseover=function(){
       lists[index].removeAttribute('class');
       lis[index].removeAttribute('class');
       index=this.getAttribute('index-data');
       lists[index].setAttribute('class','listactive');
       lis[index].setAttribute('class','link');
    }
 }
// 第一个轮播图结束
//轮播结束
//楼层开始
  $(function(){
      //获取电梯高度
    var h=$('#floor').height();
    //获取可视窗口的高度
      var vH=$(window).height();
      $('#floor').css('margin-top','-1*h/2');
      //电梯导航开始的位置
      var sH=vH/2;
      var productHeight1=$('.g-row').eq(0).offset().top+100;
      var productHeight2=$('.g-row').eq(1).offset().top+400;
      var productHeight3=$('.g-row').eq(2).offset().top+400;
      var productHeight4=$('.g-row').eq(3).offset().top+400;
      var productHeight5=$('.g-row').eq(4).offset().top+400;
      var productHeight6=$('.g-row').eq(5).offset().top+400;
      var productHeight7=$('.g-row').eq(6).offset().top+400;
      var productHeight8=$('.g-row').eq(7).offset().top+400;
      var productHeight9=$('.g-row').eq(8).offset().top+400;
      var productHeight10=$('.g-row').eq(9).offset().top+400;
      function onScroll(){
          var st=$(this).scrollTop();
          console.log(st);
          var fH1=productHeight1-st;
          var fH2=productHeight2-st;
          var fH3=productHeight3-st;
          var fH4=productHeight4-st;
          var fH5=productHeight5-st;
          var fH6=productHeight6-st;
          var fH7=productHeight7-st;
          var fH8=productHeight8-st;
          var fH9=productHeight9-st;
          var fH10=productHeight10-st;
          if(fH1<=sH){
                  $('#floor').stop().fadeIn();
				   $('#floor li').eq(0).addClass('curr').siblings().removeClass('curr');
              }else{
                  $('#floor').stop().fadeOut();
              }
          if(fH2<=sH){

              $('#floor li').eq(1).addClass('curr').siblings().removeClass('curr');
          }
          if(fH3<=sH){
              $('#floor li').eq(2).addClass('curr').siblings().removeClass('curr');
          }
          if(fH4<=sH){
              $('#floor li').eq(3).addClass('curr').siblings().removeClass('curr');
          }
          if(fH5<=sH){

              $('#floor li').eq(4).addClass('curr').siblings().removeClass('curr');
          }
          if(fH6<=sH){

              $('#floor li').eq(5).addClass('curr').siblings().removeClass('curr');
          }
          if(fH7<=sH){

              $('#floor li').eq(6).addClass('curr').siblings().removeClass('curr');
          }
          if(fH8<=sH){

              $('#floor li').eq(7).addClass('curr').siblings().removeClass('curr');
          }
          if(fH9<=sH){

              $('#floor li').eq(8).addClass('curr').siblings().removeClass('curr');
          }
          if(fH10<=sH){
              $('#floor li').eq(9).addClass('curr').siblings().removeClass('curr');
          }
      }
     $(window).scroll(onScroll);
        $('#floor li').click(function(){
            $(window).off('scroll');
            $(this).addClass('curr').siblings().removeClass('curr');
            if($(this).index()===0){
                $('html,body').stop().animate({
                    'scrollTop':productHeight1
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===1){
                $('html,body').stop().animate({
                    'scrollTop':productHeight2
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===2){
                $('html,body').stop().animate({
                    'scrollTop':productHeight3
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===3){
                $('html,body').stop().animate({
                    'scrollTop':productHeight4
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===4){
                $('html,body').stop().animate({
                    'scrollTop':productHeight5
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===5){
                $('html,body').stop().animate({
                    'scrollTop':productHeight6
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===6){
                $('html,body').stop().animate({
                    'scrollTop':productHeight7
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===7){
                $('html,body').stop().animate({
                    'scrollTop':productHeight8
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===8){
                $('html,body').stop().animate({
                    'scrollTop':productHeight9
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
            if($(this).index()===9){
                $('html,body').stop().animate({
                    'scrollTop':productHeight10
                },800,function(){
                    $(window).scroll(onScroll);
                })
            }
        })
  })

/*楼层结束 */
/*二级菜单*/
$(function(){
   $('.list li').mouseover(function(){
       $(this).find('div').show();
   });
    $('.list li').mouseout(function(){
        $(this).find('div').hide();
    });
})
/*二级菜单结束*/
/* 广告开始*/
var ad=document.getElementById('ad');
var stepX=1;
var stepY=1;
var run=0;
function move(){
    if(run){
        return;
    }
   run= setInterval(function(){
        var x=ad.offsetLeft+stepX;
        var y=ad.offsetTop+stepY;
        var cW=document.documentElement.clientWidth;
        var cH=document.documentElement.clientHeight;
        if(x<=0){
            x=0;
            stepX*=-1;
        }
        if(x>=cW-ad.offsetWidth){
            x=cW-ad.offsetWidth;
            stepX*=-1;
        }
        if(y<=0){
            y=0;
            stepY*=-1;
        }
        if(y>=cH-ad.offsetHeight){
            y=cH-ad.offsetHeight;
            stepY*=-1;
        }
        ad.style.left=x+'px';
        ad.style.top=y+'px';
    },20);
}
move();
ad.onmouseover=function(){
    clearInterval(run);

    run=undefined;
}

ad.onmouseout=function(){
    move();
}
var close=document.getElementsByClassName('x');
close[0].onclick=function(){
    ad.style.display='none';

};
//广告结束
//----------------------------------
//吸顶导航

$(window).scroll(function () {
    var t=$(window).scrollTop();
    if(t>200){
        $('#funcTabWrap').show().slideDown(3000);
    }else{
        $('#funcTabWrap').hide().slideUp(3000);
    }
});





