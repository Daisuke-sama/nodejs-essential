function hideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-z]/g, 'X'));
    });
}

hideString('Hey!', hidden => {
    console.log(hidden);
});
console.log('end');


function delay(secs, cb) {
    setTimeout(cb, secs*1000);
}
delay(2, () => {
    console.log('2 secs');
    delay(1, () => {
        console.log('3 secs');
        delay(1, () => {
            console.log('4 secs');
        })
    });
});
