const fs = require('fs-extra');  
const path = require('path');     
const UPLOAD_PATH = path.join(__dirname, 'uploads');
const { getFileList } = require('./utils/fileSystemUtils');

async function fileRoute(req, res) {
    const filelist = await getFileList();
    console.log('getFileList:', filelist);
    res.send(filelist);
}

module.exports = fileRoute;
