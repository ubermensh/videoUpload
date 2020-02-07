const fs = require('fs-extra');  
const path = require('path');     
const { getFileList, UPLOAD_PATH } = require('./utils/fileSystemUtils');

function  uploadFilesRoute (req, res, next) {
    let fstream;
    let filelist;
    req.pipe(req.busboy);
    req.busboy.on('file', async function (fieldname, file, filename) {
        filelist = await getFileList();
        if (filelist.includes(filename)) {
            console.log('duplicate', filename);
            res.sendStatus(409);
        }
        else {
            console.log("Uploading: " + filename);
            fstream = fs.createWriteStream(`${UPLOAD_PATH}/${filename}`);
            file.pipe(fstream);
            fstream.on('close', async function () {    
                filelist = await getFileList();
                res.send(filelist);        
            });
        }
    });
};
(req, res, next) => {
}
module.exports = uploadFilesRoute;
