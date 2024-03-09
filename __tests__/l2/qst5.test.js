import Deque from "../../src/listas/l2/qst5_l2.js"

let d;

beforeEach(
    () => {
        d = new Deque(4);
    }
)

test("Testando se adiciona no final e inicio", () =>{
    d.enqueueFinal("B");
    d.enqueueFinal("A");
    expect(d.frontCauda()).toBe("B");
    d.enqueueInicio("X");
    d.enqueueInicio("Z");
    expect(d.frontCabeca()).toBe("X");   
});

test("fila vazia", () => {
    d.enqueueFinal("a");
    d.removerFinal();
    d.enqueueInicio("B");
    d.removerComeco();
    expect(d.removerFinal()).toBe("Queueunderflow");
});