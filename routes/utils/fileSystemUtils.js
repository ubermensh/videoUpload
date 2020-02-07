const fs = require('fs-extra');  
const path = require('path');     

const UPLOAD_PATH = path.join(__dirname, '../..', 'uploads');

async function getFileList(req, res) {

    const filelist = await fs.readdir(UPLOAD_PATH);
    return filelist;
};
async function writeFileToDirectory(file){
};


module.exports = { getFileList, UPLOAD_PATH };
