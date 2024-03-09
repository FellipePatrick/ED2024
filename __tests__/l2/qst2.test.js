import Fila from '../../src/listas/l2/qst2_l2.js';

let f;

beforeEach(
    () => {
        f = new Fila(3);
    }
)

test("Fila é instanciada vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
        expect(f.isFull()).toBe(false);
    }
);

test("Inserções",
    () => {
        f.enqueue("A");
        f.enqueue("B");
        f.enqueue("C");
        f.dequeue();
        f.dequeue();
        expect(f.front()).toBe("C");
    }
);
