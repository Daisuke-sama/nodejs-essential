const fs = require('fs');
const http = require('http');
const file = '../assets/ussr_cars.mp4';

http.createServer((req, res) => {

    fs.readFile(file, (err, data) => {
        if (err) {
            console.log('error: ', err);
        }

        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.end(data);
    })
})
    .listen(3000, () => console.log('streaming at http://localhost:3000'));
