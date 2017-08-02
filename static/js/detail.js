/**
 * Created by ldwpc on 2017/5/12.
 */
   /*放大镜*/
    var show=document.getElementById('show');
    var tool=document.getElementById('tool');
    var bigshow=document.getElementById('bigshow');
    console.log(bigshow);
    var bigImg=document.getElementById('bigImg');
    show.onmouseover=function(){
        tool.style.display='block';
        bigshow.style.display='block';
    }
    show.onmouseout=function(){
        tool.style.display='none';
        bigshow.style.display='none';
    }
    show.onmousemove=function(e){
        var x=e.pageX-show.offsetLeft-tool.offsetWidth/2-100;
        var y=e.pageY-show.offsetTop-tool.offsetHeight/2-280;
        if(x<=0){
            x=0;
        }
        if(x>=(show.offsetWidth-tool.offsetWidth)){
            x=show.offsetWidth-tool.offsetWidth;
        }
        if(y<=0){
            y=0;
        }
        if(y>=(show.offsetHeight-tool.offsetHeight)){
            y=show.offsetHeight-tool.offsetHeight;
        }
        tool.style.left=x+'px';
        tool.style.top=y+'px';
        // var newx=show.offsetWidth*bigshow.offsetWidth/tool.offsetWidth;
        // var newy=show.offsetHeight*bigshow.offsetHeight/tool.offsetHeight;
        bigImg.style.left=-x+'px';
        bigImg.style.top=-y+'px';
    }
    var lists=document.getElementById('lists');
    var smallImg=document.getElementById('smallImg')
    var lis=lists.children[0].children;
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            smallImg.src=this.children[0].src;
            bigImg.src=this.children[0].src;
        }
    }
//    ----------------------------
//三级联动
var pro=document.getElementById('pro');
var city=document.getElementById('city');
var county=document.getElementById('county');
var pro_str=' <option value="">请选择</option>';
for(var i in address[0]){
    pro_str+='<option value="0,'+i+'">'+address[0][i]+'</option>';
}
pro.innerHTML=pro_str;
pro.onchange=function(){
    if(!this.value){
        city.style.display='none';
        return;
    }
    city.style.display='inline-block';
    county.style.display='none';

    var city_str=' <option value="">请选择</option>';
    for(var i in address[this.value]){
        city_str+='<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
    }
    city.innerHTML=city_str;
}
city.onchange=function(){
    var county_str='<option value="">请选择</option>';
    for(var i in address[this.value]){
        county_str+='<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
    }
    if(!this.value){
        county.style.display='none';
        return;
    }
    county.style.display='block';
    county.innerHTML=county_str;
}






