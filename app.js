
const http =  require('http');
const axios = require('axios') 
const express = require('express') 
const app = express() 
const apiRoutes = express.Router()
app.use('/', apiRoutes)

let data = {}
axios.defaults.headers = {
  'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
}
axios.get('https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq')
     .then(res=>{
      data = res.data
      console.log(res.data)
     })

 http.createServer(function (request,response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //response.writeHead("Content-Type", "application/json;charset=utf-8");
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    response.end(JSON.stringify(data));
    console.log(JSON.stringify(data))
     
 }).listen(8085);
 