require.config({
	//baseUrl:'js',
	paths:{
		jquery : '../lib/jquery-3.2.1',
		jqueryUi : '../lib/jquery-ui-1.12.1/jquery-ui',
		num : 'randomNum'
	},
	shim:{
		jqueryUi : ['jquery'],
		/*randomNum : {
			exports : '../lib/randomNumber'
		}*/
	}
})