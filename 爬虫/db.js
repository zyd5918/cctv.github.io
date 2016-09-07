var db = require('mongoose')

db.connect('mongodb://localhost/img_db')


var Img = db.model('img',{
	images:{type:String,default:""},
	title:{type:String,default:""},
	cate:{type:String,default:""}
})
module.exports = {
	Img:Img
}

