import Pilha from "../src/listas/qst2_l1.js";

let p;

beforeEach(
    () => {
        p = new Pilha(2,2);
    }
)

test("Pilha A e B são instanciadas vazias",
    () => {
        expect(p.isEmptyA()).toBe(true);
        expect(p.isFullA()).toBe(false);
        expect(p.isEmptyB()).toBe(true);
        expect(p.isFullB()).toBe(false);
    }
);

test("Inserções",
    () => {
        p.pushA("A");
        p.pushA("B");
        expect(p.topA()).toBe("B");
        p.pushB("B");
        p.pushB("C");
        expect(p.topB()).toBe("C");
    }
);

test("Remoção",
    () => {
        p.pushA("A");
        expect(p.topA()).toBe("A");
        p.pushA("B");
        expect(p.topA()).toBe("B");
        p.popA();
        expect(p.topA()).toBe("A");
    }
);

test("underflow",
    () => {
        expect(() => p.popB()).toThrow("Stackunderflow");
    }
);

test("overflow",
    () => {
        p.pushA("A");
        p.pushA("B");
        p.pushB("C");
        p.pushB("D");

        expect(p.pushA("BAA")).toBe("Stackoverflow");
    }
);