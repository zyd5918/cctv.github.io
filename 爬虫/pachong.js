var crawler = require('crawler')
var url = require('url')
var db = require('./db')

var indexPage = 1;

function doSpider(url) {
	var c = new crawler({
		maxConnections: 10,
		callback: function(error, result, $) {
			$('.list .o').each(function(index, item) {

				var imgUrl = $(item).find('img').attr('src')

				var imgTitle = $(item).find('.o-name').text()

				var cate = $(item).find('.o-cate').text()
				console.log(imgTitle)
				var img = new db.Img()
				img.images = imgUrl
				img.title = imgTitle
				img.cate = cate
				img.save((err)=>{
					if(err){
						console.log(err)
					}
				})
			})
			console.log(`--------第${indexPage}页读取完成---------`)

			if(indexPage < 101) {
				indexPage++
				doSpider('http://kankandou.com/book/page/' + indexPage)
			}
		}
	})
	c.queue(url)
}
doSpider('http://kankandou.com')

function saveFile(imgUrl, imgtitle) {
	var imgDir = db.connect('mongodb://localhost/img_db')
	var imgsavedName = imgDir + imgtitle + '-' + (new Date()).getTime() + '.' + imgUrl.split('.').slice(-1)
	var dl = diwnloader.download(imgUrl, imgsavedName)
	dl.start()
}