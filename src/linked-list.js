export function Node(data, next) {
    this.data = data;
    this.next = next;
}

export function LinkedList(node) {
    this.node = node;

    this.read = index => {
        let currentNode = this.node;
        let currentIndex = 0;

        while (currentIndex < index) {
            if (!currentNode.next) {
                throw new Error("OutOfBounds");
            }

            currentNode = currentNode.next;
            currentIndex += 1;
        }

        return currentNode.data;
    };

    this.indexOf = value => {
        let currentNode = this.node;
        let currentIndex = 0;

        while (true) {
            if (currentNode.data === value) {
                return currentIndex;
            }

            if (!currentNode.next) {
                return null;
            }

            currentNode = currentNode.next;
            currentIndex += 1;
        }
    };

    this.insertAtIndex = (index, data) => {
        const node = new Node(data);

        if (index === 0) {
            node.next = this.node;
            this.node = node;
        } else {
            let currentNode = this.node;
            let currentIndex = 0;

            while (currentIndex < (index - 1)) {
                currentNode = currentNode.next;
                currentIndex += 1;
            }

            node.next = currentNode.next;
            currentNode.next = node;
        }
    };

    this.deleteAtIndex = index => {
        if (index === 0) {
            this.node = node.next;
        } else {
            let currentNode = this.node;
            let currentIndex = 0;

            while (currentIndex < (index - 1)) {
                currentNode = currentNode.next;
                currentIndex += 1;
            }

            let nodeAfterDeletedNode = currentNode.next.next;
            currentNode.next = nodeAfterDeletedNode;
        }
    };
}
