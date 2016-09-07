var myApp = new Framework7()

var $$ = Framework7.$

var mainView = myApp.addView('.view-main',{
	dynmaicNavbar:true
})

$$(document).on('pageInit',function(e){
	var page = e.detail.page

	if (page.name === 'about') {
		myApp.alert('Here coms About page')
	}
})

$$(document).on('pageInit','.page[data-page="about"]',function(e){
	myApp.alert('Here comes About page')
})