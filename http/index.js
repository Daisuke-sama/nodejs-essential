const {createServer} = require('http');
const {stat, createReadStream} = require('fs');
const {promisify} = require('util');

const filename = '../assets/ussr_cars.mp4';
const fileinfo = promisify(stat);

createServer(async (req, res) => {

    const {size} = await fileinfo(filename);
    const range = req.headers.range;  // for Safari being able to show the video stream
    if (range) {
        let [start, finish] = range.replace(/bytes=/, '').split('-');
        start = parseInt(start, 10);
        finish = finish ? parseInt(finish, 10) : size - 1;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${finish}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': (finish-start)+1,
            'Content-Type': 'video/mp4'
        });

        createReadStream(filename, {start, finish}).pipe(res);

    } else {
        res.writeHead(200, {
            'Content-Length': size,
            'Content-Type': 'video/mp4'
        });
        createReadStream(filename).pipe(res);
    }
}).listen(3000, () => console.log('server running - 3000'));
