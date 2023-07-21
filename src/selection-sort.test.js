import { test } from "tape";

import { selectionSort } from "./selection-sort.js";

test("selection sort should sort unordered array", t => {
    t.plan(1);
    t.deepEqual(selectionSort([4,2,7,1,3]), [1,2,3,4,7]);
});
