export function Node(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
}

export function DoublyLinkedList(first, last) {
    this.first = first;
    this.last = last;

    this.insertAtEnd = data => {
        const node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.previous = this.last;
            this.last.next = node;
            this.last = node;
        }
    };

    this.removeFromFront = () => {
        const removed = this.first;
        this.first = this.first.next;
        return removed;
    };
}

export function Queue() {
    const list = new DoublyLinkedList();

    this.enque = data => list.insertAtEnd(data);

    this.deque = () => {
        const removed = list.removeFromFront();
        return removed.data;
    };

    this.tail = () => list.last.data;
}
