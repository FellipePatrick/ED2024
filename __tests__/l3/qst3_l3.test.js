import Lista from "../../src/listas/l3/qst3_l3";

let L;

beforeEach(
    () => {
        L = new Lista();
    }
);



test("Inserções",
    () => {
        L.add(1);
        expect(L.dados).toBe(1);
    }
);

test("Inserções",
    () => {
        L.add(1);
        L.add(2);
        L.removeFirst();
        expect(L.dados).toBe(2);
    }
);