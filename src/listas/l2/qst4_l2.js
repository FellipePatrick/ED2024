import Fila from "../../Fila.js";

const intercalaFila = (f1, f2) => {
    let f = new Fila(f1.capacidade+f2.capacidade);
    for(let i = 0; i < f1.capacidade; i++){
        f.enqueue(f1.front());
        f1.dequeue();
        f.enqueue(f2.front());
        f2.dequeue();
    }
    return f;
}

export default intercalaFila;