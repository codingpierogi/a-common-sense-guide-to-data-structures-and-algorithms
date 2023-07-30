import { test } from "tape";

import { quickselect } from "./quickselect.js";

test("quickselect should find kth lowest value", t => {
    t.plan(1);
    t.equal(quickselect(1, [0,50,20,10,60,30]), 10);
});
