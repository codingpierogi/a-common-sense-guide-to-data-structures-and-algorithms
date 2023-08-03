import { test } from "tape";

import { Node, LinkedList } from "./linked-list.js";

test("linkedlist should read node", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const list = new LinkedList(a);

    t.equal(list.read(3), "d");
});

test("linkedlist should throw when read node out of bounds", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");

    a.next = b;

    const list = new LinkedList(a);

    t.throws(() => list.read(3), { message: "OutOfBounds" });
});

test("linkedlist should find value", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const list = new LinkedList(a);

    t.equal(list.indexOf("d"), 3);
});

test("linkedlist should not find value", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const list = new LinkedList(a);

    t.equal(list.indexOf("e"), null);
});

test("linkedlist should insert data at the beginning of list", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");

    a.next = b;

    const list = new LinkedList(a);

    list.insertAtIndex(0, "e");

    t.equal(list.indexOf("e"), 0);
});

test("linkedlist should insert data at the middle of list", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");

    a.next = b;

    const list = new LinkedList(a);

    list.insertAtIndex(1, "e");

    t.equal(list.indexOf("e"), 1);
});

test("linkedlist should delete data at the beginning of list", t => {
    t.plan(1);

    const a = new Node("a");
    const b = new Node("b");

    a.next = b;

    const list = new LinkedList(a);

    list.deleteAtIndex(0);

    t.equal(list.read(0), "b");
});

test("linkedlist should delete data at the middle of list", t => {
    t.plan(2);

    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");

    a.next = b;
    b.next = c;

    const list = new LinkedList(a);

    list.deleteAtIndex(1);

    t.equal(list.read(0), "a");
    t.equal(list.read(1), "c");
});