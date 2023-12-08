class Queue {
    constructor() {
        this.store = {};
        this.front = 0; // 첫 번째 데이터를 가리키는 포인터
        this.rear = 0; // 마지막 데이터를 가리키는 포인터
    }
    size() {
        if (this.store[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }
    push(value) {
        // 큐에 데이터가 존재하지 않을 경우
        if (this.size() === 0) {
            this.store['0'] = value;
            // 큐에 데이터가 존재할 경우
        } else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }
    popleft() {
        let temp;
        // 큐에 데이터가 1개 존재하거나 데이터가 없는 경우
        if (this.front === this.rear) {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0; // 초기화 이유
            this.rear = 0;  // pop 후에도 front, rear의 값이 남아있음
            return temp;
            // 그 외의 경우
        } else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
            return temp;
        }
    }
}

let q = new Queue();
q.push(10);
q.push(20);
q.push(30);
q.push(40);
q.popleft();
for(let i in q.store) {
    console.log(q.store[i]);
}