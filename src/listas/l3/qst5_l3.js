
const embaralhar = (L) => {
    let aux = L.head.proximo;
    let anterior = null;
    let guardaVez = null;
    let proximo = null;
    while(aux.proximo !== null){
        anterior = aux;
        guardaVez = anterior;
        anterior.dado = aux.proximo.dado;
        aux.proximo.dado = guardaVez.dado;
        aux = aux.proximo;
    }
    return L;
}

export default embaralhar;