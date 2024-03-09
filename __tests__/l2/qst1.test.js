import Pilha from "../../src/listas/l2/qst1_l2.js";

let p;

beforeEach(
    () => {
        p = new Pilha(3);
    }
)

test("Pilha é instanciada vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
        expect(p.isFull()).toBe(false);
    }
);


test("Inserções",
    () => {
        p.push("A");
        p.push("B");
        p.push("C");
        p.pop();
        p.pop();
        expect(p.top()).toBe("A");
    }
);

test("Pilha cheia", ()=>{
    p.push("A");
    p.push("B");
    p.push("C");
    expect(()=>{p.push("D")}).toThrow("Stackoverflow");
});

test("Remoção", ()=>{
    p.push("A");
    p.push("B");
    p.push("D");
    p.pop();
    expect(p.top()).toBe("B");
});