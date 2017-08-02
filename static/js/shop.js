//吸底导航
var cartTotal=document.getElementById('cartTotal');
var cartNav=document.getElementById('cartNav');
window.onscroll=function(){
    var h=cartTotal.offsetTop-document.documentElement.scrollTop;
    var h=cartTotal.offsetTop-document.body.scrollTop;

    if(h<=screen.height){
		cartNav.style.display='none';
    }else{
        cartNav.style.display='block';
    }
}
//------------------
$(function() {
    //反选、全选、全不选
   $('.all').click(function(){
      $(':checkbox').each(function () {
           this.checked = true;
       });
   })
  	
    $('.allno').click(function () {
        $(':checkbox').each(function () {
            this.checked = false;
        });
      
    });
    $('.anti').click(function () {
        $(':checkbox').each(function () {
            this.checked = !this.checked;
        });
        TotalPrice();
        
    });
    //当复选框勾选时
     $('#table tr').each(function(){
     	 $(this).find('input[type*=checkbox]').click(function(){
     	 	TotalPrice();
     	 })
     })
    // 数量减少
    $('.less').click(function () {
        var origVal = $(this).next();
        // var newVal = origVal - 1;
       origVal.val(parseInt(origVal.val())-1);
        if (origVal.val()<= 1) {
            origVal.val(1)
        }
        TotalPrice();
    });
    //  数量增加
    $('.plus').click(function () {
        var origVal = $(this).prev();

        origVal.val( parseInt(origVal.val())+1);
        if(origVal.val()<=1){
            origVal.val(1)
        }
        TotalPrice();

    });
    //删除
    $(document).on('click','.delete',function(){
        $(this).parent().remove();
    })
	//添加商品
    $(document).on('click','.addSale',function(){
        $('.tb1').clone().prependTo('tbody');
    })
    
    //计算总价
    
    function TotalPrice(){
       var allprice=0;
       
       $('#table tr').each(function(){
            $(this).find('input[type*=checkbox]').each(function () {
                if($(this).is(':checked')){
                   var  num=parseInt($(this).parents('#table tr').find('.num').val());
                   var  price=parseFloat($(this).parents('#table tr').find('.solidMoney').text());
                   var total=price*num;
                    allprice+=total;
                }
                $(this).closest('tr').find('.currMoney').text(total)
            });

        })
      $('.setMoney').text(allprice.toFixed(2));
    }
//  TotalPrice();
	});
	





