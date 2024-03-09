import Fila from "../../src/Fila.js";
import reverse from "../../src/listas/l2/qst6_l2.js";
let f;

beforeEach(
    () => {
        f = new Fila(3);
    }
)

test("recursividade", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    reverse(f);
    expect(f.toString()).toBe("C B A ");
});