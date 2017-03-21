var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'baidunews'
});

/* 后台页面设置 */
/* 获取新闻列表*/
router.get('/getNews', function (req, res, next) {
    connection.query('SELECT * FROM `news`', function (err, rows) {
        res.json(rows);
    });
});
// 更新新闻
router.post('/update', function (req, res, next) {
    var newsid=req.body.id,
        newstype=req.body.newstype,
        newstitle=req.body.newstitle,
        newsimg=req.body.newsimg,
        newssrc=req.body.newssrc,
        newsdate=req.body.newsdate;
    connection.query('UPDATE `news` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstype,newstitle,newsimg,newsdate,newssrc,newsid],function (err,rows) {
        console.log(rows.changedRows);
        if(!err){
            res.json('success');
        }
    });
});
// 模态框新闻值
router.get('/curnews',function (req,res) {
    var newsid=req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function (err,rows) {
        res.json(rows);
    });
});
// 删除数据
router.post('/detele',function (req,res) {
    var newsid=req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `id`=?',[newsid],function (err,result) {
if (!err){
    console.log(result.affectedRows);
    res.json('success');
}
    })
});
//插入数据
router.post('/insert',function (req,res) {
var newstitle=req.body.newstitle,
    newstype=req.body.newstype,
    newsimg=req.body.newsimg,
    newssrc=req.body.newssrc,
    newsdate=req.body.newsdate;
    connection.query('INSERT INTO `news`(`newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES (?,?,?,?,?)',[newstype,newstitle,newsimg,newsdate,newssrc],function (err,result) {
       if (!err){
           res.json('success');
           console.log(result.insertId);
       }
    });


});

module.exports = router;
