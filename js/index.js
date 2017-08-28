require(['config'],function(){
	require(['jquery','jqueryUi','num'],function($,num){
		$('div').draggable();
		console.log(num);
	})
})