import intercalaFila from "../../src/listas/l2/qst4_l2.js";
import Fila from "../../src/Fila.js";
let f1;
let f2;

beforeEach(
    () => {
        f1 = new Fila(2);
        f2 = new Fila(2);
    }
)

test("Intercala as filas ", () =>{
    f1.enqueue("A");
    f1.enqueue("B");
    f2.enqueue("C");
    f2.enqueue("D");
    let f = intercalaFila(f1, f2);
    expect(f.toString()).toBe("A C B D ");
});