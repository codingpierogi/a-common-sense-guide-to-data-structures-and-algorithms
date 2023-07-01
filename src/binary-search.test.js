import { test } from "tape";

import { binarySearch } from "./binary-search.js";

test("binary search should find search value in ordered array", t => {
    t.plan(1);
    t.equal(binarySearch([10,20,30,40,50], 40), 40);
});

test("binary search should not find search value in ordered array", t => {
    t.plan(1);
    t.equal(binarySearch([10,20,30,40,50,60], 25), -1);
});
