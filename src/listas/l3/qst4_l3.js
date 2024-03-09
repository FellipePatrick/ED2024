import Lista from "../../Lista";

const Inverte = (L) => {
    let atual = L.head;
    let anterior = null;
    let proximo = null;
    while (atual.proximo !== null) {
        proximo = atual.proximo;
        atual.proximo = anterior;
        anterior = atual;
        atual = proximo;
    }
    atual.proximo = anterior;
    L.head = atual;
    return L;
}

export default Inverte;