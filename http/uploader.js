const {createServer} = require('http');
const {stat, createReadStream, createWriteStream} = require('fs');
const {promisify} = require('util');
const multiparty = require('multiparty');

const filename = '../assets/ussr_cars.mp4';
const fileinfo = promisify(stat);

const respondWithVideo = async (req, res) => {

    const {size} = await fileinfo(filename);
    const range = req.headers.range;  // for Safari being able to show the video stream
    if (range) {
        let [start, finish] = range.replace(/bytes=/, '').split('-');
        start = parseInt(start, 10);
        finish = finish ? parseInt(finish, 10) : size - 1;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${finish}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': (finish - start) + 1,
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
};

createServer((req, res) => {
    if (req.method === 'POST') {

        let form = new multiparty.Form();

        form.on('part', part => {
            part.pipe(createWriteStream(`../www/files/uploads/${part.filename}`))
                .on('close', () => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(`<h1>Uploaded: ${part.filename}</h1>`);
                })
        });

        form.parse(req);

    } else if (req.url === '/video') {
        respondWithVideo(req, res);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
        <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload file</button>
</form>`)
    }
}).listen(3000, () => console.log('server running - 3000'));
