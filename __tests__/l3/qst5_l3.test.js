import embaralhar from "../../src/listas/l3/qst5_l3";
import Lista from "../../src/Lista.js";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Embaralha a lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l = embaralhar(l);
    expect(l.head.proximo.dado).toBe("20");
});