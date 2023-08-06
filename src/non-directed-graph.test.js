import { test } from "tape";

import { Person } from "./non-directed-graph.js";

test("non-directed graph should print network", t => {
    t.plan(1);

    const alice = new Person("Alice");
    const bob = new Person("Bob");
    const candy = new Person("Candy");
    const derek = new Person("Derek");
    const elaine = new Person("Elaine");
    const fred = new Person("Fred");
    const gina = new Person("Gina");
    const helen = new Person("Helen");
    const irena = new Person("Irena");

    alice.addFriends(bob, candy, derek, elaine);
    bob.addFriends(fred);
    derek.addFriends(gina);
    fred.addFriends(helen);
    gina.addFriends(irena);

    alice.print();

    t.pass();
});
