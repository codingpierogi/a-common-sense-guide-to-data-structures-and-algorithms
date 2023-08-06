export class Person {
    constructor(name, friends = [], visited = false) {
        this.name = name;
        this.friends = friends;
        this.visited = visited;
    }

    addFriends(...friends) {
        this.friends.push(...friends);
    }

    print() {
        const reset = [];
        const queue = new Queue();

        reset.push(this);
        queue.enque(this);
        this.visited = true;

        while (queue.size() > 0) {
            let current = queue.deque();
            console.log(current.name);

            for (let friend of current.friends) {
                if (!friend.visited) {
                    reset.push(friend);
                    queue.enque(friend);
                    friend.visited = true
                }
            }
        }

        for (let friend of reset) {
            friend.visited = false;
        }
    }
}

class Queue {
    constructor() {
        this.q = [];
    }

    enque(item) {
        this.q.push(item);
    }

    deque() {
        return this.q.shift();
    }

    size = () => this.q.length;
  }
