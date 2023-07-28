import { test } from "tape";

import { quicksort } from "./quicksort.js";

test("quicksort should sort unordered array", t => {
    t.plan(1);
    t.deepEqual(quicksort([4,2,7,1,3]), [1,2,3,4,7]);
});
