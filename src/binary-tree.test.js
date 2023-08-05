import { test } from "tape";

import { TreeNode, search, insert, remove, print } from "./binary-tree.js";

test("binary tree should search", t => {
    t.plan(1);

    const node4 = new TreeNode(4);
    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, node4, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    t.equal(search(61, root), node61);
});

test("binary tree should search and not find", t => {
    t.plan(1);

    const node4 = new TreeNode(4);
    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, node4, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    t.notOk(search(100));
});


test("binary tree should insert", t => {
    t.plan(1);

    const node4 = new TreeNode(4);
    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, node4, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    insert(45, root);

    t.ok(search(45, root));
});

test("binary tree should remove node with no children", t => {
    t.plan(1);

    const node4 = new TreeNode(4);
    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, node4, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    remove(4, root);

    t.notOk(search(4, root));
});

test("binary tree should remove node with one child", t => {
    t.plan(2);

    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, undefined, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    remove(10, root);

    t.notOk(search(10, root));
    t.ok(search(11, root));
});

test("binary tree should remove node with two children", t => {
    t.plan(3);

    const node4 = new TreeNode(4);
    const node11 = new TreeNode(11);
    const node10 = new TreeNode(10, node4, node11);

    const node30 = new TreeNode(30);
    const node40 = new TreeNode(40);
    const node33 = new TreeNode(33, node30, node40);

    const node25 = new TreeNode(25, node10, node33);

    const node52 = new TreeNode(52);
    const node61 = new TreeNode(61);
    const node56 = new TreeNode(56, node52, node61);

    const node82 = new TreeNode(82);
    const node95 = new TreeNode(95);
    const node89 = new TreeNode(89, node82, node95);

    const node75 = new TreeNode(75, node56, node89);

    const root = new TreeNode(50, node25, node75);

    remove(10, root);

    t.notOk(search(10, root));
    t.ok(search(4, root));
    t.ok(search(11, root));
});

test("binary tree should remove node with two children", t => {
    t.plan(1);

    const root = new TreeNode("Moby Dick");

    insert("Great Expectations", root);
    insert("Robinson Crusoe", root);
    insert("Alice in Wonderland", root);
    insert("Lord of the Flies", root);
    insert("Pride and Prejudice", root);
    insert("The Odyssey", root);

    print(root);
    t.pass();
});
