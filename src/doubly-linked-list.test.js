import { test } from "tape";

import { DoublyLinkedList, Queue } from "./doubly-linked-list.js";

test("doublylinkedlist should insert first node at end", t => {
    t.plan(2);

    const list = new DoublyLinkedList();
    list.insertAtEnd("a");

    t.equal(list.first.data, "a");
    t.equal(list.last.data, "a");
});

test("doublylinkedlist should insert second node at end", t => {
    t.plan(2);

    const list = new DoublyLinkedList();
    list.insertAtEnd("a");
    list.insertAtEnd("b");

    t.equal(list.first.data, "a");
    t.equal(list.last.data, "b");
});

test("doublylinkedlist should remove from front", t => {
    t.plan(2);

    const list = new DoublyLinkedList();
    list.insertAtEnd("a");
    list.insertAtEnd("b");
    list.insertAtEnd("c");

    const removed = list.removeFromFront();

    t.equal(removed.data, "a");
    t.equal(list.first.data, "b");
});

test("queue should enque", t => {
    t.plan(1);

    const queue = new Queue();
    queue.enque("a");
    queue.enque("b");

    t.equal(queue.tail(), "b");
});

test("queue should deque", t => {
    t.plan(1);

    const queue = new Queue();
    queue.enque("a");
    queue.enque("b");
    queue.enque("c");

    const data = queue.deque();
    t.equal(data, "a");
});
