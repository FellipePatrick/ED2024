import Fila from "../../src/listas/l3/qst2_l3";

let f;

beforeEach(
    () => {
        f = new Fila();
    }
);

test("Fila instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
    }
);

test("Inserções",
    () => {
        f.enqueue("A");
        expect(f.front()).toBe("A");
    }
);



test("Underflow",
    () => {
        expect(f.dequeue()).toBe("Queueunderflow");
    }
);

test("Tamanho da Fila recem instanciada é zero",
    () => {
        expect(f.length()).toBe(0);
    }
);

test("A Fila recem instanciada após um enqueueu o tamanho é 1",
    () => {
        f.enqueue('A')
        expect(f.length()).toBe(1);
    }
);

test("Outro teste de FIFO",
    () => {
        f.enqueue('A')
        f.enqueue('B')
        f.dequeue()
        expect(f.front()).toBe('B');
    }
);