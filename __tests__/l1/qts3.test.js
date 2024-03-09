import Pilha from "../../src/Pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(4);
    }
)

test("verifica inversao", 
    () => {
        p.push("D");
        p.push("B");
        p.push("C");
        p.push("A");
        p.inverte();
        expect(p.top()).toBe("D");
        p.pop();
        expect(p.top()).toBe("C");
        p.pop();
        expect(p.top()).toBe("B");
        p.pop();
        expect(p.top()).toBe("A");
    }
);