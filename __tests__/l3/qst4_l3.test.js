import Inverte from "../../src/listas/l3/qst4_l3";
import Lista from "../../src/Lista.js";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Inverte a fila", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    l = Inverte(l);
    expect(l.size).toBe(5);
    expect(l.head.dado).toBe("50");
    expect(l.head.proximo.dado).toBe("40");
    expect(l.head.proximo.proximo.dado).toBe("30");
    expect(l.head.proximo.proximo.proximo.dado).toBe("20");
    expect(l.head.proximo.proximo.proximo.proximo.dado).toBe("10");
});
