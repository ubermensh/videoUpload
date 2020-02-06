var express = require('express');    //Express Web Server 
var busboy = require('connect-busboy'); //middleware for form/file upload
var path = require('path');     //used for file path
var fs = require('fs-extra');       //File System - for file manipulation

const router = express.Router();

const UPLOAD_PATH = path.join(__dirname, 'uploads');

var app = express();
app.use(busboy());
app.use(express.static(UPLOAD_PATH));

/* ========================================================== 
Create a Route (/upload) to handle the Form submission 
(handle POST requests to /upload)
Express v4  Route definition
============================================================ */


router.post('/upload', (req, res, next) => {
    let fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', async function (fieldname, file, filename) {
        const filelist = await(fs.readdir(UPLOAD_PATH));
        if (filelist.includes(filename)) {
            res.send('duplicate');
        }
        else {
            console.log("Uploading: " + filename);
            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/uploads/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {    
                res.send(filelist);           //where to go next
            });
        }

    });
});

router.get('/upload', async (req, res) => {
    const filelist = await(fs.readdir(UPLOAD_PATH));
    console.log(filelist);
    res.send(filelist);
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
});


app.use(router);

var server = app.listen(3030, function() {
    console.log('Listening on port %d', server.address().port);
});
