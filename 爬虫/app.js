var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db')
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/book/:page', (req, res)=>{
    var page = req.params.page
    page = Number(page)||1
    var pageSize=16
   db. Img.find().count((err,totalCount)=>{
    	if(err){
    		
    	}
    	else {
      var pageCount = Math.ceil(totalCount/pageSize)
      
      if (pageCount<page) {
      	res.json({status:"n",msg:"以到最后一页"})
      }
      else{
      	db.Img.find().skip((page - 1)*pageSize).limit(pageSize).exec((err,data)=>{
      		 if(err){
            res.json({status:"n",msg:"返回数据失败"})
          }
          else{
            res.json({status:"y",msg:"返回数据成功",data:data})
          }
      	})
      }
    }
    })
  

})








app.listen(8888, (req, res) => {
    console.log('服务器运行成功')
})