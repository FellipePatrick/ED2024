import Conjunto from "../../src/Conjunto";
import modulo from "../../src/listas/l4/qst4";

let matriz;
let bilhete;

beforeEach(() => {
    matriz = [];
    bilhete = new Conjunto();
});

test("teste modulo", () => {
    bilhete.addLista([1,2,3,4,5,6]);
    let c1 = new Conjunto();
    c1.addLista([1,2,3,4,5,6]);
    let c2 = new Conjunto();
    c2.addLista([1,2,3,4,5,7]);
    let c3 = new Conjunto();
    c3.addLista([1,2,3,4,9,8]);
    matriz[0] = c1;
    matriz[1] = c2;
    matriz[2] = c3;
    expect(modulo(bilhete, matriz)).toBe(true);
});