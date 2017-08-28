require(['config'],function(){
	require(['jquery','num','cookie','jqueryUi'],function($,num,cookie){
		$('div').draggable();
		console.log(num);
		console.log(cookie);
	})
})