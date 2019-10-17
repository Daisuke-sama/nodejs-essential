const fs = require('fs');
const http = require('http');
const file = '../assets/ussr_cars.mp4';

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'video/mp4'});

    fs.createReadStream(file)
        .pipe(res)
        .on('error', console.error);
})
    .listen(3000, () => console.log('streaming at http://localhost:3000'));
