const fileRoute = express.Router();
router.post('/files', (req, res, next) => {
});
fileRoute.get('/files', async (req, res) => {
    const filelist = await fs.readdir(UPLOAD_PATH);
    console.log(filelist);
    res.send(filelist);
});
export default fileRoute;
