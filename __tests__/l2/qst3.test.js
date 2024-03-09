import caminhoes from "../../src/listas/l2/qst3_ls.js";
import Fila from "../../src/Fila.js";
let f;

beforeEach(
    () => {
        f = new Fila(2);
    }
)

test("Ver se numero de caminhões que não sairam: ", () =>{
    f.enqueue("Caminhão 1");
    expect(caminhoes(f)).toBe("Numero de caminhões em espera: 1");
});

test("Todos sairam", () => {
    f.enqueue("Caminhão 1");
    f.enqueue("Caminhão 2");
    f.dequeue();
    f.dequeue();
    expect(caminhoes(f)).toBe("Todos os caminhões sairam papa a entrega!");
});

test("Nenhum saiu", () => {
    f.enqueue("Caminhão 1");
    f.enqueue("Caminhão 2");
    expect(caminhoes(f)).toBe("Nenhum caminhão saiu para a entrega!");
});