import StringLista from "../../src/listas/l3/qst6_l3";

let l;

beforeEach(
    () => {
        l = new StringLista();
    }
);

test("Teste one", () => {
    l.lista.add("A");
    l.lista.add("B");
    l.lista.add("C");
    l.lista.add("D");
    expect(l.subLista(1, 3)).toBe("C B A ");
});
