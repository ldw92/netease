$(function(){
	$('.loginBtn').click(function(){
		var uname=$('username');
		var upwd=$('userpassword');

		if(uname!=''&&upwd!=''){
			$.ajax({
				type:'post',
				url:'ajax_login.php',
				dataType:'text',
				data:{
					'uname':uname,
					'upwd':upassword
				},
				succuss:function(dt){
					switch(dt){
						case '1':
						$('#ferrorhead span').eq(0).addClass('error');
						break;
						case '2':
						$('#ferrorhead span').eq(1).addClass('error');
						break;
						case '3':
						$('#ferrorhead span').eq(2).addClass('error');

					}
				}
			});
		}else{
			alert('请重新输入');
		}

	})
})