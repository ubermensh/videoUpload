const express = require('express');   
const busboy = require('connect-busboy'); 
const cors = require('cors');
const fs = require('fs-extra');  
const getFilesRoute = require('./routes/getFilesRoute');
const uploadFilesRoute = require('./routes/uploadFilesRoute'); 
const path = require('path');     
const router = express.Router();
const UPLOAD_PATH = path.join(__dirname, 'uploads');

var app = express();
app.use(cors());
app.use(busboy());
app.use('/video', express.static(UPLOAD_PATH));

router.post('/files', uploadFilesRoute);

router.get('/files', getFilesRoute);

app.use(router);

const server = app.listen(3030, function() {
    console.log('Listening on port %d', server.address().port);
});
