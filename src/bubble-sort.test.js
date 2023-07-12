import { test } from "tape";

import { bubbleSort } from "./bubble-sort.js";

test("bubble sort should sort unordered array", t => {
    t.plan(1);
    t.deepEqual(bubbleSort([4,2,7,1,3]), [1,2,3,4,7]);
});
