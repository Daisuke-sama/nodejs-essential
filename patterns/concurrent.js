const logUpdate = require('log-update');
const toX = () => 'X';
const delay = secs => new Promise(resolve => {
    setTimeout(resolve, secs * 1000);
});

const tasks = [
    delay(3),
    delay(7),
    delay(2),
    delay(1),
    delay(3),
    delay(6),
    delay(8),
    delay(7),
    delay(10),
    delay(5),
    delay(8),
    delay(7),
];


class PromiseQueue {
    constructor(promises = [], concurrentCount = 1) {
        this.concurrent = concurrentCount;
        this.total = promises.length;
        this.todo = promises;
        this.running = [];
        this.complete = [];
    }

    get runAnother() {
        return (this.running.length < this.concurrent) && this.todo.length;
    }

    drawTasks() {
        const { complete, running, todo } = this;
        logUpdate(`
        
        todo: [${todo.map(toX)}]
        running: [${running.map(toX)}]
        complete: [${complete.map(toX)}]
        
        `)
    }

    run() {
        while (this.runAnother) {
            let promise = this.todo.shift();
            promise.then(() => {
                this.complete.push(this.running.shift());
                this.drawTasks();
                this.run();
            });
            this.running.push(promise);
            this.drawTasks();
        }
    }
}

const delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
