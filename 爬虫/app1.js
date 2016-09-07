var crawler = require('crawler')
var url = require('url')

/*******
 *
 * jquery元素选择器使用技巧
 * 快速入门
 * $('#id') //////根据元素标签的id选择元素
 * $('.className') /////根据元素的classs值返回数组
 * $('div') /////选择div标签
 * <div class="container"></div>
 * $('.className a[target="_blank"]') /////选择对应class内部的所有包含target="blank"的a标签
 *
 *
 *
 */

////页面索引
var indexPage = 1;
function doSpider(url){
  var c = new crawler({
      maxConnections : 10,
      callback : function (error, result, $) {
          $('.list .o').each(function(index, item) {
              /////图片路径
              var imgUrl = $(item).find('img').attr('src');

              /////标题
              var imgTitle = $(item).find('.o-name').text();

              ///分类
              var cate = $(item).find('.o-cate').text();

              console.log(imgTitle);
          });
          console.log(`--------第${indexPage}页读取完成--------`);
          if(indexPage<101){
            indexPage++;
            doSpider('http://kankandou.com/book/page/'+indexPage) ////递归
          }
      }
  });
  c.queue(url);
}

doSpider('http://kankandou.com')
