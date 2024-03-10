import Lista from "../../src/listas/l3/Lista";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

//teste as funções ordenaPorNome e ordenaPorIdade

test("inserir na lista", () => {
    l.add("10", 10);
    l.add("20", 20);
    l.add("30", 30);
    l.add("40", 40);
    l.add("50", 50);
    expect(l.size).toBe(5);
});

test("ordenar por idade", () => {
    l.add("joão", 10);
    l.add("fellipe", 50);
    
    l.add("andre", 30);
    l.add("andre", 5);
    l.ordenaPorIdade();
    expect(l.head.proximo.idade).toBe(50);
    expect(l.head.proximo.proximo.idade).toBe(30);
    expect(l.head.proximo.proximo.proximo.idade).toBe(10);
    expect(l.head.proximo.proximo.proximo.proximo.idade).toBe(5);
});