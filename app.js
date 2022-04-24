const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000; // || 3000
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static('images'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));

/*********************************************************************/ /*Database*/
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err => {

    if (err) { return console.log(err.message); }

    console.log("connection successfully ");

    const sql2 = `SELECT * FROM indexs `;

    db.all(sql2, [], (err, rows) => {

        if (err) { return console.error(err.message) }

        // console.log(rows);

        app.get('/', function (req, res) {
            res.render(__dirname + '/views/index.html', { arr: rows });
        })

    })
////////////////////////////////////////////////////////////////////

    app.post('/', (req, res) => {
 
         db.run("INSERT INTO indexs(link,img_path,title,html,updown) VALUES(?,?,?,?,?)",req.body.link,req.body.img,req.body.title,req.body.html,req.body.updwon,
         (err) => {
            if(err) {
                return console.log(err.message); 
            }
            console.log(req.body.title+ ' was added Sucessfully');
        })
    });

    
    /*********************************************************************/
    app.listen(port, () => console.log(`Listening on port ${port}`));
    // db.close((err) => { if (err) { return console.error(err.message) } })
}));