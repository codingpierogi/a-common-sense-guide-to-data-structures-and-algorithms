import { test } from "tape";

import { insertionSort } from "./insertion-sort.js";

test("insertion sort should sort unordered array", t => {
    t.plan(1);
    t.deepEqual(insertionSort([4,2,7,1,3]), [1,2,3,4,7]);
});
