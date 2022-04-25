const express = require('express')
const router = express.Router()
const sqlite3 = require("sqlite3").verbose();

// middleware that is specific to this router

// router.use((req, res, next) => { console.log('Time: ', Date.now()) next() })

const db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err => {

  if (err) { return console.log(err.message); } console.log("connection successfully ");

  const sql2 = `SELECT * FROM indexs `;

  db.all(sql2, [], (err, rows) => {

    if (err) { return console.error(err.message) }        // console.log(rows);

    router.get('/', function (req, res) {
      res.render(__dirname + '/../views/index.html', { arr: rows }); })
    
  })
}));
///////////////////////////////////////////////
router.post('/', (req, res) => {

  var p = 1912;
  var pass = req.body.pass;

   console.log("password = " +  pass );

  if ( p == pass) {
    db.run("INSERT INTO indexs(link,img_path,title,html,updown) VALUES(?,?,?,?,?)", req.body.link, req.body.img, req.body.title, req.body.html, req.body.updwon,
      (err) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(req.body.title + ' was added Sucessfully');
      })
  }
  else{
    console.log("Wrong Password"); 
    res.send("<h1>Wrong Password</h1>");
  }
});
///////////////////////////////////////////////
router.get('/Prog.html', function (req, res) {
  res.render(__dirname + '/../views/Prog.html'); })
router.get('/0_0.html', function (req, res) {
  res.render(__dirname + '/../views/0_0.html'); })
router.get('/English.html', function (req, res) {
  res.render(__dirname + '/../views/English.html'); })
router.get('/Marketing.html', function (req, res) {
  res.render(__dirname + '/../views/Marketing.html'); })
router.get('/JS.html', function (req, res) {
  res.render(__dirname + '/../views/JS.html'); })
router.get('/Py.html', function (req, res) {
  res.render(__dirname + '/../views/Py.html'); })
router.get('/PHP.html', function (req, res) {
  res.render(__dirname + '/../views/PHP.html'); })
router.get('/Security.html', function (req, res) {
  res.render(__dirname + '/../views/Security.html'); })
router.get('/UI-UX.html', function (req, res) {
  res.render(__dirname + '/../views/UI-UX.html'); })          
router.get('/JOB.html', function (req, res) {
  res.render(__dirname + '/../views/JOB.html'); })  
router.get('/Others.html', function (req, res) {
  res.render(__dirname + '/../views/Others.html'); })  
router.get('/Eg.html', function (req, res) {
  res.render(__dirname + '/../views/Eg.html'); })  
router.get('/finance.html', function (req, res) {
  res.render(__dirname + '/../views/finance.html'); })  
                  
  
  


module.exports = router