import Lista from "../../src/Lista.js";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("inserir na lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    expect(l.size).toBe(5);
});

test("buscar na lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    expect(l.search("30")).toBe(true);
});

test("remover ultimo da lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    l.removeLast();
    expect(l.size).toBe(4);
});

test("remover primeiro da lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    l.removeFirst();
    expect(l.size).toBe(4);
});

test("tamanho da lista", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    expect(l.length()).toBe(5);
});

test("lista vazia", () => {
    expect(l.isEmpty()).toBe(true);
});

//adicionar em uma posição

test("adicionar em uma posição", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    l.addAt(2, "25");
    expect(l.search("25")).toBe(true);
});

test("remove em uma posição", () => {
    l.append("10");
    l.append("20");
    l.append("30");
    l.append("40");
    l.append("50");
    l.removeAt(2);
    expect(l.length()).toBe(4);
});