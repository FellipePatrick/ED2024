import FilaCircular from "../src/listas/FilaCircular";

let fila;

beforeEach(() => {
    fila = new FilaCircular();
});

test("enqueue", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(4);
    fila.enqueue(5);
    fila.enqueue(6);
    fila.enqueue(7);
    fila.enqueue(8);
    fila.enqueue(9);
    fila.enqueue(10);
    expect(fila.toString()).toBe("1,2,3,4,5");
});

test("dequeue", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(4);
    fila.enqueue(5);
    fila.dequeue();
    fila.dequeue();
    expect(fila.toString()).toBe("3,4,5");
});

test("front", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.enqueue(4);
    fila.enqueue(5);
    expect(fila.front()).toBe(1);
});

test("isEmpty", () => {
    expect(fila.isEmpty()).toBe(true);
    fila.enqueue(1);
    expect(fila.isEmpty()).toBe(false);
});

test("isFull", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    fila.dequeue();
    fila.enqueue(4);
    fila.enqueue(5);
    fila.enqueue(5);
    expect(fila.isFull()).toBe(true);
});